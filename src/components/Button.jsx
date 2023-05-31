import React from 'react';
import {TouchableOpacity} from 'react-native';
import {themeColors} from '../theme';

const Button = ({children, style, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={{
        backgroundColor: themeColors.bgColor(2),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 50,
        padding: 10,
        ...style,
      }}>
      {children}
    </TouchableOpacity>
  );
};

export default Button;
