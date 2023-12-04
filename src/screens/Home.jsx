import React from 'react';
import {ScrollView, View} from 'react-native';
import {useSelector} from 'react-redux';
import Body from '../components/Body';
import Categories from '../components/home/Categories';
import Features from '../components/home/Features';
import SearchBar from '../components/home/SearchBar';
import {featured} from '../data';
import {selectSelectedCategory} from '../slices/restaurantSlice';

const HomeScreen = () => {
  const selectedCategory = useSelector(selectSelectedCategory);

  const filteredFeatured = selectedCategory
    ? featured.filter(item => item.category === selectedCategory)
    : featured;

  return (
    <Body>
      <View>
        <SearchBar />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 120,
          }}>
          <Categories />
          {filteredFeatured.map((feature, index) => {
            return (
              <Features
                key={index}
                title={feature.title}
                description={feature.description}
                restaurants={feature.restaurants}
              />
            );
          })}
        </ScrollView>
      </View>
    </Body>
  );
};

export default HomeScreen;
