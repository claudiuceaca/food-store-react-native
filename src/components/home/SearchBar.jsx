import React from 'react';
import {View} from 'react-native';
import * as Icon from 'react-native-feather';
import {stylesSearchbar} from '../../css/home';
import SearchBarFilters from './search/SearchBarFilters';
import LocationPin from './search/LocationPin';
import SearchInput from './search/SearchInput';

const SearchBar = () => {
  return (
    <View style={stylesSearchbar.searchBarContainer}>
      <View style={stylesSearchbar.searchBar}>
        <Icon.Search stroke="gray" fill="#fff" width={25} height={25} />
        <SearchInput />
        <LocationPin />
      </View>
      <SearchBarFilters />
    </View>
  );
};

export default SearchBar;
