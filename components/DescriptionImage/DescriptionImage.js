import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from '../DescriptionImage/styles';


export default function DescriptionImage() {

    const lasanha = "../../assets/img/lasanha.jpg";
    const estrela = "../../assets/img/star.png"
    const lasanha2 = "../../assets/img/lasanha(2).jpg";

    return (
        <View style={styles.body}>
            <View>
                <Image
                    source={require(lasanha)}
                    style={{ width: '100%', height: 200 }}
                />
            </View>
            <View style={styles.info}>
                <View>
                    <Text style={styles.title}>Lasanha Bolonhesa La Mole</Text>
                    <Text style={styles.date}>28/11/2021</Text>
                </View>
                <View style={styles.ratting}>
                    <View>
                        <Text>4,7</Text>
                    </View>
                    <View>
                        <Image source={require(estrela)} style={styles.estrela} />
                    </View>
                </View>
            </View>
            <View style={styles.body.text}>
                <Text>
                    Lasanha preparada no ponto certo, com alguns pontos a levantar, como: a massa gratinada possuia uma aparência deliciosa, o recheio tão rico quanto as lasanhas que minha avó fazia para mim, porém o único ponto negativo foi à respeito da quantidade com relação ao notável preço. Recomendo com acompanhamento de um bom vinho.
                </Text>
            </View>
            <View>
                <View style={styles.space}>
                    <Image
                        source={require(lasanha2)}
                        style={{ width: '100%', height: 200 }}
                    />
                </View>
            </View>
        </View>
    )
}