import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Body from '../components/Body';
import ButtonBack from '../components/ButtonBack';
import TextBigger from '../components/text/TextBigger';
import TextSmall from '../components/text/TextSmall';
import TextSmaller from '../components/text/TextSmaller';
import {featured} from '../data';
import {themeColors} from '../theme';
import DishContainer from '../components/DishContainer';
import TextMedium from '../components/text/TextMedium';
import * as Icon from 'react-native-feather';
import TitlePrice from '../components/cart/TitlePrice';
import TextBig from '../components/text/TextBig';
import {useNavigation} from '@react-navigation/native';

const CartScreen = () => {
  const restaurant = featured.restaurants[0];
  const nav = useNavigation();

  return (
    <Body>
      <ButtonBack />
      <View style={styles.cartHeader}>
        <TextBigger text="Your cart" />
        <TextSmaller text={restaurant.name} />
      </View>
      <View style={styles.cartDelivery}>
        <Image
          source={require('../assets/images/bikeGuy.png')}
          style={{width: 100, height: 100}}
        />
        <TextSmall text="Deliver in 20-30 minutes" />
        <TouchableOpacity style={{flex: 1}}>
          <TextSmall text="Change" style={styles.cartDeliveryButtonText} />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 50, paddingTop: 20}}>
        {restaurant.dishes.map((dish, index) => {
          return (
            <DishContainer key={index} style={{paddingHorizontal: 20}}>
              <TextSmall text="2 x" style={{color: themeColors.bgColor(1)}} />
              <Image source={dish.image} style={styles.cartDishImage} />
              <TextMedium text={dish.name} style={{flex: 1}} />
              <TextMedium text={`$${dish.price}`} />
              <TouchableOpacity style={styles.cartDishButton}>
                <Icon.Minus
                  strokeWidth={2}
                  stroke="white"
                  width={20}
                  height={20}
                />
              </TouchableOpacity>
            </DishContainer>
          );
        })}
      </ScrollView>

      <View
        style={{
          backgroundColor: themeColors.bgColor(0.2),
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          padding: 20,
          gap: 10,
        }}>
        <TitlePrice title="Subtotal" price="$20" />
        <TitlePrice title="Delivery Fee" price="$2" />
        <TitlePrice
          title="Order Total"
          price="$22"
          style={{fontWeight: 800, color: 'black'}}
        />
        <TouchableOpacity
          onPress={() => nav.navigate('OrderPreparing')}
          activeOpacity={0.6}
          style={{
            backgroundColor: themeColors.bgColor(1),
            borderRadius: 30,
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TextBig text="Place Order" style={{color: 'white'}} />
        </TouchableOpacity>
      </View>
    </Body>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  cartHeader: {
    alignItems: 'center',
    marginBottom: 10,
  },
  cartDelivery: {
    backgroundColor: themeColors.bgColor(0.2),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  cartDeliveryButtonText: {
    color: themeColors.bgColor(1),
    alignSelf: 'flex-end',
  },
  cartDishImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginHorizontal: 10,
  },
  cartDishButton: {
    backgroundColor: themeColors.bgColor(1),
    borderRadius: 50,
    padding: 3,
    marginLeft: 5,
  },
});
