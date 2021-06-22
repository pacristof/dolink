import React from 'react';
import { Button } from 'react-native-elements';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Logo from '../assets/Logo.png';

function Inicio({navigation}){




const styles = StyleSheet.create({
      
        buttonSignUp:{
            backgroundColor:'#00C74F',
            borderRadius:10,
            borderWidth:5,
            width:250,
            height:60,
            borderColor: "#1A82D6"
            
        },
        titleSignUp:{
            fontWeight:'bold',

        },

        buttonSignIn:{
            backgroundColor:'#EAEAEA',
            borderRadius:10,
            borderWidth:5,
            width:250,
            height:60,
            borderColor: "#1A82D6"
            
        },
        titleSignIn:{
            fontWeight:'bold',
          

        },
        container: {
            flex: 1,
            backgroundColor: '#1A82D6',
            alignItems: 'center',
            justifyContent: 'center',
          },
          image:{
              width:'47%',
              height:35,
              
        },
 textSocial:{
     top:'90%',
     position:'absolute',
     paddingRight:'35%',
   
     
 },
 instagram:{
     position:'absolute',
     top:'90%',
     paddingLeft:'60%',
    },
    facebook:{
        position:'absolute',
        top:'90%',
        paddingLeft:'75%',
    }
        
})
       return(
    
        <View style={styles.container}>
            <Image style={styles.image} source={Logo}/>
        <h2 style={{color : 'white', fontFamily : 'sans-serif', alignItems:'center'}}>Dê um up em sua carreira!</h2>   

           
               <Button
               buttonStyle={styles.buttonSignUp}
               titleStyle={styles.titleSignUp}
               title="Sign Up"
               onPress={() => navigation.navigate('Cadastro')}
               Icon name='arrow-right' size={20} color='white'
           />
           <Button
               buttonStyle={styles.buttonSignIn}
               titleStyle={styles.titleSignIn}
               title="Sign In"
              onPress={() => navigation.navigate('Login')}
/>

<Text style={styles.textSocial}>Entre em nossas redes sociais</Text>

<Icon style={styles.instagram} name='instagram' size={22} color='orange' />
<Icon style={styles.facebook} name='facebook' size={22} color='orange'/>

</View>




    );
 }

 
   
 
 


    export default Inicio;

