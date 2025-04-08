import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import { View } from 'react-native'
import HomeScreen from '../screens/HomeScreen';
import InitialScreen from '../screens/InitialScreen';


const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName='Inicio'
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
  </Drawer.Navigator>
  )
}

export default DrawerNavigation
