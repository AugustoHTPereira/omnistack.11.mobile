import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: "#eee",
        paddingHorizontal: 22,
        paddingTop: Constants.statusBarHeight + 22
    },

    textBold: {
        fontWeight: "bold"
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },

    textHeader: {
        fontSize: 16,
        color: "#737380"
    },

    title: {
        fontSize: 32,
        fontWeight: "bold"
    },

    description: {
        lineHeight: 22,
        marginTop: 8,
        color: "#737380",
        fontSize: 16
    },

    incidentList: {
        marginTop: 22
    },

    incident: {
        marginBottom: 22,
        paddingHorizontal: 18,
        paddingVertical: 18,
        backgroundColor: "#fff",
        borderRadius: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,

        elevation: 1,
    },

    incidentTitle: {
        fontSize: 22
    },

    incidentDescription: {
        color: "#737380",
        fontSize: 16
    },

    incidentProperty: {
        fontWeight: "bold",
        fontSize: 16
    },

    horizontalElements: {
        flexDirection: "row",
        marginTop: 16,
        justifyContent: "space-between"
    },

    horizontalAligment: {
        flexDirection: "row"
    }
});