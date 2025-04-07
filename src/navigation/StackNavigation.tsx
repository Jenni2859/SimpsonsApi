import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import InitialScreen from '../screens/InitialScreen';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

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
        component={Navigation}

        options={{headerShown: false}}
        />
        <Stack.Screen name='DetailsScreen' component={DetailsScreen}/>
      </Stack.Navigator>
  )
}

const Navigation = () =>{
    return(<Drawer.Navigator initialRouteName='Inicio'
      screenOptions={{
        headerStyle:{
          backgroundColor:"#fada00",
        },
        headerTintColor:"#fff",
        drawerStyle:{
          backgroundColor:"#fada00",
          
        },
        headerTitleStyle: {
          fontSize: 22, // ← Cambia el tamaño aquí
          fontWeight: 'bold', // opcional
          textShadowColor: '#000',
          textShadowOffset: { width: 2, height: 2 },
          textShadowRadius: 2,
          padding:10,
        },  
        drawerLabelStyle: {
          fontSize: 20, 
          fontWeight: 'bold', 
          //color: '#fff', 
          textShadowColor: '#000',
          textShadowOffset: { width: 2, height: 2 },
          textShadowRadius: 2,
        },
        drawerActiveTintColor: '#fff', // Color del texto cuando está activo
        drawerInactiveTintColor: '#f1d5d5', // Color del texto cuando está inactivo
        // headerLeft:{
          
        // }
      }}
    >
      <Drawer.Screen name='Inicio' component={InitialScreen} />
      <Drawer.Screen name='Personajes' component={HomeScreen} />
    </Drawer.Navigator>)
  }

export default StackNavigation
