import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {categories} from '../../data';
import {setSelectedCategory} from '../../slices/restaurantSlice';
import TextSmaller from '../text/TextSmaller';

const Categories = () => {
  const [activeCategory, setActiveCategory] = React.useState(null);
  const dispatch = useDispatch();

  return (
    <View style={{marginTop: 16, marginBottom: 20}}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{overflow: 'visible'}}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}>
        {categories?.map((category, index) => {
          const isActive = category.id == activeCategory;

          return (
            <View key={index} style={styles.categoryContainer}>
              <TouchableOpacity
                onPress={() => {
                  dispatch(setSelectedCategory(category.category));
                  setActiveCategory(category.id);
                }}
                style={[
                  styles.categoryItem,
                  {
                    borderColor: isActive ? '#bfbfbf' : '#f2f2f2',
                  },
                ]}>
                <Image
                  style={{
                    width: 45,
                    height: 45,
                  }}
                  source={category.image}
                />
              </TouchableOpacity>

              <TextSmaller
                text={category.name}
                style={{fontWeight: isActive ? 700 : 500, color: '#333'}}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = (props = StyleSheet.create({
  categoryContainer: {
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryItem: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 50,
    width: 64,
    height: 64,
    borderWidth: 2,
  },
  categoryText: {
    color: 'black',
    fontSize: 13,
  },
}));
