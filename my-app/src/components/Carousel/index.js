import React from "react";
import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/MaterialIcons'
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons'
import {View, Text, ScrollView} from "react-native"
import styles from "./style";


export default function Carousel(){
    return(
            <ScrollView>
               <View style={styles.Container}>
                    <View style={styles.ContainerWrapper}>
                        <View style={styles.Icons}>
                            <Icon name='school-outline' style={styles.Icon} size={33} color={'#fff'}/>
                        </View>
                        <Text  style={styles.Texto}>Cadastrar Coordenador</Text>
                    </View>
                    <View style={styles.ContainerWrapper}>
                        <View style={styles.Icons}>
                            <Icon name='calendar-sharp' style={styles.Icon} size={33} color={'#fff'}/>
                        </View>
                        <Text style={styles.Texto}>Calendário</Text>
                    </View>
                    <View style={styles.ContainerWrapper}>
                        <View style={styles.Icons}>
                            <Icon2 name='watch-later' style={styles.Icon} size={33} color={'#fff'}/>
                        </View>
                        <Text style={styles.Texto}>Cadastrar Horário de Aula</Text>
                    </View>
                    <View style={styles.ContainerWrapper}>
                        <View style={styles.Icons}>
                            <Icon3 name='monitor-screenshot' style={styles.Icon} size={33} color={'#fff'}/>
                        </View>
                        <Text style={styles.Texto}>Cadastrar Horário de Aula Lab</Text>
                    </View>
               </View>
            </ScrollView>   
    );
}

