import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import * as Icon from 'react-native-feather';
import {themeColors} from '../../theme';
import DishContainer from '../DishContainer';
import TextMedium from '../text/TextMedium';
import TextSmall from '../text/TextSmall';

const CartItem = ({dish, onPressRemove, index}) => (
  <DishContainer style={{paddingHorizontal: 20}} key={index}>
    <TextSmall
      text={`${dish.quantity} x`}
      style={{color: themeColors.bgColor(1)}}
    />
    <Image source={dish.image} style={styles.cartDishImage} />
    <TextMedium text={dish.name} style={{flex: 1}} />
    <TextMedium text={`$${dish.price}`} />
    <TouchableOpacity onPress={onPressRemove} style={styles.cartDishButton}>
      <Icon.Minus strokeWidth={2} stroke="white" width={20} height={20} />
    </TouchableOpacity>
  </DishContainer>
);

export default CartItem;

const styles = StyleSheet.create({
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
