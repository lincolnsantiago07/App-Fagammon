import React from "react";
import { View } from "react-native";
import { LinearGradient} from 'expo-linear-gradient';
import Login from "../../components/Login"
import Imagem from "../../components/Image"
import Title from "../../components/Title"

export default function Home(){
    return(
            <View>
                 <LinearGradient colors={['#00F5A0', '#00D9F5']}>
                        <Imagem/>
                        <Title/>
                        <Login/>
                </LinearGradient>
            </View> 
    );
}
