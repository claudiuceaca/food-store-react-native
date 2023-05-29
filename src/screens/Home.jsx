import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Body from '../components/Body';
import Categories from '../components/home/Categories';
import Features from '../components/home/Features';
import SearchBar from '../components/home/SearchBar';
import {featured} from '../data';

const HomeScreen = () => {
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
          {[featured, featured, featured].map((feature, index) => {
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

const styles = StyleSheet.create({});
