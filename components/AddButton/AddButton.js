import React from "react";
import {ImageBackground, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

const linguonda = "../../assets/img/linguonda.png"

const AddButton = () => {
    return(
        <View>
            <ImageBackground source={require(linguonda)} style={styles.container}>
                <View style={styles.buttonAlign}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Adicionar experiência</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonAlign}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Deletar experiência</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>

    );
}

export default AddButton;