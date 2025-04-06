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
            backgroundColor:"#fada00"
        },
        headerTitleStyle: {
            fontSize: 22, // ← Cambia el tamaño aquí
            fontWeight: 'bold', // opcional
          },
      }}
    >
      <Drawer.Screen name='Inicio' component={InitialScreen}
        options={{
            title: "Inicio", // título personalizado si quieres
            headerTitleStyle: {
            fontSize: 30, // ← Tamaño del título solo para esta pantalla
            fontWeight: 'bold',
            },
        }}  />
      <Drawer.Screen name='Personajes' component={HomeScreen} />
    </Drawer.Navigator>)
  }

export default StackNavigation
