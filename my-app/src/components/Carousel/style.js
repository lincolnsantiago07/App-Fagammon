import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    //Carousel
    Container:{
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        flexDirection: 'row',
        backgroundColor: 'rgba(0,0,0,0.9)',

    },
    ContainerWrapper:{
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 30,
        width: 90,
        height: 90,
    },

    Icon:{
        marginTop: 10,
        marginLeft: 11,
    },
    
    Icons:{
        backgroundColor: 'rgba(0,0,0,0.9)',
        width: 55,
        height: 55,
        borderRadius: 100,
    },


    Texto:{
        paddingTop: 12,
        textAlign: 'center',
        fontSize: 14,
        color: '#fff',
    },

});
0
export default styles