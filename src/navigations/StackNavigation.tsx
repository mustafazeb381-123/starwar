import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavService from './NavService';
import { EStacks } from './appRoutes';
import Home from '../screens/Home';
import SplashScreen from '../screens/SplashScreen';
import Details from '../screens/Details';



const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer
      ref={NavService.getNavRef()}>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        
        <Stack.Screen name={EStacks.SPLASH} component={SplashScreen} />
        <Stack.Screen name={EStacks.HOME} component={Home} />
        <Stack.Screen name={EStacks.Details} component={Details} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation

const styles = StyleSheet.create({})