import React from "react";
import {ScrollView, View } from "react-native";
import BodyHome from "../../components/BodyHome/BodyHome";
import FooterTabs from "../../components/FooterTabs/FooterTabs";
import HeaderTabs from "../../components/HeaderTabs/HeaderTabs";
import SearchBar from "../../components/SearchBar/SearchBar";
import styles from "./styles";

export default function Home() {
    return (
        <>
            <HeaderTabs />
            <View style={styles.container}>
                <SearchBar />
            </View> 
            <ScrollView>
                <BodyHome />
            </ScrollView>
            <View style={styles.footer}>
                <FooterTabs />
            </View>
        </>
    )
}