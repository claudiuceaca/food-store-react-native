import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const DishContainer = ({children,style}) => {
  return <View style={[styles.dishesContainer,{...style}]}>{children}</View>;
};

export default DishContainer;

const styles = StyleSheet.create({
  dishesContainer: {
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,

    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 30,
    marginBottom: 12,
    gap: 5,
    marginHorizontal: 10,
    padding: 10,
  },
});
