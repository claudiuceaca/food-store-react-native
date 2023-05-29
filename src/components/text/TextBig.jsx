import React from 'react';
import {Text} from 'react-native';

const TextBig = ({style, text}) => {
  return (
    <Text
      style={{
        fontSize: 20,
        fontWeight: 600,
        ...style,
      }}>
      {text}
    </Text>
  );
};

export default TextBig;
