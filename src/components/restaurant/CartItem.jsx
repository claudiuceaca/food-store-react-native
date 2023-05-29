import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {themeColors} from '../../theme';

const CartItem = () => {
  return (
    <View style={styles.cartItemContainer}>
      <TouchableOpacity
        style={styles.cartItemButton}
        activeOpacity={0.7}>
        <View style={styles.cartItemCountContainer}>
          <Text style={styles.cartItemText}>3</Text>
        </View>
        <Text style={styles.cartItemText}>View Cart</Text>
        <Text style={styles.cartItemText}>${23}</Text>
      </TouchableOpacity>
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
    backgroundColor: themeColors.bgColor(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    borderRadius: 50,
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
