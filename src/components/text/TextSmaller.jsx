import React from 'react';
import {Text, View} from 'react-native';

const TextSmaller = ({style, text}) => {
  return (
    <View>
      <Text style={{fontSize: 13, fontWeight: 500, color: 'gray', ...style}}>
        {text}
      </Text>
    </View>
  );
};

export default TextSmaller;
