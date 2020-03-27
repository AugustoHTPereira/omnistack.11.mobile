import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import Header from "../../components/Header";
import style from "./style";
import { useNavigation } from "@react-navigation/native";
import api from "../../services/Api";

export default function Incidents() {

    const navigation = useNavigation();

    const [total, setTotal] = useState(0);
    const [incidents, setIncidents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);

    async function loadIncidents() {
        if (loading) return;

        if (total > 0 && incidents.length == total) return;

        setLoading(true);

        const response = await api.get(`/incidents?page=${page}`);

        setIncidents([...incidents, ...response.data.incidents]);
        setTotal(response.headers['x-total-count']);
        setPage(page + 1);
        setLoading(false);
    }

    const Loading = () => (loading ? <Text>Carregando...</Text> : null);

    useEffect(() => {
        loadIncidents()
    }, []);

    const navigateToDetail = incident => {
        navigation.navigate("Details", { incident });
    }

    return (
        <View style={style.content}>

            <Header total={total} />

            <Text style={style.text, style.title}>Bem vindo!</Text>
            <Text style={style.text, style.description}>Escolha um dos casos abaixo e salve o dia.</Text>

            <FlatList
                data={incidents}
                style={style.incidentList}
                keyExtractor={incident => String(incident.id)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadIncidents}
                onEndReachedThreshold={0.2}
                renderItem={({ item: incident }) => (

                    <View style={style.incident}>
                        <TouchableOpacity style={style.touchableBottom} onPress={() => navigateToDetail(incident)}>

                            <Text style={style.incidentTitle}>{incident.title}</Text>
                            <Text style={style.incidentDescription}>{incident.description}</Text>

                            <View style={style.horizontalElements}>

                                <View style={style.horizontalAligment}>
                                    <Text style={style.incidentProperty}>ONG: </Text>
                                    <Text style={style.incidentDescription}>{incident.name}</Text>
                                </View>

                                <View style={style.horizontalAligment}>
                                    <Text style={style.incidentProperty}>Valor: </Text>
                                    <Text style={style.incidentDescription}>{Intl.NumberFormat("pt-BR", { style: 'currency', currency: "BRL" }).format(incident.value)}</Text>
                                </View>

                            </View>

                        </TouchableOpacity>
                    </View>

                )} />

                <Loading style={style.loading} />
        </View>
    );
}