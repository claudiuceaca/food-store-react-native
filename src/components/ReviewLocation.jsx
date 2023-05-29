import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import * as Icon from 'react-native-feather';
import TextSmaller from './text/TextSmaller';

const ReviewLocation = ({style, stars, category, address, reviews}) => {
  return (
    <View style={{...style}}>
      <View style={styles.restaurantDetail}>
        <Image
          source={require('../assets/images/fullStar.png')}
          style={{width: 15, height: 15}}
        />
        <Text>
          <TextSmaller text={stars} />
          <Text>
            <TextSmaller text={` (${reviews} review)`} /> .{' '}
            <TextSmaller text={category} />
          </Text>
        </Text>
      </View>
      <View style={styles.restaurantDetail}>
        <Icon.MapPin color="gray" width={15} height={15} />
        <TextSmaller text={`Nearby. ${address}`} />
      </View>
    </View>
  );
};

export default ReviewLocation;

const styles = StyleSheet.create({
  restaurantDetail: {
    flexDirection: 'row',
    gap: 5,
  },
});
