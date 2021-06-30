import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';
import React, {useState, useEffect} from 'react';
import {  url  } from '../Utils/constants';
import { StyleSheet, Text, View, FlatList, TextInput, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import http from '../Utils/http-axious';

function PerfilProfissional({navigation}) {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');

    useEffect(() => {
        ListarProfissional()
    }, [])

    const ListarProfissional = async () => {

        const idProfissional = jwtDecode(await AsyncStorage.getItem('@jwt')).Id;

        fetch(`${url}professional/search/id/${idProfissional}`, {
            headers: {
                'Authorization' : `Bearer ${await AsyncStorage.getItem('@jwt')}`
            }
        })
        .then(data => {
            console.log(data);
        })
        .catch(erro => {
            console.error(`erro ${erro}`);
        })
    }   

    const Logout = () => {

        AsyncStorage.removeItem('@jwt')
        navigation.navigate('Inicio')
        location.reload();

      }
    

    return(
        <View style={styles.container}>

            <View style={styles.header}>
                    <img style={{padding: '20px'}} src="https://media.discordapp.net/attachments/741855103236964404/859510228160086016/unknown.png" width="120px" height="25px" />
            </View>

            <View>
                <Text style={styles.seuPerfil}>Seu Perfil!</Text>
            </View>

            <TextInput
                style={styles.input}
                placeholder="Seu Email:"
                keyboardType="text"
            />

            <TextInput
                style={styles.input}
                placeholder="Seu Email"
                keyboardType="text"
            />

            <TextInput
                style={styles.input}
                placeholder="Seu Telefone"
                keyboardType="text"
            />

            <TouchableOpacity
                style={styles.button}
                onPress={Logout}
            >
                <Text style={styles.textButton}>Sair</Text>
            </TouchableOpacity>

        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height : 20,
        justifyContent: 'start',
        backgroundColor: '#fff'
    },
    header: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: 100,
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
    },
    button: {
        backgroundColor: '#F1546E',
        width: '80%',
        height: 50,
        padding: 5,
        borderRadius: 5,
        marginLeft: 40,
        marginTop: 40,
        textAlign: 'center'
    },
    textButton: {
        color: '#ffff',
        fontWeight: 'bold',
        justifyContent: 'center',
        fontSize: 20,
        marginRight: 15
    },
    seuPerfil: {
        fontSize: 30,
        marginTop: 40,
        textAlign: 'center'
    }
  });

export default PerfilProfissional;