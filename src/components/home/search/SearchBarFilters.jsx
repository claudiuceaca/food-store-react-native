import React from 'react';
import {TouchableOpacity} from 'react-native';
import * as Icon from 'react-native-feather';
import {stylesSearchbar} from '../../../css/home';
import {themeColors} from '../../../theme';

const SearchBarFilters = () => {
  return (
    <TouchableOpacity
      style={[
        stylesSearchbar.searchBarFilters,
        {backgroundColor: themeColors.bgColor(1)},
      ]}
      activeOpacity={0.6}>
      <Icon.Sliders height={15} width={15} stroke="white" strokeWidth={2.5} />
    </TouchableOpacity>
  );
};

export default SearchBarFilters;
