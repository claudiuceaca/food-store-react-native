import React from 'react';
import { Text } from 'react-native';

const TextBigger = ({text}) => {
  return (
    <Text style={{fontSize: 25, fontWeight: 600, color: 'black'}}>{text}</Text>
  );
};

export default TextBigger;

