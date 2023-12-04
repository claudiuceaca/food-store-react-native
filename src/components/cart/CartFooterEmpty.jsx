import React from 'react';
import { View } from 'react-native';
import Button from '../Button';
import TextBig from '../text/TextBig';

const CartFooterEmpty = ({ onPressNavigateHome }) => (
  <View style={{ margin: 20 }}>
    <Button onPress={onPressNavigateHome} style={{ justifyContent: 'center' }}>
      <TextBig text="Find something to add in Cart" style={{ color: 'white' }} />
    </Button>
  </View>
);

export default CartFooterEmpty;
