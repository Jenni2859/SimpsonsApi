import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { Text, View } from 'react-native'
import HomeScreen from './src/screens/HomeScreen';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
        name='Home'
        component={()=>(
          <Drawer.Navigator>
            <Drawer.Screen name='Inicio' component={HomeScreen} />
            <Drawer.Screen name='Personajes' component={HomeScreen} />
          </Drawer.Navigator>
        )}

        options={{headerShown: false}}
        />
      </Stack.Navigator>

    </NavigationContainer>
  )
}

export default App
