import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { Text, View } from 'react-native'
import HomeScreen from './src/screens/HomeScreen';
import "react-native-gesture-handler"
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import StackNavigation from './src/navigation/StackNavigation';


const App = () => {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        
        {/* maneja las rutas */}
        <StackNavigation /> 

      </NavigationContainer>
    </GestureHandlerRootView>
    
  )
}

export default App
