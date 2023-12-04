import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import TextMedium from '../text/TextMedium';

const EmptyCard = () => (
  <View style={styles.emptyCardContainer}>
    <Image
      source={require('../../assets/images/emptyCart1.png')}
      style={styles.emptyCardImage}
    />
    <TextMedium text="Your cart is empty" />
  </View>
);

export default EmptyCard;

const styles = StyleSheet.create({
  emptyCardContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  emptyCardImage: {
    width: '100%',
    height: 200,
  },
});
