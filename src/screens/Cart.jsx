import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Body from '../components/Body';
import ButtonBack from '../components/ButtonBack';
import TextBigger from '../components/text/TextBigger';
import TextSmall from '../components/text/TextSmall';
import TextSmaller from '../components/text/TextSmaller';
import {themeColors} from '../theme';
import DishContainer from '../components/DishContainer';
import TextMedium from '../components/text/TextMedium';
import * as Icon from 'react-native-feather';
import TitlePrice from '../components/cart/TitlePrice';
import TextBig from '../components/text/TextBig';
import {useNavigation} from '@react-navigation/native';
import ContainerTopRadius from '../components/ContainerTopRadius';
import Button from '../components/Button';
import {useDispatch, useSelector} from 'react-redux';
import {cartItems, removeFromCart} from '../slices/cartSlice';
import {selectCartTotalPrice} from '../slices/cartSlice';

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


        <View style={styles.cartDelivery}>
          <Image
            source={require('../assets/images/bikeGuy.png')}
            style={{width: 100, height: 100}}
          />
          <TextSmall text="Deliver in 20-30 minutes" />
          <TouchableOpacity style={{flex: 1}}>
            <TextSmall text="Change" style={styles.cartDeliveryButtonText} />
          </TouchableOpacity>
        </View>
   

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 50, paddingTop: 20}}>
        {empty ? (
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop:40
            }}>
            <Image
              source={require('../assets/images/emptyCart1.png')}
              style={{width: '100%', height: 200}}
            />
            <TextMedium text="Your cart its empty" />
          </View>
        ) : (
          products?.map((dish, index) => {
            return (
              <DishContainer key={index} style={{paddingHorizontal: 20}}>
                <TextSmall
                  text={`${dish.quantity} x`}
                  style={{color: themeColors.bgColor(1)}}
                />
                <Image source={dish.image} style={styles.cartDishImage} />
                <TextMedium text={dish.name} style={{flex: 1}} />
                <TextMedium text={`$${dish.price}`} />
                <TouchableOpacity
                  onPress={() => dispatch(removeFromCart(dish.id))}
                  style={styles.cartDishButton}>
                  <Icon.Minus
                    strokeWidth={2}
                    stroke="white"
                    width={20}
                    height={20}
                  />
                </TouchableOpacity>
              </DishContainer>
            );
          })
        )}
      </ScrollView>

      {empty ? (
        <View style={{margin: 20}}>
          <Button
            onPress={() => nav.navigate('Home')}
            style={{
              justifyContent: 'center',
            }}>
            <TextBig
              text="Find something to add in Cart"
              style={{color: 'white'}}
            />
          </Button>
        </View>
      ) : (
        <ContainerTopRadius
          style={{
            backgroundColor: themeColors.bgColor(0.2),
            padding: 20,
            gap: 10,
          }}>
          <TitlePrice title="Subtotal" price={price} />
          <TitlePrice title="Delivery Fee" price="$2" />
          <TitlePrice
            title="Order Total"
            price={`${price + 2}`}
            style={{fontWeight: 800, color: 'black'}}
          />

          <Button
            onPress={() => nav.navigate('OrderPreparing')}
            style={{
              justifyContent: 'center',
            }}>
            <TextBig text="Place Order" style={{color: 'white'}} />
          </Button>
        </ContainerTopRadius>
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
  cartDelivery: {
    backgroundColor: themeColors.bgColor(0.2),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  cartDeliveryButtonText: {
    color: themeColors.bgColor(1),
    alignSelf: 'flex-end',
  },
  cartDishImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginHorizontal: 10,
  },
  cartDishButton: {
    backgroundColor: themeColors.bgColor(1),
    borderRadius: 50,
    padding: 3,
    marginLeft: 5,
  },
});
