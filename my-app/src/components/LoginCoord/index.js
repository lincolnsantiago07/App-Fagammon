import React from "react";
import { useNavigation } from '@react-navigation/native'
import styles from "./style";
import Icon from "react-native-vector-icons/FontAwesome";
import {View, Text, TextInput, TouchableOpacity, Image} from "react-native";

export default function LoginCoord(){

    const navigation = useNavigation(); 

    return(
        <View style={styles.View}>
            <View style={styles.Container}>
                <Image style={styles.Imagem} source={require('./fagammon.png')}/>
            </View>
                <View style={styles.Container}>
                    <View style={styles.Label}> 
                        <Text style={styles.CoordText}> Portal do Coordenador</Text>
                        <View style={styles.containerInput}>
                            <View style={styles.GreenSquare}>
                               <Icon name='user' style={styles.Icones}/> 
                            </View>
                            <TextInput placeholder="Usuário" style={styles.input}></TextInput>
                        </View>
                        <View style={styles.containerInput}>
                            <View style={styles.GreenSquare}>
                                <Icon name='lock' style={styles.Icones}/>
                            </View>
                            <TextInput placeholder="Senha" style={styles.input}></TextInput>
                        </View>
                        <TouchableOpacity onPress={ () => navigation.navigate('Gestor')}  title="Gestor" style={styles.buttonLogin}>
                            <Text style={styles.textButtonLogIn}>Entrar</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity  onPress={ () => navigation.navigate('Home')} title="CoordLogin" style={styles.buttonUser}>
                            <Text style={styles.textButtonUser}>Entrar como Aluno</Text>
                    </TouchableOpacity>
                </View>
        </View>
        
    );
}