import { StyleSheet } from "react-native"

const styles = StyleSheet.create({

    //Header
    Header:{
        paddingVertical: 40,
        backgroundColor: '#47C074',
    },
    TextHeader:{
        paddingLeft: 10,    
        color: '#fff',
        fontSize: 20,
    },

     //Form
     ContainerForm:{
        borderTopColor: '#000',
        borderTopWidth: 3,
        borderBottomColor: '#000',
        borderBottomWidth: 3,
        backgroundColor: 'rgba(0,0,0,0.9)',
     },
     LabelForm:{
        marginBottom: 20,
        alignItems: 'center',
     },

     Input:{
        marginTop: 10,
        width: '90%',
        height: 45,
        paddingLeft: 12,
        borderRadius: 4,
        backgroundColor: '#fff',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
     },
     Title:{
        padding: 15,
        fontSize: 27,
        color: '#fff',
        textAlign: 'center',
     },
     Texto:{
        paddingTop: 10,
        paddingLeft: 15,
        fontSize: 20,
        color: '#47C074',
     },

      //Botão de cadastro
      ButtonWrapper:{
         alignItems: 'center',
     },
      RegisterButton:{
         width: "50%",
         marginVertical: 10,
         paddingVertical: 15,
         alignItems: 'center',
         backgroundColor: '#47C074',
      },
      TextButton:{
         fontSize: 17,
         letterSpacing: 2,
      },

      //Section Edit
      Section:{
         alignItems: 'center',
         backgroundColor: 'rgba(0,0,0,0.9)',
      },
      TextSection:{
         fontSize: 20,
         paddingTop: 13,
         paddingBottom: 10,
         color: '#fff',
      },
      ViewEdit:{
         flexDirection: 'row',
         alignItems: 'center',
      },
      inputEdit:{
         marginTop: 10,
         width: '100%',
         height: 45,
         paddingRight: 155,
         paddingLeft: 155,
         borderRadius: 4,
         backgroundColor: '#fff',
 
      },
      EditButton:{
         borderRadius: 4,
         width: "40%",
         marginHorizontal: 23,
         marginTop: 10,
         marginBottom: 20,
         paddingVertical: 15,
         alignItems: 'center',
         backgroundColor: '#47C074',
      },

      Icone:{
         fontSize: 19,
         color: '#fff',
         
     },

      Icon:{
         borderRadius: 100,
         width: 50,
         height: 50,
         marginHorizontal: 10,
         marginTop: 10,
         marginBottom: 20,
         paddingVertical: 15,
         alignItems: 'center',
         backgroundColor: 'rgba(0,0,0,0.9)',
      },
      

});
0
export default styles