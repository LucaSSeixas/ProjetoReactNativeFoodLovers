import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

const FoodList = [
    {
        nome: "Hamburguer Artesanal Bob Beef",
        image_url: "https://uploads.emaisgoias.com.br/2021/02/hamburguer-artesanal-em-Goiania_capa.jpeg",
        data: "05/12/2021",
        ratting: "4,5"
    },
    {
        nome: "Lasanha Bolonhesa La Mole",
        image_url: "https://uploads.metropoles.com/wp-content/uploads/2018/07/25113901/iStock-535851351.jpg",
        data: "28/11/2021",
        ratting: "4,7"
    },
    {
        nome: "Feijoada Completa Taurus",
        image_url: "https://latitudebeer.files.wordpress.com/2019/07/feijoada.jpg?w=980&h=460&crop=1",
        data: "12/11/2021",
        ratting: "4,2"
    },
    {
        nome: "Rodízio de Sushis Manekineko",
        image_url: "http://www.boadiversao.com.br/midia/image/manekineko_mix_boadiversao_195.jpg",
        data: "01/11/2021",
        ratting: "4,8"
    },
    {
        nome: "Cesta de Pastel Diversos do Empório do Pastel",
        image_url: "https://img.freepik.com/fotos-gratis/pastel-de-petisco-brasileiro-recheado-com-carne-moida-camarao-queijo-e-siri-em-cesta-de-palha_285885-121.jpg?size=626&ext=jpg",
        data: "17/10/2021",
        ratting: "4,0"
    },
];

const BodyHome = () => {
    return (
        <TouchableOpacity
            activeOpacity={1}
            style={{ marginBottom: 30 }}
        >
            {FoodList.map((food, index) => (
                <View
                    key={index}
                    style={styles.body}>
                    <ExperienceImage image={food.image_url} />
                    <ExperienceInfo
                        nome={food.nome}
                        data={food.data}
                        ratting={food.ratting}
                    />
                </View>
            ))}
        </TouchableOpacity>
    );
}

const ExperienceImage = (props) => (
    <>
        <Image source={{
            uri: props.image
        }}
            style={{ width: '100%', height: 180 }}
        />
    </>
)

const estrela = "../../assets/img/star.png"

const ExperienceInfo = (props) => (
    <View style={styles.info}>
        <View>
            <Text style={styles.title}>{props.nome}</Text>
            <Text style={styles.date}>{props.data}</Text>
        </View>
        <View style={styles.ratting}>
            <View>
                <Text>{props.ratting}</Text>
            </View>
            <View>
                <Image source={require(estrela)} style={styles.estrela} />
            </View>
        </View>
    </View>
)

export default BodyHome;