import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import './index.css'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Link } from '@react-navigation/native';
import { url } from '../../Utils/constants';
import { Button } from 'react-native-elements/dist/buttons/Button';

function Login({ navigation }) {

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
                    alert('Seja bem-vinde!');
                    console.log(data.token);
                    salvar(data.token);
                    navigation.push('PreMatch');
                } else {
                    alert('Email ou senha iválidos');
                }


            })
    }

    return (
        <div className="main">
            <header className="cabecalho">
                <div className="Voltar">
                    <Link to="/Inicio"> 
                    <img src="https://www.disneyria.com.br/wp-content/uploads/2020/08/bambi-personagem-glossa%CC%81rio-disney-letra-b-min-2048x1731.png"></img>
                    </Link>
                </div>
            </header>

            <div className="textos">
                <h2 style={{ color: 'white', fontFamily: 'sans-serif', fontSize: '28px' }}>Sign In</h2>
                <hr className="linha2"></hr>
                <h2  style={{ color: 'white', fontFamily: 'sans', fontSize: '15px' }}>Bacon ipsum dolor amet kielbasa picanha jerky,<br/> flank swine frankfurter </h2>
            </div>
            <hr className="linha2"></hr>
            <div className="Controle">
                <div className="Campos">
                    <TextInput
                        style={styles.input}
                        onChangeText={text => setEmail(text)}
                        value={email}
                        placeholder="Informe seu email..."
                        keyboardType="email"
                    />
                    <hr className="linha"></hr>
                    <TextInput
                        style={styles.input}
                        onChangeText={text => setSenha(text)}
                        value={senha}
                        placeholder="Informe sua senha..."
                        keyboardType="password"
                        secureTextEntry={true}
                    />
                    <hr className="linha"></hr>
                    <div className="Esqueceu"> <Text style={styles.registerText}> Ainda não possui conta?<Text style={styles.registerColor} onPress={() => navigation.navigate('EsqueciSenha')}>Forgot password?</Text>
                    </Text></div>
                    <hr className="linha"></hr>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={Logar}
                    >
                        <Text style={styles.textButton}>Sign In</Text>
                        <Icon name='arrow-right' size={18} float='right' color='white' />
                    </TouchableOpacity>
                    <hr className="linha"></hr>

                    <Text style={styles.registerText}>Ainda não possui conta? <Text style={styles.registerColor} onPress={() => navigation.navigate('Cadastro')}>Registre-se.</Text>
                    </Text>
                </div>
            </div>
        </div>
    )
}

const styles = StyleSheet.create({

    input: {
        width: '100%',
        height: 60,
        marginTop: 20,
        padding: 20,
        borderRadius: 15,
        backgroundColor: '#dcdcdc',
    },

    dadosInput: {
        width: '70%',
        flexDirection: 'column',
        marginBottom: '15vh'
    },

    buttonText: {
        color: "#FF9313",
        top: '30%',
        paddingLeft: '50%',
        fontWeight: 'bold',
    },

    button: {
        backgroundColor: '#00C74F',
        width: '70%',
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
        color: "#fff",
        fontWeight: 'bold',
    },
    registerColor: {
        color: "#FF9313",
        justifyContent: 'flex-end',
        fontWeight: 'bold',
    }
});


export default Login;