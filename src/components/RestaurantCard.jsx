import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import * as Icon from 'react-native-feather';

const RestaurantCard = ({item}) => {
  const nav = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => nav.navigate('Restaurant', {...item})}
      activeOpacity={0.8}
      style={styles.restaurantContainer}>
      <Image style={styles.restaurantImage} source={item.image} />
      <View style={styles.restaurantDetails}>
        <Text style={styles.restaurantName}>{item.name}</Text>
        <View style={styles.restaurantDetail}>
          <Image
            source={require('../assets/images/fullStar.png')}
            style={{width: 15, height: 15}}
          />
          <Text>
            <Text>{item.stars} </Text>
            <Text>
              ({item.reviews} review) . <Text>{item.category}</Text>
            </Text>
          </Text>
        </View>
        <View style={styles.restaurantDetail}>
          <Icon.MapPin color="gray" width={15} height={15} />

          <Text>Nearby. {item.address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({
  restaurantContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,

    borderRadius: 21,
    marginRight: 20,
    width: 250,
    marginBottom: 10,
    backgroundColor: 'white',
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
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: 700,
  },
  restaurantDetail: {
    flexDirection: 'row',
    gap: 5,
  },
});
