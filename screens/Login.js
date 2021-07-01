import React, { useState } from 'react';
import {  url  } from '../Utils/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Link } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View, FlatList, TextInput, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';

function Login ({navigation}) {

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
            email: email,
            senha: senha
        }



        fetch(`${url}account/signin`, {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(corpo)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.status != 404) {
                    console.log(data.data.token);
                    salvar(data.data.token);
                    navigation.push('TelasLogado');
                } else {
                    alert('Email ou senha iválidos');
                }
            })
    }

    return(
        <View style={styles.container}>

            <Link style={styles.linkHome} to="/Inicio"> 
                <Icon 
                    name='arrow-left' 
                    size={35} 
                    float='left' 
                    color='white'
                />
            </Link>
            <Text style={{fontSize: 30, fontWeight: '700', color: 'white', marginTop: 30, marginLeft: 30}}>Sign In</Text>  
            <Text style={{color: 'white', marginTop: 30, marginLeft: 30}} >Faça seu login e consulte todos os, seus matchs aqui!</Text>

            <View style={styles.blockSignin}>

                <View style={styles.formSignin}>
                    <TextInput
                        style={styles.input}
                        onChangeText={text => setEmail(text)}
                        value={email}
                        placeholder="Informe seu email..."
                        keyboardType="email-address"
                    />
                    <TextInput 
                        style={styles.input}
                        onChangeText={text => setSenha(text)}
                        value={senha}
                        placeholder="Informe sua senha..."
                        secureTextEntry={true}
                    />

                    <TouchableOpacity
                        style={styles.button}
                        onPress={Logar}
                    >
                        <Text style={styles.textButton}>Sign In</Text>
                        <Icon name='arrow-right' size={18} float='right' color='white' />
                    </TouchableOpacity>
                </View>
                

            </View>

        </View>
    )
    
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#1A82D6',
        height: '100%'
    },
    linkHome: {
        marginTop: 60, 
        marginLeft: 25
    },  
    blockSignin: {
        backgroundColor: 'white',
        height: 700,
        marginTop: 40,
        flex: 1,
        justifyContent: 'center',
        borderTopLeftRadius: 40, 
        borderTopRightRadius: 40, 
    },
    formSignin: {
        marginTop: 10

    },  
    input: {
        width: '90%',
        height: 60,
        padding: 20,
        borderRadius: 31,
        backgroundColor: '#DCDCDC',
        color: '#6D6B6B',
        shadowColor: "#000",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        elevation: 5,
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        marginTop: 20,
        marginLeft: 25
    },
    button: {
        backgroundColor: '#00C74F',
        width: '90%',
        marginLeft: 25,
        marginTop: 30,
        height: 50,
        padding: 5,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        textAlign: 'center'
    },
    textButton: {
        color: '#ffff',
        fontWeight: 'bold',
        justifyContent: 'center',
        fontSize: 20,
        flexDirection: 'row',
        marginRight: 15
    },
    registerText: {
        color: "#000",
        fontWeight: '500',
        textAlign: 'center',
        marginTop: 50,
        height: 80
    },
    registerColor: {
        color: "#FF9313",
        fontWeight: 'bold'
    }
});

export default Login;