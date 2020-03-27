import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({

    textBold: {
        fontWeight: "bold"
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 28
    },

    textHeader: {
        fontSize: 16,
        color: "#737380"
    },
});