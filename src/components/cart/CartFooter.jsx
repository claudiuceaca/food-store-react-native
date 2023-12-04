import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {themeColors} from '../../theme';
import Button from '../Button';
import ContainerTopRadius from '../ContainerTopRadius';
import TitlePrice from '../cart/TitlePrice';
import TextBig from '../text/TextBig';

const CartFooter = ({price}) => {
  const nav = useNavigation();

  return (
    <ContainerTopRadius style={styles.cartFooterContainer}>
      <TitlePrice title="Subtotal" price={price} />
      <TitlePrice title="Delivery Fee" price="$2" />
      <TitlePrice
        title="Order Total"
        price={`${price + 2}`}
        style={styles.titlePriceTotal}
      />

      <Button
        onPress={() => nav.navigate('OrderPreparing')}
        style={styles.cartFooterButton}>
        <TextBig text="Place Order" style={{color: 'white'}} />
      </Button>
    </ContainerTopRadius>
  );
};

export default CartFooter;

const styles = StyleSheet.create({
  cartFooterContainer: {
    backgroundColor: themeColors.bgColor(0.2),
    padding: 20,
    gap: 10,
  },
  titlePriceTotal: {
    fontWeight: 800,
    color: 'black',
  },
  cartFooterButton: {
    justifyContent: 'center',
  },
});
