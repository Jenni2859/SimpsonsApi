import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import InitialScreen from '../screens/InitialScreen';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import LoginScreen from '../screens/LoginScreen';
import DrawerNavigation from './DrawerNavigation';

const Stack = createStackNavigator();


const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='Login'
      screenOptions={{
        headerStyle:{
          backgroundColor:"#fada00",
        },
        headerTintColor:"#fff",
        headerTitleStyle: {
          fontSize: 20, 
          fontWeight: 'bold', 
          color: '#fff', 
          textShadowColor: '#000',
          textShadowOffset: { width: 2, height: 2 },
          textShadowRadius: 2,
        },
      }}>
        <Stack.Screen name="Login" component={LoginScreen} options={{title:'Iniciar Sesión'}} />
        <Stack.Screen
        name='Home'
        component={DrawerNavigation}

        options={{headerShown: false}}
        />
        <Stack.Screen name='DetailsScreen' component={DetailsScreen}/>
      </Stack.Navigator>
  )
}


export default StackNavigation
