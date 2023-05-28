import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {categories} from '../data';
import {themeColors} from '../theme';

const Categories = () => {
  const [activeCategory, setActiveCategory] = React.useState(null);

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
                onPress={() => setActiveCategory(category.id)}
                style={[
                  styles.categoryItem,
                  {backgroundColor: isActive ? '#718096' : '#edf2f7'},
                ]}>
                <Image
                  style={{width: 45, height: 45}}
                  source={category.image}
                />
              </TouchableOpacity>
              <Text
                style={[
                  styles.categoryText,
                  {fontWeight: isActive ? 700 : 500},
                ]}>
                {category.name}
              </Text>
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
  },
  categoryText: {
    color: 'black',
    fontSize: 13,
  },
}));
