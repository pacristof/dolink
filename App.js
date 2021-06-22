
import React, {useState} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login';
import Inicio from './screens/Inicio';
import Cadastro from './screens/Cadastro';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Inicio" component={Inicio} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
    
    </Stack.Navigator>
  );
}

export default function App() {
return(
  <NavigationContainer>
  <MyStack></MyStack>
  </NavigationContainer>
);
 
}

