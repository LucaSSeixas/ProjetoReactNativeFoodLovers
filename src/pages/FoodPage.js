import React from 'react';
import { ScrollView, View } from 'react-native';
import AddButton from '../../components/AddButton/AddButton';
import DescriptionImage from '../../components/DescriptionImage/DescriptionImage';
import FooterTabs from "../../components/FooterTabs/FooterTabs";
import HeaderTabs from "../../components/HeaderTabs/HeaderTabs";
import styles from './styles';

export default function FoodPage() {
    return (
        <>
            <HeaderTabs />
            <ScrollView>
                <DescriptionImage />
            </ScrollView>
            <View style={styles.footer}>
                <AddButton />
                <FooterTabs />
            </View>
        </>
    )
}