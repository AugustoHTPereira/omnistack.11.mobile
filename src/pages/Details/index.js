import React from "react";
import { View, Text, TouchableOpacity, Linking } from "react-native";
import Header from "../../components/Header";
import style from "./style";
import { useRoute } from "@react-navigation/native";
import * as MailComponser from "expo-mail-composer";

export default function Details() {

    const route = useRoute();

    const { title, description, phone, email, value, name, city, uf } = route.params.incident;

    const message = "Olá APAGE, estou entrando em contato pois gostaria de ajudar no caso CASO 01 com o valor de R$ 120,00";

    const sendMail = () => {
        MailComponser.composeAsync({
            subject: "Herói do caso CASO 01",
            recipients: [email],
            body: message
        });
    }

    const sendWhatsApp = () => {
        Linking.openURL(`whatsapp://send?phone=55${phone}&text=${message}`);
    }

    return (
        <View style={style.content}>

            <Header />

            <View style={style.container}>

                <View style={style.incident}>

                    <Text style={style.incidentTitle}>{title}</Text>
                    <Text style={style.incidentDescription}>{description}</Text>

                    <View style={style.horizontalElements}>

                        <View style={style.horizontalAligment}>
                            <Text style={style.incidentProperty}>ONG: </Text>
                            <Text style={style.incidentDescription}>{name}</Text>
                        </View>

                        <View style={style.horizontalAligment}>
                            <Text style={style.incidentProperty}>Valor: </Text>
                            <Text style={style.incidentDescription}>{Intl.NumberFormat("pt-BR", { style: 'currency', currency: "BRL" }).format(value)}</Text>
                        </View>

                    </View>

                    <View style={style.horizontalElements}>
                        <Text>{city}</Text>
                        <Text>{uf}</Text>
                    </View>

                </View>

                <View style={style.cardContact}>
                    <Text style={style.cardContactTitle}>Salve o dia!</Text>
                    <Text style={style.cardContactSubTitle}>Seja o heroi desse caso.</Text>
                    <Text style={style.cardContactText}>Entre em contato:</Text>

                    <View style={style.horizontalAligment}>
                        <TouchableOpacity onPress={sendMail} style={style.buttonEmail}>
                            <Text style={style.textButton}>Email</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={sendWhatsApp} style={style.buttonWhatsapp}>
                            <Text style={style.textButton}>WhatsApp</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>

        </View>
    );
}