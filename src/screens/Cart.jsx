import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Body from '../components/Body';
import ButtonBack from '../components/ButtonBack';
import CartDelivery from '../components/cart/CartDelivery';
import CartFooter from '../components/cart/CartFooter';
import CartFooterEmpty from '../components/cart/CartFooterEmpty';
import CartItem from '../components/cart/CartItem';
import EmptyCard from '../components/cart/EmptyCard';
import TextBigger from '../components/text/TextBigger';
import TextSmaller from '../components/text/TextSmaller';
import {
  cartItems,
  removeFromCart,
  selectCartTotalPrice,
} from '../slices/cartSlice';

const CartScreen = () => {
  const products = useSelector(state => state.cart.cart);
  const price = useSelector(selectCartTotalPrice);
  const dispatch = useDispatch();
  const nav = useNavigation(cartItems);
  const empty = products.length === 0;

  return (
    <Body>
      <ButtonBack />
      <View style={styles.cartHeader}>
        <TextBigger text="Your cart" />
        <TextSmaller text={products.name} />
      </View>

      <CartDelivery />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 50, paddingTop: 20}}>
        {empty ? (
          <EmptyCard />
        ) : (
          products?.map((dish, index) => {
            return (
              <CartItem
                dish={dish}
                onPressRemove={() => dispatch(removeFromCart(dish.id))}
                index={index}
              />
            );
          })
        )}
      </ScrollView>

      {empty ? (
        <CartFooterEmpty onPressNavigateHome={() => nav.navigate('Home')} />
      ) : (
        <CartFooter price={price} />
      )}
    </Body>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  cartHeader: {
    alignItems: 'center',
    marginBottom: 10,
  },
});
