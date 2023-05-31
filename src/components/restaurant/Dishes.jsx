import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Icon from 'react-native-feather';
import { themeColors } from '../../theme';
import TextMedium from '../text/TextMedium';
import TextSmall from '../text/TextSmall';
import TextSmaller from '../text/TextSmaller';

const Dishes = ({dish}) => {
  return (
    <View style={styles.dishesContainer}>
      <Image source={dish.image} style={styles.dishesImage} />
      <View style={{flex: 1}}>
        <View style={{paddingLeft: 10}}>
          <TextMedium text={dish.name} />
          <TextSmaller text={dish.description}/>
          <View style={styles.priceContainer}>
            <TextSmall text={`$${dish.price}`} />
            <View style={styles.priceButtons}>
              <TouchableOpacity
                style={{
                  backgroundColor: themeColors.bgColor(1),
                  padding: 5,
                  borderRadius: 50,
                }}>
                <Icon.Minus
                  strokeWidth={2}
                  height={20}
                  width={20}
                  stroke={'white'}
                />
              </TouchableOpacity>
              <Text>2</Text>
              <TouchableOpacity
                style={{
                  backgroundColor: themeColors.bgColor(1),
                  padding: 5,
                  borderRadius: 50,
                }}>
                <Icon.Plus
                  strokeWidth={2}
                  height={20}
                  width={20}
                  stroke={'white'}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Dishes;

const styles = StyleSheet.create({
  dishesContainer: {
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,

    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 30,
    marginBottom: 12,
    gap: 5,
    marginHorizontal: 10,
    padding: 10,
  },
  dishesImage: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  priceButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});
