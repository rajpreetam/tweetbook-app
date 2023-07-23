import {Text, View} from "react-native";
import {styles} from "@/src/components/tweetbook/Header/styles";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Tweetbook</Text>
            <View style={styles.iconContainer}>
                <View style={styles.iconBox}>
                    <FontAwesome name='plus' size={24} color='black'/>
                </View>
                <View style={styles.iconBox}>
                    <FontAwesome name='search' size={24} color='black'/>
                </View>
                <View style={styles.iconBox}>
                    <FontAwesome name='inbox' size={24} color='black'/>
                </View>
            </View>
        </View>
    );
}

export default Header;
