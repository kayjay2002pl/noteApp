import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator, DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';
import Main from './components/screens/Main'
import Add from './components/screens/Add'

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator >
        <Drawer.Screen name="s1" component={Main} />
        <Drawer.Screen name="s2" component={Add} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}