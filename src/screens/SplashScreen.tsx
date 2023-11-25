import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import NavService from '../navigations/NavService'
import { EStacks } from '../navigations/appRoutes'

const SplashScreen = () => {

    useEffect(() => {
        setTimeout(() => {
            NavService.replace(EStacks.HOME)
        }, 1000)
    }, [])
  return (
    <View style={styles.main}>
      <Text style={styles.text}>SplashScreen</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
       
        
    },
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor:"black"
    }
})