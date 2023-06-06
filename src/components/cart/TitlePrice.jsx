import React from 'react';
import {View} from 'react-native';
import TextSmaller from '../text/TextSmaller';

const TitlePrice = ({title, price, style}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <TextSmaller text={title} style={style} />
      <TextSmaller text={price} style={style} />
    </View>
  );
};

export default TitlePrice;
