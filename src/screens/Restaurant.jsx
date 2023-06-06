import { useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Image, ScrollView, StatusBar, View } from 'react-native';
import { useDispatch } from 'react-redux';
import ButtonBack from '../components/ButtonBack';
import ReviewLocation from '../components/ReviewLocation';
import CartItem from '../components/restaurant/CartItem';
import Dishes from '../components/restaurant/Dishes';
import TextBig from '../components/text/TextBig';
import TextBigger from '../components/text/TextBigger';
import TextSmaller from '../components/text/TextSmaller';
import { setRestaurant } from '../slices/restaurantSlice';

const RestaurantScreen = () => {
  const {params} = useRoute();

  const dispatch = useDispatch();

  useEffect(() => {
    if (params) {
      dispatch(setRestaurant({...params}));
    }
  }, []);

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
          <Image source={params.image} style={{width: '100%', height: 250}} />
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
            <TextBigger text={params.name} />

            <ReviewLocation
              style={{
                flexDirection: 'row',
                marginVertical: 4,
                gap: 10,
                alignItems: 'center',
              }}
              stars={params.stars}
              reviews={params.reviews}
              address={params.address}
              category={params.category}
            />

            <TextSmaller text={params.description} />
          </View>
          <TextBig
            text="Menu"
            style={{
              marginBottom: 12,
              marginHorizontal: 20,
            }}
          />

          {params.dishes.map((dish, index) => (
            <Dishes key={index} dish={{...dish}} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default RestaurantScreen;
