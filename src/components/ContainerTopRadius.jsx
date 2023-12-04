import React from 'react';
import {View} from 'react-native';

const ContainerTopRadius = ({children, style}) => {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingTop: 20,
        padding: 10,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        backgroundColor: 'white',
        ...style,
      }}>
      {children}
    </View>
  );
};

export default ContainerTopRadius;
