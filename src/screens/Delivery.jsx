import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import TextBigger from '../components/text/TextBigger';
import TextMedium from '../components/text/TextMedium';
import TextSmall from '../components/text/TextSmall';
import TextSmaller from '../components/text/TextSmaller';
import {featured} from '../data';
import {themeColors} from '../theme';
import * as Icon from 'react-native-feather';
import Map from '../components/delivery/Map';
import ContainerTopRadius from '../components/ContainerTopRadius';
import Button from '../components/Button';
import ButtonBack from '../components/ButtonBack';

const DeliveryScreen = () => {
  const restaurant = featured.restaurants[0];
  const nav = useNavigation();

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor="transparent" barStyle="light-content" />
      <ButtonBack />

      <Map />

      <ContainerTopRadius>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <TextSmall text="Estimated Arrival" style={{fontWeight: 600}} />
            <TextBigger text="20-30 Minutes" style={{fontWeight: 900}} />
            <TextSmaller
              text="Your order is own its way!"
              style={{fontWeight: 500, color: 'black'}}
            />
          </View>
          <Image
            source={require('../assets/images/bikeGuy2.gif')}
            style={{width: 90, height: 90}}
          />
        </View>

        <Button>
          <Image
            source={require('../assets/images/deliveryGirl.webp')}
            style={{width: 70, height: 70, borderRadius: 50}}
          />
          <View style={{flex: 1, marginLeft: 15}}>
            <TextMedium text="Alina Maria" style={{color: 'white'}} />
            <TextSmaller text="Your Rider" style={{color: 'white'}} />
          </View>
          <View style={{flexDirection: 'row', gap: 10, marginRight: 5}}>
            <TouchableOpacity
              style={{backgroundColor: 'white', padding: 6, borderRadius: 50}}>
              <Icon.Phone
                fill={themeColors.bgColor(1)}
                stroke={themeColors.bgColor(1)}
                strokeWidth={1}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{backgroundColor: 'white', padding: 6, borderRadius: 50}}>
              <Icon.X stroke={'red'} strokeWidth={4} />
            </TouchableOpacity>
          </View>
        </Button>
      </ContainerTopRadius>
    </View>
  );
};

export default DeliveryScreen;

const styles = StyleSheet.create({});
