
import React, {useState} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Login from './screens/Login';
import Inicio from './screens/Inicio';
import PreMatch from './screens/PreMatch';
import PerfilProfissional from './screens/PerfilProfissional';
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
      activeTintColor: "#FFF",
      inactiveTintColor: '#000',
      tabStyle: {
        paddingTop: 10
      }
    }} initialRouteName='PreMatch'>
    <Tab.Screen 
        name="PreMatch" 
        component={PreMatchScreen} 
        options={{ 
          tabBarLabel: "", 
        tabBarIcon: ({ color }) => 
        (<Icon name="briefcase" color={color} size={30} />) }} />

    <Tab.Screen 
        name="Conta" 
        component={PerfilProfissionalScreen} 
        options={{ 
          tabBarLabel: "",
        tabBarIcon: ({ color }) => 
        (<Icon name="user-circle" color={color} size={30} />) }} />
  
  </Tab.Navigator>
)

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Inicio" component={Inicio} />
      <Stack.Screen name="Login" component={loginScreen} />
      <Stack.Screen name="TelasLogado" component={tabsScreen} />
    
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

