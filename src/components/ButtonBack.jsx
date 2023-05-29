import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import * as Icon from 'react-native-feather';
import {themeColors} from '../theme';
import {useNavigation} from '@react-navigation/native';

const ButtonBack = () => {
  const nav = useNavigation();

  return (
    <TouchableOpacity onPress={() => nav.goBack()} style={styles.buttonBack}>
      <Icon.ArrowLeft stroke={themeColors.bgColor(1)} strokeWidth={3} />
    </TouchableOpacity>
  );
};

export default ButtonBack;

const styles = StyleSheet.create({
  buttonBack: {
    position: 'absolute',
    top: 35,
    left: 20,
    backgroundColor: '#f7fafc',
    borderRadius: 50,
    padding: 5,
  },
});
