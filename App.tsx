import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { Text, View } from 'react-native'
import HomeScreen from './src/screens/HomeScreen';
import "react-native-gesture-handler"
import InitialScreen from './src/screens/InitialScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import DrawerNavigation from './src/navigation/DrawerNavigation';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const Navigation = () =>{
  return(<Drawer.Navigator initialRouteName='Inicio'>
    <Drawer.Screen name='Inicio' component={InitialScreen} />
    <Drawer.Screen name='Personajes' component={HomeScreen} />
  </Drawer.Navigator>)
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
        name='Home'
        component={Navigation}

        options={{headerShown: false}}
        />

        <Stack.Screen name='DetailsScreen' component={DetailsScreen} />
      </Stack.Navigator>

    </NavigationContainer>
  )
}

export default App
