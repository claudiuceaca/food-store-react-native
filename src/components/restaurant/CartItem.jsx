import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {selectCartItems, selectCartTotalPrice} from '../../slices/cartSlice';
import Button from '../Button';

const CartItem = () => {
  const nav = useNavigation();
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotalPrice);

  if (!cartItems.length) return;

  return (
    <View style={styles.cartItemContainer}>
      <Button
        onPress={() => nav.navigate('Cart')}
        style={styles.cartItemButton}
        activeOpacity={0.7}>
        <View style={styles.cartItemCountContainer}>
          <Text style={styles.cartItemText}>{cartItems.length}</Text>
        </View>
        <Text style={styles.cartItemText}>View Cart</Text>
        <Text style={styles.cartItemText}>${total}</Text>
      </Button>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  cartItemContainer: {
    position: 'absolute',
    bottom: 25,
    zIndex: 20,
    width: '100%',
  },
  cartItemButton: {
    marginHorizontal: 20,
    padding: 20,
  },
  cartItemCountContainer: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    padding: 8,
    paddingHorizontal: 14,
    borderRadius: 50,
  },
  cartItemText: {
    color: 'white',
    fontWeight: 800,
  },
});
