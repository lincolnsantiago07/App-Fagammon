import React from "react";
import { View} from "react-native"
import { LinearGradient} from 'expo-linear-gradient';
import LoginCoord from "../../components/LoginCoord";

export default function Coordenador(){
    return(
            <View>
                 <LinearGradient colors={['#00F5A0', '#00D9F5']}>
                    <LoginCoord/>
                </LinearGradient>
            </View>   
    );
}

