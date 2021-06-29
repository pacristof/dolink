
import React, {useState} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Flogin/Login';
import Inicio from './screens/Inicio';
import Cadastro from './screens//Fcadastro/Cadastro';
import UpdateProfissional from './screens/UpdateProfissional';
import PreMatch from './screens/PreMatch';
import MatchConfirmado from './screens/MatchConfirmado';
import PerfilProfissional from './screens/PerfilProfissional';
import EsqueciSenha from './screens/EsqueciSenha';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Inicio" component={Inicio} />
      <Stack.Screen name="Cadastro" component={Cadastro} /> 
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="UpdateProfissional" component={UpdateProfissional} />
      {/* <Stack.Screen name="EsqueciSenha" component={EsqueciSenha} />
      <Stack.Screen name="PreMatch" component={PreMatch} />
      <Stack.Screen name="MatchConfirmado" component={MatchConfirmado} />
      <Stack.Screen name="PerfilProfissional" component={PerfilProfissional} /> */}
    
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

