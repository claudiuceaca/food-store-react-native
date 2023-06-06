import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import * as Icon from 'react-native-feather';
import {useDispatch, useSelector} from 'react-redux';
import {
  addToCart,
  addToFavorites,
  removeFromCart,
  removeFromFavorites,
  selectIsItemFavorite,
} from '../../slices/cartSlice';
import {themeColors} from '../../theme';
import TextMedium from '../text/TextMedium';
import TextSmall from '../text/TextSmall';
import TextSmaller from '../text/TextSmaller';

const Dishes = ({dish}) => {
  const id = dish?.id;
  const [counter, setCounter] = React.useState(0);
  const isFavorite = useSelector(state => selectIsItemFavorite(state, dish.id));
  const dispatch = useDispatch();

  const handleAddItem = item => {
    setCounter(() => counter + 1);
    dispatch(addToCart(item));
  };

  const handleRemoveItem = itemId => {
    if (counter == 0) {
      return;
    } else {
      setCounter(() => counter - 1);
    }
    dispatch(removeFromCart(itemId));
  };

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(dish.id));
    } else {
      dispatch(addToFavorites({id: dish.id}));
    }
    console.log(isFavorite);
  };
  console.log(isFavorite);

  return (
    <View style={styles.dishesContainer}>
      <TouchableOpacity
        onPress={handleToggleFavorite}
        style={{
          padding: 5,
          borderRadius: 50,
          position: 'absolute',
          top: 7,
          right: 20,
          zIndex: 2,
          backgroundColor: isFavorite ? themeColors.bgColor(1) :'white' ,
        }}>
        <Icon.Heart
          strokeWidth={isFavorite ? 3 : 2}
          height={20}
          width={20}
          stroke={isFavorite ? 'white': themeColors.bgColor(1)  }
        />
      </TouchableOpacity>
      <Image source={dish.image} style={styles.dishesImage} />
      <View style={{flex: 1}}>
        <View style={{paddingLeft: 10}}>
          <TextMedium text={dish.name} />
          <TextSmaller text={dish.description} />
          <View style={styles.priceContainer}>
            <TextSmall text={`$${dish.price}`} />
            <View style={styles.priceButtons}>
              <TouchableOpacity
                onPress={() => handleRemoveItem(id)}
                disabled={counter == 0 ? true : false}
                style={{
                  backgroundColor: themeColors.bgColor(1),
                  padding: 5,
                  borderRadius: 50,
                }}>
                <Icon.Minus
                  strokeWidth={2}
                  height={20}
                  width={20}
                  stroke={'white'}
                />
              </TouchableOpacity>
              <Text>{counter}</Text>
              <TouchableOpacity
                onPress={() => handleAddItem(dish)}
                style={{
                  backgroundColor: themeColors.bgColor(1),
                  padding: 5,
                  borderRadius: 50,
                }}>
                <Icon.Plus
                  strokeWidth={2}
                  height={20}
                  width={20}
                  stroke={'white'}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Dishes;

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
    position: 'relative',
  },
  dishesImage: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  priceButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});
