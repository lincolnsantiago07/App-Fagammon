import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    View:{
        width: '100%',
        height: '100%',
    },  
    Container:{
        alignItems: "center",
    },
    Imagem:{
        width: 100,
        height: 100,
        marginTop: 80,
    },
    Label:{
        alignItems: "center",
        marginTop: 55,
        backgroundColor: '#1D976C',
        borderRadius: 7,
        width: '90%',
    },
    CoordText: {
        paddingTop: 20,
    
        fontSize: 25,
        color: '#ffffff',
        letterSpacing: 3,
    },
    login:{
        width: "100%",
        height: "auto",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 32,
    },
    containerInput:{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingTop: 27,
        paddingBottom: 14,
    },
    GreenSquare:{
        width: 58,
        height: 58,
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
        backgroundColor: '#00FF80',
    },  
    input:{
        width: "72%",
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
        fontSize: 20,
        color: "#598D74",
        backgroundColor: "#f6f6f6",
        height: 58,
        paddingLeft: 20,
    },
    buttonLogin: {
        borderRadius: 4,
        alignItems: "center",
        justifyContent: "center",
        width: "88%",
        height: 63,
        backgroundColor: "#000000",
        marginTop: 29,
        marginBottom: 30,
    },
    textButtonLogIn:{
        fontSize: 24,
        fontWeight: "400",
        color: "#2DE58D",
    },
    textButtonUser:{
        fontSize: 15,
        fontWeight: "300",
        color: "#FFFFFF",
    },
    buttonUser:{
        borderRadius: 4,
        alignItems: "center",
        justifyContent: "center",
        width: "60%",
        height: 63,
        backgroundColor: "#000000",
        marginTop: 79,
        marginBottom: 30,
    },

});

export default styles