import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';
import React, {useState, useEffect} from 'react';
import {  url  } from '../Utils/constants';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import {Picker} from '@react-native-community/picker';
import http from '../Utils/http-axious';
import Logo from '../assets/Logo.png';

function PerfilProfissional({navigation}) {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [sobreMim, setSobreMim] = useState('');

    useEffect(() => {
        ListarProfissional()
    }, [])

    const ListarProfissional = async () => {

        const idProfissional = jwtDecode(await AsyncStorage.getItem('@jwt')).Id;

        fetch(`${url}professional/search/id/${idProfissional}`, {
            method: 'GET',
            headers: {
                'Authorization' : `Bearer ${await AsyncStorage.getItem('@jwt')}`
            }
        })
        .then(data => data.json())
        .then(data => {
            setNome(data.data.nome)
            setEmail(data.data.email)
            setTelefone(data.data.telefone)
            setSobreMim(data.data.sobreMim)
            console.log(data);
        })
        .catch(erro => {
            console.error(`erro ${erro}`);
        })
    }   

    const Logout = async () => {

        await AsyncStorage.removeItem('@jwt')
        navigation.navigate('Inicio')
        location.reload();

      }
    

    return(
        <View style={styles.container}>

            <View style={styles.header}>
                    <Image 
                        style={styles.logo}
                        source={Logo}
                    />
            </View>

            <ScrollView>
                <View>
                    <Text style={styles.seuPerfil}>Seu Perfil!</Text>
                </View>

                <TextInput
                    editable={false} 
                    selectTextOnFocus={false}
                    style={styles.input}
                    placeholder={`Nome: ${nome}`}
                />

                <TextInput
                    editable={false} 
                    selectTextOnFocus={false}
                    style={styles.input}
                    placeholder={`Email: ${email}`}
                />

                <TextInput
                    editable={false} 
                    selectTextOnFocus={false}
                    style={styles.input}
                    placeholder={`Telefone: ${telefone}`}
                />
                
                <TextInput
                    editable={false} 
                    selectTextOnFocus={false}
                    style={styles.inputSobreMim}
                    placeholder={`Sobre mim: ${sobreMim.substring(0, 150)}...`}
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={Logout}
                >
                    <Text style={styles.textButton}>Sair</Text>
                </TouchableOpacity>
            </ScrollView>

        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height : 20,
        justifyContent: 'flex-start',
        backgroundColor: '#fff'
    },
    logo : {
        width : 120,
        height : 25,
        resizeMode : 'center',
        marginBottom: 20
    },
    header: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: 120,
        borderBottomRightRadius: 40,
        shadowColor: "#000",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
        backgroundColor: '#1A82D6'
    },
    input: {
        width: '80%',
        height: 60,
        marginTop: 30,
        marginLeft: 40,
        padding: 20,
        borderRadius: 15,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 3
    },
    inputSobreMim: {
        width: '80%',
        height: 105,
        marginTop: 30,
        marginLeft: 40,
        padding: 20,
        borderRadius: 15,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 3
    },
    button: {
        backgroundColor: '#F1546E',
        width: '80%',
        height: 50,
        padding: 5,
        borderRadius: 5,
        marginLeft: 40,
        marginTop: 30,
        textAlign: 'center'
    },
    textButton: {
        color: '#ffff',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    },
    seuPerfil: {
        fontSize: 30,
        marginTop: 40,
        textAlign: 'center'
    }
  });

export default PerfilProfissional;