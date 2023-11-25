import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StackNavigation from './src/navigations/StackNavigation'
import {store} from './src/store/store';
import {Provider} from 'react-redux';

const App = () => {


  return (
      <Provider store={store}>

      <StackNavigation />
      </Provider>
  )
}

export default App

const styles = StyleSheet.create({})