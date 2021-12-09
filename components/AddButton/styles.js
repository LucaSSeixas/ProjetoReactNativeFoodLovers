import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    buttonAlign: {
        margin: 15,
        marginBottom: 15,
    },

    button: {
        backgroundColor: '#aaa',
        padding: 15,
        borderRadius: 20,
    },

    buttonText: {
        color: 'white',
        fontStyle: 'italic',
        textAlign: 'center',
        fontSize: 15
    },

    container:{
        backgroundColor: '#fff',
        flexDirection: "row", 
        justifyContent: "space-around",
    },
})

export default styles;