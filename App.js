
import React, {useState} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Flogin/Login';
import Inicio from './screens/Inicio';
import Cadastro from './screens//Fcadastro/Cadastro';
import UpdateProfissional from './screens/UpdateProfissional';
import PreMatch from './screens/PreMatch';
import MatchConfirmado from './screens/MatchConfirmado';
import PerfilProfissional from './screens/PerfilProfissional';
import EsqueciSenha from './screens/EsqueciSenha';

import PreMatchIcon from './components/preMatchIcon';
import PerfilProfissionalIcon from './components/perfilProfissional';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const PreMatchScreen = () => (
    <Stack.Navigator screenOptions={{headerShown:false}} >
      <Stack.Screen name="PreMatch" component={PreMatch} />
    </Stack.Navigator>
)

const PerfilProfissionalScreen = () => (
    <Stack.Navigator screenOptions={{headerShown:false}} >
      <Stack.Screen name="PerfilProfissional" component={PerfilProfissional} />
    </Stack.Navigator>
)

const loginScreen = () => (

  <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name="Login" component={Login} />
  </Stack.Navigator>

)

// const TelasLogado = () => (
//   <Stack.Navigator>
//     <Stack.Screen name="PreMatch" component={PreMatch} screenOptions={{headerShown:false}}/>
//     <Stack.Screen name="PerfilProfissional" component={PerfilProfissional} screenOptions={{headerShown:false}}/>
//   </Stack.Navigator>
// )

const tabsScreen = () => (
  <Tab.Navigator
    tabBarOptions={{
      style: {
        backgroundColor: '#1A82D6',
        borderTopColor: '#139548',
        height: 80,
      },
      activeTintColor: "#ffff",
      inactiveTintColor: '#4D504E',
      tabStyle: {
        paddingBottom: 5,
        paddingTop: 5,
      }
    }} initialRouteName='PreMatch'>
    <Tab.Screen name="PreMatch" component={PreMatchScreen} options={{ tabBarLabel: "", tabBarIcon: ({ focused, size, color }) => (<PreMatchIcon size={size} color={color} focused={focused} />) }} />
    <Tab.Screen name='Conta' component={PerfilProfissionalScreen} options={{ tabBarLabel: "", tabBarIcon: ({ focused, size, color }) => (<PerfilProfissionalIcon size={size} color={color} focused={focused} />) }} />
  </Tab.Navigator>
)

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Inicio" component={Inicio} />
      {/* <Stack.Screen name="Cadastro" component={Cadastro} />  */}
      <Stack.Screen name="Login" component={loginScreen} />
      {/* <Stack.Screen name="UpdateProfissional" component={UpdateProfissional} /> */}
      {/* <Stack.Screen name="EsqueciSenha" component={EsqueciSenha} /> */}
      <Stack.Screen name="TelasLogado" component={tabsScreen} />
      {/* <Stack.Screen name="MatchConfirmado" component={MatchConfirmado} /> */}
    
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

