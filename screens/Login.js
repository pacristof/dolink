import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Link } from '@react-navigation/native';
import {url} from '../Utils/constants';

function Login ({navigation}){

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const salvar = async (token) => {
        try {
            await AsyncStorage.setItem('@jwt', token)
        } catch (e) {
            
        }
    }
  

    const Logar = () => {
        
        const corpo = {
            email : email,
            senha : senha
        }

        

        fetch(`${url}account/signin`, {

            method: 'POST',
            headers :{
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(corpo)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if(data.status != 404){
                alert('Seja bem-vinde!');
                console.log(data.token);
                salvar(data.token);
                navigation.push('PreMatch');
            }else{
                alert('Email ou senha iválidos');
            }


        })
    }
    
    return(
        <View style={styles.container}>
            <View style={styles.dadosInput}>
                <h2 style={{color : 'white', fontFamily : 'sans-serif', fontSize : '60px', textAlign : 'center'}}>Sign In</h2>   

                <TextInput
                    style={styles.input}
                    onChangeText={text => setEmail(text)}
                    value={email}
                    placeholder="Informe seu email..."
                    keyboardType="email"
                />

                <TextInput
                    style={styles.input}
                    onChangeText={text => setSenha(text)}
                    value={senha}
                    placeholder="Informe sua senha..."
                    keyboardType="password"
                    secureTextEntry={true}
                />
            </View>
            

            <TouchableOpacity
                style={styles.button}
                onPress={Logar}
            >
                <Text style={styles.textButton}>Sign In</Text>
                <Icon name='arrow-right' size={18} float='right' color='white'/>
            </TouchableOpacity>

            <Text style={styles.registerText}>Ainda não possui conta? <Text style={styles.registerColor} onPress={() => navigation.navigate('Cadastro')}>Registre-se.</Text>
            </Text>
        </View>
       
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1A82D6',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    
    input : {
      width : '100%',
      height : 50, 
      marginTop : 20,
      padding : 20,
      borderRadius : 15,
      backgroundColor : '#dcdcdc',
      
    },

    dadosInput : {
        width : '70%',
        flexDirection : 'column',
        alignContent : 'center',
        marginBottom : '15vh'

    },

    buttonText:{
     color:"#FF9313",
     top:'30%',
     paddingLeft:'50%',
     fontWeight : 'bold', 
     

    },
    
    button : {
      backgroundColor : '#00C74F',
      width : '70%',
      height: 50,
      padding : 5,
      borderRadius : 5,
      position:'absolute',
      top:'60%',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      textAlign: 'center'
     
    },

    textButton : {
      color : '#ffff',
      fontWeight : 'bold',
      justifyContent: 'center',
      fontSize: 20,
      flexDirection:'row',
      marginRight : 15
      

    },
    registerText:{
      color:"#fff",
      top:'75%',
      position:'absolute',
      fontWeight : 'bold', 
        
    },
    registerColor:{
      color:"#FF9313",
      fontWeight : 'bold', 
    },

    
});


export default Login;