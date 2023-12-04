import React from 'react';
import {TouchableOpacity} from 'react-native';
import * as Icon from 'react-native-feather';
import {stylesSearchbar} from '../../../css/home';
import TextSmaller from '../../text/TextSmaller';

const LocationPin = () => {
  return (
    <TouchableOpacity style={stylesSearchbar.searchBarPin} activeOpacity={0.6}>
      <Icon.MapPin height={20} width={20} stroke="gray" />
      <TextSmaller text="New York, NYC" />
    </TouchableOpacity>
  );
};

export default LocationPin;
