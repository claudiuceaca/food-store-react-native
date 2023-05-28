import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import RestaurantCard from './RestaurantCard';
import {themeColors} from '../theme';

const Features = ({title, description, restaurants}) => {
  return (
    <View>
      <View style={styles.featureContainer}>
        <View>
          <Text style={styles.featureTitle}>{title}</Text>
          <Text style={styles.featureDescription}>{description}</Text>
        </View>
        <TouchableOpacity>
          <Text
            style={[
              styles.featureButtonText,
              {color: themeColors.bgColor(1)},
            ]}>
            See All
          </Text>
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
  featureTitle: {
    fontWeight: 700,
    fontSize: 22,
    color: 'black',
  },
  featureDescription: {},
  featureButtonText: {
    fontWeight: 500,
    fontSize:15
  },
  featureScrollView: {
    overflow: 'visible',
    paddingVertical: 18,
  },
});
