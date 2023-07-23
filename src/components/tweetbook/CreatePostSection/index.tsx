import {Image, Text, View} from "react-native";
import {styles} from '@/src/components/tweetbook/CreatePostSection/styles';
import FontAwesome from "@expo/vector-icons/FontAwesome";
const CreatePostSection = () => {
    return (
        <View style={styles.container}>
            <Image
                source={{uri: 'https://res.cloudinary.com/dxgl4eyhq/image/upload/v1687910159/tweetbook/images/profile/preetam_qegj3y.jpg'}}
                style={styles.image}
            />
            <View style={styles.textView}>
                <Text>Write something here...</Text>
                <Text>यहां कुछ लिखिए...</Text>
            </View>
            <FontAwesome name='photo' size={20} color='green'/>
        </View>
    );
}

export default CreatePostSection;
