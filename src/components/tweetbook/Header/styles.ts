import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 0.5,
        borderColor: 'lightgray',
        backgroundColor: 'white'
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    iconBox: {
        backgroundColor: 'lightgray',
        height: 40,
        width: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
