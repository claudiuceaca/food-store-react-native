import React from 'react';
import {Text, View} from 'react-native';
import Body from '../components/Body';
import {useRoute} from '@react-navigation/native';

const RestaurantScreen = () => {
  const {params} = useRoute();

  console.log(params);
  return (
    <Body>
      <View>
        <Text>RestaurantScreen</Text>
      </View>
    </Body>
  );
};

export default RestaurantScreen;
