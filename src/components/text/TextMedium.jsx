import React from 'react';
import {Text} from 'react-native';

const TextMedium = ({style, text}) => {
  return (
    <Text
      style={{
        fontSize: 18,
        fontWeight: 500,
        ...style,
      }}>
      {text}
    </Text>
  );
};

export default TextMedium;
