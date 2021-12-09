import {StyleSheet } from "react-native";

const styles = StyleSheet.create({
    body: {
        marginTop: 10,
        padding: 15,
        backgroundColor: "#eee",
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        marginTop: 10,
    },
    title: {
        fontSize: 15,
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
    }
});

export default styles;