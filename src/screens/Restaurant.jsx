import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Image, ScrollView, StatusBar, View} from 'react-native';
import ButtonBack from '../components/ButtonBack';
import ReviewLocation from '../components/ReviewLocation';
import CartItem from '../components/restaurant/CartItem';
import Dishes from '../components/restaurant/Dishes';
import TextBig from '../components/text/TextBig';
import TextBigger from '../components/text/TextBigger';
import TextSmaller from '../components/text/TextSmaller';
import useRestaurant from '../hooks/restaurantHook';

const RestaurantScreen = () => {
  const {params} = useRoute();
  const {restaurantData} = useRestaurant(params);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar
        translucent
        backgroundColor="rgba(0,0,0,0)"
        barStyle="light-content"
      />
      <CartItem />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{position: 'relative'}}>
          <Image
            source={restaurantData.image}
            style={{width: '100%', height: 250}}
          />
          <ButtonBack />
        </View>
        <View
          style={{
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            backgroundColor: 'white',
            top: -33,
            minHeight: 30,
            marginBottom: 60,
          }}>
          <View style={{padding: 20}}>
            <TextBigger text={restaurantData.name} />

            <ReviewLocation
              style={{
                flexDirection: 'row',
                marginVertical: 4,
                gap: 10,
                alignItems: 'center',
              }}
              stars={restaurantData.stars}
              reviews={restaurantData.reviews}
              address={restaurantData.address}
              category={restaurantData.category}
            />

            <TextSmaller text={restaurantData.description} />
          </View>
          <TextBig
            text="Menu"
            style={{
              marginBottom: 12,
              marginHorizontal: 20,
            }}
          />

          {restaurantData.dishes.map((dish, index) => (
            <Dishes key={index} dish={{...dish}} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default RestaurantScreen;
