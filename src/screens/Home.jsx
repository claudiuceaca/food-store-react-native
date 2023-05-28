import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Body from '../components/Body';
import Categories from '../components/Categories';
import Features from '../components/Features';
import SearchBar from '../components/SearchBar';
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
