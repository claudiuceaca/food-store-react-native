import React from 'react';
import {Text} from 'react-native';

const TextBigger = ({text, style}) => {
  return (
    <Text style={{fontSize: 25, fontWeight: 600, color: 'black', ...style}}>
      {text}
    </Text>
  );
};

export default TextBigger;
