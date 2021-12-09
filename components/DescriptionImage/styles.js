import {StyleSheet } from "react-native";

const styles = StyleSheet.create({
    body: {
        marginTop: 0,
        padding: 5,
        backgroundColor: "#eee",
        flexDirection: 'column',
        text:{
            backgroundColor: '#eee',
            marginTop: 20,
            padding: 10,
            fontSize: 30,
            borderStyle: 'solid',
            borderColor: 'black',
            borderWidth: 1,
        }
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    date: {
        fontSize: 13,
        color: "gray",
    },
    ratting: {
        height: 45,
        width: 45,
        alignItems: "center",
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    estrela: {
        padding: 0,
        height: 20,
        width: 20,
    },
    space:{
        marginTop: 10,
        marginBottom: 10
    }
});

export default styles;
