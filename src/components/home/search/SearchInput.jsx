import React from 'react';
import {TextInput} from 'react-native';
import {stylesSearchbar} from '../../../css/home';

const SearchInput = () => {
  return (
    <TextInput
      style={stylesSearchbar.searchBarInput}
      placeholder="Restaurants"
    />
  );
};

export default SearchInput;
