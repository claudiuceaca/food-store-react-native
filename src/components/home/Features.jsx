import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import RestaurantCard from './RestaurantCard';
import {themeColors} from '../../theme';
import TextBigger from '../text/TextBigger';
import TextSmall from '../text/TextSmall';
import TextSmaller from '../text/TextSmaller';

const Features = ({title, description, restaurants}) => {
  return (
    <View>
      <View style={styles.featureContainer}>
        <View>
          <TextBigger text={title} />
          <TextSmaller text={description} />
        </View>
        <TouchableOpacity>
          <TextSmall text="See All" style={{color: themeColors.bgColor(1)}} />
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        style={styles.featureScrollView}>
        {restaurants?.map(restaurant => {
          return <RestaurantCard key={restaurant.id} item={restaurant} />;
        })}
      </ScrollView>
    </View>
  );
};

export default Features;

const styles = StyleSheet.create({
  featureContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  featureScrollView: {
    overflow: 'visible',
    paddingVertical: 18,
  },
});
