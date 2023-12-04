import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import TextSmall from '../text/TextSmall';

const CartDelivery = () => {
  const handleChangePress = () => {
    console.log("Can't change at this time, try later!");
  };

  return (
    <View style={styles.cartDelivery}>
      <Image
        source={require('../assets/images/bikeGuy.png')}
        style={{width: 100, height: 100}}
      />
      <TextSmall text="Deliver in 20-30 minutes" />
      <TouchableOpacity style={{flex: 1}} onPress={handleChangePress}>
        <TextSmall text="Change" style={styles.cartDeliveryButtonText} />
      </TouchableOpacity>
    </View>
  );
};

export default CartDelivery;

const styles = StyleSheet.create({
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
});
