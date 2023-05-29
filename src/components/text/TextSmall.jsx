import React from 'react';
import { Text, View } from 'react-native';

const TextSmall = ({style, text}) => {
  return (
    <View>
      <Text style={{fontSize: 15, fontWeight: 500, ...style}}>{text}</Text>
    </View>
  );
};

export default TextSmall;

