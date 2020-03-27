import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import logo from "../../assets/logo.png";
import style from "./style";

export default function Header({ total }) {

    const navigation = useNavigation();

    const goHome = () => {
        navigation.navigate("Incidents");
    }

    const ShowMenu = () => (total !== undefined ? <Text style={style.text, style.textHeader}>Total de <Text style={style.textBold}>{total} casos</Text>.</Text> : null)

    return (
        <View style={style.header}>
            <TouchableOpacity onPress={goHome}>
                <Image source={logo} />
            </TouchableOpacity>
            <ShowMenu />
        </View>
    );
}