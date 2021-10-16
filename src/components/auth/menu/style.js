import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1
    },

    containerMain: {
        flex: 1, padding: 20

    },
    headerText: {
        fontWeight: "bold",
        fontSize: 25,
        color: 'darkslategray',
        textAlign: "center",
        marginBottom: 25

    },

    providerButton: {
        borderColor: 'lightgray',
        borderWidth: 1,
        borderStyle: 'solid',
        padding: 10,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: "center"
    },
    providerButtonText: {
        padding: 10
    },

    containerBottomButton: {
     


    }

});

export default styles;