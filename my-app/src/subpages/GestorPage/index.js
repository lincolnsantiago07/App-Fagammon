import React from "react";
import {View, Text, ScrollView, TextInput, TouchableOpacity, Button} from "react-native"
import { useNavigation } from '@react-navigation/native'
import {LinearGradient} from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';

import Carousel from "../../components/Carousel";
import styles from "./style";



export default function CadastroCoord(){

    const navigation = useNavigation(); 

    return(
            <ScrollView>
                <LinearGradient colors={['#00F5A0', '#00D9F5']}>
                    {/* Header */}
                    <View>
                        <View style={styles.Header}>
                            <Text style={styles.TextHeader}>Acesso como: Gestor</Text>
                        </View>  
                    </View>

                    {/* Carousel */}
                    <View>    
                        <Carousel/>
                    </View>

                    {/* FormCoord */}

                    <View style={styles.ContainerForm}>
                        <Text style={styles.Title}>Cadastro de Coordenador</Text>
                        <View>
                            <Text style={styles.Texto} Title='Nome' >Nome</Text>
                            <View  style={styles.LabelForm}>
                                <TextInput style={styles.Input} Title='Nome' placeholder='Insira o Nome'></TextInput>
                            </View>
                            <Text style={styles.Texto} >E-mail</Text>
                            <View  style={styles.LabelForm}>
                                <TextInput style={styles.Input} Title='Email' placeholder='Insira o E-mail'></TextInput>
                            </View>
                            <Text style={styles.Texto} >Curso</Text>
                            <View  style={styles.LabelForm}>
                                <TextInput style={styles.Input} Title='Curso' placeholder='Insira o Curso'></TextInput>
                            </View>
                            <Text style={styles.Texto} >Usuário</Text>
                            <View  style={styles.LabelForm}>
                                <TextInput style={styles.Input} Title='Usuário' placeholder='Insira o Usuário'></TextInput>
                            </View>
                            <Text style={styles.Texto} >Senha</Text>
                            <View  style={styles.LabelForm}>
                                <TextInput style={styles.Input} Title='Senha' placeholder='Insira o Senha'></TextInput>
                            </View>
                            <View style={styles.ButtonWrapper}>
                                <TouchableOpacity style={styles.RegisterButton}>
                                    <Text style={styles.TextButton}>Cadastrar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    {/* Editar/Excluir */}
                    <View style={styles.Section}>
                        <Text style={styles.TextSection}>Selecione um Coordenador para Editar/ Excluir</Text>
                        <View  style={styles.LabelForm}>
                            <TextInput style={styles.inputEdit} Title='Usuário' placeholder='Insira o Usuário'></TextInput>
                        </View>
                            <View  style={styles.ViewEdit}>
                                <TouchableOpacity style={styles.EditButton}>
                                    <Text style={styles.TextButton}>Editar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.EditButton}>
                                    <Text style={styles.TextButton}>Excluir</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity  onPress={ () => navigation.navigate('Coordenador')} style={styles.Icon}>
                                <Icon name='leftcircle' style={styles.Icone}/>
                            </TouchableOpacity>
                    </View>
                </LinearGradient>
            </ScrollView>   
    );
}

