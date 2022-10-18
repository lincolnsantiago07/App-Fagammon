import React from "react";
import {View, Text, TextInput, Button} from "react-native"

export default function Form(){
    return(
        <View>
            <View>
                <Text>Painel do Admin</Text>
            </View>
            {/* Formulário de Cadastro do Coordenador*/}
            <View>
                <Text>Nome do Coordenador</Text>
                <TextInput placeholder="Nome do Coordenador" keyboardType="text"></TextInput>
                <Text>E-mail</Text>
                <TextInput placeholder="E-mail" keyboardType="text"></TextInput>
                {/* DropDraw List do curso*/}
                <Text>Curso</Text>
                <TextInput placeholder="Curso" keyboardType="text"></TextInput>
                <Text>Usuário</Text>
                <TextInput placeholder="Usuário" keyboardType="text"></TextInput>
                <Text>Senha</Text>
                <TextInput placeholder="Senha" keyboardType="text"></TextInput>
            </View>

            <View>
                <Button title="Cadastrar"/>
            </View>

            {/* Editar/Excluir um Coordenador */}
            <View>
                <Text>Selecione um Coordenador para editar/excluir</Text>
                <Button title="Editar"/>
                <Button title= "Excluir"/>
            </View>
        </View>
    );
}