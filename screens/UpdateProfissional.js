import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {url} from '../Utils/constants';
import jwtDecode from 'jwt-decode';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native';

function UpdateProfissional({navigation}) {

    const [cpf, setCpf] = useState("");
    const [cep, setCep] = useState("");

    const [repositorio, setRepositorio] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [sobreMim, setSobreMim] = useState("");

    const [ultimaEmpresa, setUltimaEmpresa] = useState("");
    const [cargo, setCargo] = useState("");
    const [descricaoFuncao, setDescricaoFuncao] = useState("");

    // const [skills, setSkills] = useState([]);

    // const [skillItems, setSkillItems] = useState([
    //   {
    //     id: "",
    //     nome: "",
    //     nivel: 0,
    //     hash: "",
    //   },
    // ]);

    // const setSkillValue = (position, campo, valor) => {
    //   console.log(campo, valor);
    //   const atualizarSkillItems = skillItems.map((skillItem, index) => {
    //     if (index === position) {
    //       return {
    //         ...skillItem,
    //         [campo.split("|")[0]]: valor.split("|")[0],
    //         [campo.split("|")[1]]: valor.split("|")[1],
    //         [campo.split("|")[2]]: valor.split("|")[2],
    //         ["nivel"]: valor,
    //       };
    //     }

    //     return skillItem;
    //   });

    //   setSkillItems(atualizarSkillItems);
    // };
    // const addNovaSkillItem = () => {
    //   setSkillItems([
    //     ...skillItems,
    //     {
    //       id: "",
    //       nome: "",
    //       nivel: 0,
    //       hash: "",
    //     },
    //   ]);

    //   skillItems.push();
    // };

    // useEffect(() => {
    //   listarSkills();
    // }, []);

    // const listarSkills = () => {
    //   http
    //     .get(`${url}skills`, {
    //       method: "GET",
    //     })
    //     .then((resultado) => {
    //       setSkills(resultado.data.data);
    //     })
    //     .catch((err) => console.log(err));
    // };

    const Alterar = async () => {
        
        const idProfissional = jwtDecode(await AsyncStorage.getItem('@jwt')).Id

        console.log(idProfissional);

        fetch(`${url}professional/update/general`, {
          method: 'PUT',
          body: JSON.stringify({
            Id: idProfissional,
            Cpf: cpf,
            Cep: cep,
            Repositorio: repositorio,
            Linkedin: linkedin,
            SobreMim: sobreMim,
            UltimaEmpresa: ultimaEmpresa,
            Cargo: cargo,
            DescricaoFuncao: descricaoFuncao,
          }),
          headers: {
            "content-type": "application/json",
            'authorization' : `Bearer ${await AsyncStorage.getItem('@jwt')}`
          },
        })
          .then((response) => {
            // Verifica se a validação for OK e caso seja, informa a resposta
            if (response.sucesso) {
              console.log(response.json());
              alert("Cadastro Finalizado!");
            }
          })
          .catch((err) => console.error(err));
      };

      return(
        <View style={styles.container}> 
            
            <ScrollView style={styles.formUpdate}>

              <h1 style={{color : 'white', fontFamily : 'sans-serif', fontSize:'30px', textAlign:'center'}}>Finalize seu Cadastro!</h1>
                
                <h2 style={{color : 'white', fontFamily : 'sans-serif', fontSize:'20px'}}>Dados Pessoais</h2>

                {/* <TextInput
                    style={styles.input}
                    onChangeText={text => setCpf(text)}
                    value={cpf}
                    placeholder="Informe seu CPF..."
                    keyboardType="text"
                />

                <TextInput
                    style={styles.input}
                    onChangeText={text => setCep(text)}
                    value={cep}
                    placeholder="Informe seu CEP..."
                    keyboardType="text"
                /> */}

                <TextInput
                    style={styles.input}
                    onChangeText={text => setLinkedin(text)}
                    value={linkedin}
                    placeholder="Informe seu LinkedIn..."
                    keyboardType="text"
                />

                <TextInput
                    style={styles.input}
                    onChangeText={text => setRepositorio(text)}
                    value={repositorio}
                    placeholder="Informe seu GitHub..."
                    keyboardType="text"
                />

                <TextInput
                    style={styles.input}
                    onChangeText={text => setSobreMim(text)}
                    value={sobreMim}
                    placeholder="Conte-nos sobre você..."
                    keyboardType="text"
                    type="text"
                />

                
                <h2 style={{color : 'white', fontFamily : 'sans-serif', fontSize:'20px'}}>Dados Profissionais</h2>

                <TextInput
                    style={styles.input}
                    onChangeText={text => setUltimaEmpresa(text)}
                    value={ultimaEmpresa}
                    placeholder="Informe sua última empresa (não obrigatório)"
                    keyboardType="text"
                />

                <TextInput
                    style={styles.input}
                    onChangeText={text => setCargo(text)}
                    value={cargo}
                    placeholder="Informe seu cargo (não obrigatório)"
                    keyboardType="text"
                />

                <TextInput
                    style={styles.input}
                    onChangeText={text => setDescricaoFuncao(text)}
                    value={descricaoFuncao}
                    placeholder="Descreva sua função (não obrigatório)"
                    keyboardType="text"
                />
            </ScrollView>

            <TouchableOpacity
                style={styles.button}
                onPress={Alterar}
            >        
                <Text style={styles.textButton}>Finalizar!</Text>
                <Icon name='arrow-right' size={18} float='right' color='white'/>
            </TouchableOpacity>

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
    formUpdate : {
      width : '70%',
      marginTop : '10em'
    },   
    input : {
      width : '100%',
      height : 50, 
      marginTop : 20,
      padding : 5,
      borderRadius : 15,
      backgroundColor : '#dcdcdc',
      
    },
    buttonText:{
     color:"#FF9313",
     top:'61%',
     paddingLeft:'38%',
     position:'absolute',
     fontWeight : 'bold', 
     

    },
    
    button : {
      backgroundColor : '#00C74F',
      width : '70%',
      height: 50,
      padding : 5,
      borderRadius : 5,
      position:'absolute',
      top:'78%',
      flexDirection:'row',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
     
    },

    textButton : {
      color : '#ffff',
      fontWeight : 'bold',
      justifyContent: 'center',
      marginRight : 15,
      fontSize: 20,
      flexDirection:'row',
      

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

export default UpdateProfissional;