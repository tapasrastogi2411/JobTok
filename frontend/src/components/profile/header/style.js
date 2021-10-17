import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        paddingHorizontal: 65,
        paddingVertical:20,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: 'lightgray'
    },
    counterContainer: {
        flexDirection: 'row',
        paddingBottom: 20
    },
    counterItemContainer: {
        flex: 1,
        alignItems: 'center'
    },
    emailText: {
        padding: 20,
    },
    counterNumberText: {
        fontWeight: 'bold',
        fontSize: 16
    },
    counterNLabelText: {
        fontWeight: 'gray',
        fontSize: 11
    },

});

export default styles;