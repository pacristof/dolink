import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';
import http from '../Utils/http-axious';
import Logo from '../assets/Logo.png';

function PreMatch({navigation}) {

    const [vagas, setVagas] = useState([]);

    const [search, setSearch] = useState('');
    const [vagafiltro, setVagaFiltro] = useState([]);

    const [idVaga, setVaga] = useState('');
    const [idMatch, setMatch] = useState('');
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [local, setLocal] = useState('');
    const [faixaSalarial, setFaixaSalarial] = useState('');

    useEffect(() => {
        ListarPreMatch()
    }, [])

    const ListarPreMatch = async () => {

        const idProfissional = jwtDecode(await AsyncStorage.getItem('@jwt')).Id;

        http.get('https://dolink.azurewebsites.net/v1/vagancy/prematch/' + idProfissional, {
            method: 'GET',

            body: JSON.stringify({

                idVaga: idVaga

            }),
            headers: {
                'Authorization' : `Bearer ${await AsyncStorage.getItem('@jwt')}`
            }

        })
            .then(resultado => {
                setVagas(resultado.data.data);
                setVagaFiltro(resultado.data.data)
                console.log(vagas)
            })
            .catch((err) => console.log(err))
    }

    const searchFilterFunction = (text) => {

        if (text) {
          const newData = vagas.filter(function (item) {
            const itemData = item.titulo
              ? item.titulo.toLowerCase() 
              : ''.toLowerCase();
            const textData = text.toLowerCase();
            return itemData.indexOf(textData) > -1;
              
          });
          setVagaFiltro(newData);
          setSearch(text);
        }
        else {
          setVagaFiltro(vagafiltro);
          setSearch(text);
        }
    };

    // const ListarPreMatch = async () => {

    //     const idProfissional = jwtDecode(await AsyncStorage.getItem('@jwt')).Id
        
    //     console.log(idProfissional);

    //     fetch(`${url}vagancy/prematch/${idProfissional}`, {
    //         method : 'GET',
    //         body: JSON.stringify({

    //             idVaga: idVaga
                
    //         })
    //     })
    //     .then(resultado => {
    //         setVagas(resultado.data.data);
    //         console.log(vagas);
    //     })
    //     .catch((err) => console.log(err))  
    // }
    
    return(

        <View style={styles.container}>

            <View style={styles.header}> 
                    <Image 
                        style={styles.logo}
                        source={Logo}
                    />
            </View>

            
            <View>
                <Text style={styles.seusMatchs}>Vagas Compatíveis!</Text>
            </View>

            <View>
                <TextInput
                    style={styles.search}
                    onChangeText={(text) => searchFilterFunction(text)}
                    onClear={(text) => searchFilterFunction('')}
                    placeholder="Informe o titulo da vaga..."
                    value={search}
                />
            </View>

            <ScrollView style={styles.preMatchs}>
                <FlatList
                    contentContainerStyle={styles.listaTurmas}
                    data={vagafiltro}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                        <View style={styles.itemLista} key={index}>
                            <Text style={styles.titulo}>{item.titulo}</Text>
                            <Text style={styles.descricao}>{item.descricao.substring(0, 40)}...</Text>
                            <Text style={styles.descricao}>Salário: R${item.faixaSalarial}</Text>   
                        </View>
                    )}
                />
            </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height : 20,
        justifyContent: 'center',
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
    search: {
        height: 60,
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
        elevation: 5,
        marginTop: 30,
        marginHorizontal : 50
    },  
    seusMatchs: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: 30
    },
    listaTurmas : {
        marginHorizontal : 50,
        marginBottom: 50
    },
    itemLista : {
        backgroundColor : '#1A82D6',
        borderRadius : 15,
        textAlign : 'left',
        marginTop: 40
    },
    titulo : {
        padding : 15,
        fontSize : 22,
        fontWeight : '700',
        color: 'white'
    },
    descricao : {
        padding : 20,
        fontSize : 18,
        fontWeight : '400',
        color: 'white'
    }
  });

export default PreMatch;