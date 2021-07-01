import React from 'react';
import { Button } from 'react-native-elements';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Logo from '../assets/Logo.png';
import fundo from '../assets/vector/fundoHome.png'
import { color } from 'react-native-elements/dist/helpers';

function Inicio({ navigation }) {
    return (
        <View style={styles.container}>
            <ImageBackground source={fundo} style={styles.sectionTitulo}>
                <View style={styles.titulo}>
                    <Image style={styles.image} source={Logo} />
                    <View style={styles.hr} />
                    <Text style={styles.descricao}>Dê um up em sua carreira!</Text>
                </View>
            </ImageBackground>
            <View style={styles.buttonContainer}>
                <Button
                    buttonStyle={[styles.buttonSignIn]}
                    titleStyle={styles.titleSignUp}
                    title="Sign In"
                    onPress={() => navigation.navigate('Login')}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor : '#fff',
    },
    sectionTitulo : {
        flex : 3,
        alignItems : 'center',
    },
    titulo : {
        flex : 1,
        marginTop : 80,
        alignItems : 'center'
    },
    hr : {
        width : 300,
        borderBottomWidth : 3,
        borderBottomColor : '#fff',
        marginTop : 20
    },
    image : {
        width : 250,
        height : 100,
        resizeMode : 'center'
    },
    descricao:{
        width : 200,
        color : '#fff',
        fontSize : 25,
        fontWeight:'bold',
        textAlign : 'center',
        marginTop : 30
    } ,
    buttonContainer : {
        flex : 2,
        alignItems : 'center',
        marginTop : -80
    },
    buttonSignIn:{
        height:65,
        width: 280,
        borderRadius:10,
        borderWidth:5,
        backgroundColor:'#00C74F',
        borderColor: "#00C74F"
    },
    titleSignUp : {
        fontWeight : 'bold',
        color: 'white'
    }
})

export default Inicio;