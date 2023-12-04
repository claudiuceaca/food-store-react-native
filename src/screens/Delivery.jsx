import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import * as Icon from 'react-native-feather';
import Button from '../components/Button';
import ContainerTopRadius from '../components/ContainerTopRadius';
import Map from '../components/delivery/Map';
import TextBigger from '../components/text/TextBigger';
import TextMedium from '../components/text/TextMedium';
import TextSmall from '../components/text/TextSmall';
import TextSmaller from '../components/text/TextSmaller';
import {themeColors} from '../theme';

const DeliveryScreen = () => {
  const nav = useNavigation();

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor="transparent" barStyle="light-content" />
      <Map />

      <ContainerTopRadius>
        <View style={styles.containerDelivery}>
          <View>
            <TextSmall text="Estimated Arrival" style={{fontWeight: 600}} />
            <TextBigger text="20-30 Minutes" style={{fontWeight: 900}} />
            <TextSmaller
              text="Your order is own its way!"
              style={styles.textSmaller}
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
            style={styles.deliveryPerson}
          />
          <View style={styles.deliveryPersonDetails}>
            <TextMedium text="Alina Maria" style={{color: 'white'}} />
            <TextSmaller text="Your Rider" style={{color: 'white'}} />
          </View>
          <View style={styles.iconsContainer}>
            <TouchableOpacity style={styles.iconPhone}>
              <Icon.Phone
                fill={themeColors.bgColor(1)}
                stroke={themeColors.bgColor(1)}
                strokeWidth={1}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => nav.navigate('Home')}
              style={styles.iconCancel}>
              <Icon.X stroke={'red'} strokeWidth={4} />
            </TouchableOpacity>
          </View>
        </Button>
      </ContainerTopRadius>
    </View>
  );
};

export default DeliveryScreen;

const styles = StyleSheet.create({
  containerDelivery: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textSmaller: {
    fontWeight: 500,
    color: 'black',
  },
  deliveryPerson: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  deliveryPersonDetails: {
    flex: 1,
    marginLeft: 15,
  },
  iconsContainer: {
    flexDirection: 'row',
    gap: 10,
    marginRight: 5,
  },
  iconPhone: {
    backgroundColor: 'white',
    padding: 6,
    borderRadius: 50,
  },
  iconCancel: {
    backgroundColor: 'white',
    padding: 6,
    borderRadius: 50,
  },
});
