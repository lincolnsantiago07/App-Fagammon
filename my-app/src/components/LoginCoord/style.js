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
        marginTop: 60,
    },
    Label:{
        alignItems: "center",
        marginTop: 20,
        backgroundColor: '#1D976C',
        borderRadius: 7,
        width: '90%',
        height:'',
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
        width: 250,
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
        paddingLeft: 130,
        paddingRight: 130,
        backgroundColor: "#000000",
        marginTop: 29,
        marginBottom: 30,
    },
    textButtonLogIn:{
        fontSize: 24,
        paddingLeft: 35,
        paddingRight: 35,
        fontWeight: "400",
        color: "#2DE58D",
    },
    buttonUser:{
        borderRadius: 4,
        alignItems: "center",
        justifyContent: "center",
        width: "88%",
        height: 63,
        paddingLeft: 100,
        paddingRight: 100,
        backgroundColor: "#000000",
        marginTop: 29,
        marginBottom: 30,
    },


});


export default styles