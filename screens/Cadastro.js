import React, {useState} from 'react';
import { StatusBar, View, TextInput, TouchableOpacity, StyleSheet,Text } from 'react-native';
import {url} from '../Utils/constants';


function Cadastro ({navigation}){
 
    const [nome,setNome] = useState('');
    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');
    const [telefone,setTelefone] = useState('');

    const Cadastrar = () => {

      const corpo = {
        email : email,
        senha : senha
      }

      fetch(`${url}professional/signup`, {
  
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
                alert('Seja bem-vindo!');
                console.log(data.token);
                salvar(data.token);
                navigation.push('Cadastro');
            }else{
                alert('Email ou senha inválidos');
            }
  
  
        })
    }
    


    return (
    <View style={styles.container}>
        <h2 style={{color : 'white', fontFamily : 'sans-serif', position:'absolute',right:'75%',top:'10%'}}>Sign Up</h2>   
            

        <TextInput placeholder="Seu nome..." style={styles.input} onChangeText={text=>setNome(text)}/>

        <TextInput placeholder="Seu email..."  style={styles.input} onChangeText={text=>setEmail(text)}/>
      
        <TextInput placeholder="Seu senha..."  secureTextEntry={true} style={styles.input} onChangeText={text=>setSenha(text)}/>

        <TextInput placeholder="Seu telefone..." style={styles.input} onChangeText={text=>setTelefone(text)}/>


        <TouchableOpacity style={styles.btnCadastro} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.btnText}>Sign Up</Text>
        </TouchableOpacity>
        
        <Text style={styles.registerText}>Já possui conta? <Text style={styles.registerColor} onPress={() => navigation.navigate('Login')}>Logar.</Text>
       
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
        width : '70%',
        height : 50, 
        marginTop : 20,
        padding : 5,
        borderRadius : 15,
        backgroundColor : '#dcdcdc',
        
      },
    btnCadastro:{
        width:'70%',
        height:55,
        backgroundColor:'#00C74F',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:5,
        borderColor: "#1A82D6",
        position:'absolute',
        top:'78%',
    
       
    },

    btnText:{
        color:'white',
        textAlign:'center',
        fontSize: 20,
        fontWeight : 'bold', 
        justifyContent: 'center',
    },
    registerText:{
     color:"0000",
      top:'90%',
      position:'absolute',
      fontWeight : 'bold', 
      
    },
    registerColor:{
      color:"#FF9313",
      fontWeight : 'bold', 
    },
  
});

export default Cadastro;
