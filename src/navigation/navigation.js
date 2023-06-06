import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import RestaurantScreen from '../screens/Restaurant';
import CartScreen from '../screens/Cart';
import OrderPreparing from '../screens/OrderPreparing';
import DeliveryScreen from '../screens/Delivery';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{presentation: 'modal'}}
        />
        <Stack.Screen
          name="OrderPreparing"
          component={OrderPreparing}
          options={{presentation: 'fullScreenModal'}}
        />
        <Stack.Screen
          name="Delivery"
          component={DeliveryScreen}
          options={{presentation: 'fullScreenModal'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
