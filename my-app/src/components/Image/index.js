import React from "react";
import {View, Image} from "react-native";
import styles from "./style";

export default function Imagem(){
    return(
        <View style={styles.Container}>
            <Image style={styles.Imagem} source={require('./fagammon.png')}/>
        </View>
    );
}

