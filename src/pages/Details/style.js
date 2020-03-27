import { StyleSheet, TouchableWithoutFeedback } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: "#eee",
        paddingHorizontal: 22,
        paddingTop: Constants.statusBarHeight + 22
    },

    container: {
        justifyContent: "space-between",
        flex: 1,
        marginBottom: 28
    },

    incident: {
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
    },

    cardContactTitle: {
        fontSize: 32,
        fontWeight: "bold",
    },

    cardContactSubTitle: {
        fontSize: 22,
        color: "#737380",
        marginBottom: 12
    },

    cardContactText: {
        color: "#737380",
        fontSize: 16,
        marginBottom: 12
    },

    cardContact: {
        backgroundColor: "#fff",
        padding: 22,
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

    buttonEmail: {
        backgroundColor: "#E02041",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 11,
        borderRadius: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1,
        paddingVertical: 22
    },

    buttonWhatsapp: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#128C7E",
        marginLeft: 11,
        borderRadius: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1,
        paddingVertical: 22
    },

    textButton: {
        color: "#fff",
        fontSize: 18,
    }

});