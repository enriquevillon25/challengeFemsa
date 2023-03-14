import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from '../screens/Home/HomeScreen';
import {ProductDetailScreen} from '../screens/ProductDetail/ProductDetailScreen';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetailScreen}
          options={({route}: any) => ({
            title: route.params.item.product,
            headerStyle: {
              backgroundColor: '#CFD6FF',
              height: 140,
            },
            headerTintColor: '#000000',
            headerTitleAlign: 'left',
            headerTitleStyle: {
              fontWeight: '800',
              fontSize: 24,
              fontFamily: 'Avenir',
              lineHeight: 100,
              marginTop: 15,
            },
            headerLeft: () => null,
            headerBackTitleVisible: false,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
