import React from "react";
import {View, Text, TextInput, TouchableOpacity} from "react-native";
import styles from "./style";


export default function Login(){
    return(
        <View style={styles.loginContext}>
            <Text style={styles.LoginLabel}>Escolha o Curso</Text>
            <View style={styles.login}>              
                    <TextInput placeholder="Curso" style={styles.input}></TextInput> 
            </View>
            <View>
                <TouchableOpacity style={styles.buttonLogin}>
                    <Text style={styles.textButtonLogin}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            <View>
                <TouchableOpacity style={styles.buttonCoord}>
                    <Text style={styles.textButtonCoord}>Entrar como Coordenador</Text>
                </TouchableOpacity>
            </View>
        </View>
        
    );
}