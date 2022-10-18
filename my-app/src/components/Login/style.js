import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    loginContext:{
        width: "100%",
        height: "100%",
        bottom: 0,
        alignItems: "center",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        marginTop: 42,
    },
    login:{
        width: "100%",
        height: "auto",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 32,
    },
    ContainerInput: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: 20,
    },
    LoginLabel:{
        color: "#ffffff",
        fontSize: 32,
        letterSpacing: 4,
        fontWeight: "300",
    },
    input:{
        width: "80%",
        borderRadius: 4,
        fontSize: 20,
        color: "#598D74",
        backgroundColor: "#f6f6f6",
        height: 58,
        margin: 12,
        paddingLeft: 20,
    },
    buttonLogin: {
        borderRadius: 4,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: 63,
        paddingLeft: 130,
        paddingRight: 130,
        backgroundColor: "#000000",
        marginTop: 78,
    },
    textButtonLogin:{
        fontSize: 20,
        color: "#ffffff",
    },
    buttonCoord: {
        borderRadius: 4,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: 63,
        backgroundColor: "#ffffff",
        marginTop: 66,
    },
    textButtonCoord:{
        fontSize: 15,
        paddingLeft: 35,
        paddingRight: 35,
        fontWeight: "500",
        color: "#000000",
    },
});

export default styles