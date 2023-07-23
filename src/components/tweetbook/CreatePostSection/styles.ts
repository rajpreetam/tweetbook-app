import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: 'white',
        gap: 10
    },
    textView: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'gray',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 100,
        marginRight: 10
    },
    image: {
        height: 50,
        aspectRatio: 1,
        borderRadius: 25,
    }
});
