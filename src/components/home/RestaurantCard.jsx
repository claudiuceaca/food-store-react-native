import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import ReviewLocation from '../ReviewLocation';
import TextBig from '../text/TextBig';

const RestaurantCard = ({item}) => {
  const nav = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => nav.navigate('Restaurant', {...item})}
      activeOpacity={0.8}
      style={styles.restaurantContainer}>
      <Image style={styles.restaurantImage} source={item.image} />
      <View style={styles.restaurantDetails}>
        <TextBig text={item.name} />

        <ReviewLocation
          stars={item.stars}
          reviews={item.reviews}
          address={item.address}
          category={item.category}
        />
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({
  restaurantContainer: {
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,

    backgroundColor: 'white',
    alignItems: 'flex-start',
    borderRadius: 21,
    marginRight: 20,
    width: 250,
    marginBottom: 10,

  },
  restaurantImage: {
    width: '100%',
    height: 144,
    borderTopLeftRadius: 21,
    borderTopRightRadius: 21,
  },
  restaurantDetails: {
    padding: 10,
    gap: 5,
    alignItems: 'flex-start',
  },
  restaurantDetail: {
    flexDirection: 'row',
    gap: 5,
  },
});
