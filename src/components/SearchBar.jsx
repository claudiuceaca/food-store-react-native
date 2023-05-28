import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import * as Icon from 'react-native-feather';
import {stylesSearchbar} from '../css/home';
import {themeColors} from '../theme';

const SearchBar = () => {
  return (
    <View style={stylesSearchbar.searchBarContainer}>
      <View style={stylesSearchbar.searchBar}>
        <Icon.Search stroke="gray" fill="#fff" width={25} height={25} />
        <TextInput
          style={stylesSearchbar.searchBarInput}
          placeholder="Restaurants"
        />
        <TouchableOpacity style={stylesSearchbar.searchBarPin} activeOpacity={0.6}>
          <Icon.MapPin height={20} width={20} stroke="gray" />
          <Text>New York, NYC</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={[
          stylesSearchbar.searchBarFilters,
          {backgroundColor: themeColors.bgColor(1)},
        ]}
        activeOpacity={0.6}>
        <Icon.Sliders height={15} width={15} stroke="white" strokeWidth={2.5} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
