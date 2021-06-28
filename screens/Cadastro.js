import React, {useState} from 'react';
import { StatusBar, View, TextInput, TouchableOpacity, StyleSheet,Text } from 'react-native';
import {url} from '../Utils/constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Cadastro ({navigation}){
 
    const [nome,setNome] = useState('');
    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');
    const [telefone,setTelefone] = useState('');
    
    const salvar = async (token) => {
      try {
          await AsyncStorage.setItem('@jwt', token)
      } catch (e) {
          // saving error
      }
    }

    const Cadastrar = () => {

      fetch(`${url}professional/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nome: nome,
          email: email,
          senha: senha,
          telefone: telefone
          })
        })
        .then(response => response.json())
        .then(response => {
            if (response.success != false) {
                //alert('Cadastro realizado com sucesso!')
                Logar(email, senha)
                navigation.navigate('UpdateProfissional');
            }
            else {
                alert(response.message)
            }
      })

      const Logar = (email, senha) => {
        fetch(`${url}account/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email: email,
              senha: senha
            }),
        })
            .then(response => response.json())
            .then(data => {
                console.log('logado')
                console.log(data);
                console.log(data.data.token)
                salvar(data.data.token)

            })
        }
      }
    
    return (
    <View style={styles.container}>

      <View style={styles.dadosInput}>
        <h2 style={{color : 'white', fontFamily : 'sans-serif', fontSize:'60px', textAlign:'center'}}>Sign Up</h2>   

        <TextInput placeholder="Informe seu nome..." style={styles.input} onChangeText={text=>setNome(text)} value={nome}/>

        <TextInput placeholder="Informe seu email..."  style={styles.input} onChangeText={text=>setEmail(text)} value={email}/>
      
        <TextInput placeholder="Informe sua senha..."  secureTextEntry={true} style={styles.input} onChangeText={text=>setSenha(text)} value={senha}/>

        <TextInput placeholder="Informe seu telefone..." style={styles.input} onChangeText={text=>setTelefone(text)} value={telefone}/>
      </View>


        <TouchableOpacity style={styles.btnCadastro} onPress={Cadastrar}>
            <Text style={styles.btnText}>Sign Up</Text>
            <Icon name='arrow-right' size={18} float='right' color='white'/>
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

      dadosInput : {
        width : '70%',
        flexDirection : 'column',
        alignContent : 'center',
        marginBottom : '15vh'
  
      },
      input : {

        width : '100%',
        height : 50, 
        marginTop : 20,
        padding : 20,
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
          flexDirection: 'row',
          borderWidth:5,
          borderColor: "#1A82D6",
          position:'absolute',
          top:'68%',
      
        
      },

      btnText:{
          color:'white',
          textAlign:'center',
          fontSize: 20,
          fontWeight : 'bold', 
          marginRight : 15,
          justifyContent: 'center',
      },
      registerText:{
        color:"#fff",
        top:'80%',
        position:'absolute',
        fontWeight : 'bold', 
        
      },
      registerColor:{
        color:"#FF9313",
        fontWeight : 'bold', 
      },
    
  });

export default Cadastro;
