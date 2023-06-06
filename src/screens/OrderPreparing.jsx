import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const OrderPreparing = () => {
  const nav = useNavigation();

  React.useEffect(() => {
    setTimeout(() => {
      nav.navigate('Delivery');
    }, 2000);
  }, []);

  return (
    <View style={styles.orderScreenContainer}>
      <Image
        source={require('../assets/images/delivery1.gif')}
        style={{width: '100%', height: 400}}
      />
    </View>
  );
};

export default OrderPreparing;

const styles = StyleSheet.create({
  orderScreenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
});
