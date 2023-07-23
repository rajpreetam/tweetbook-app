import {Text, View, StyleSheet, ScrollView} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import Header from '@/src/components/tweetbook/Header';
import CreatePostSection from "@/src/components/tweetbook/CreatePostSection";

const TweetbookScreen = () => {
    return (
        <View>
            <SafeAreaView style={{backgroundColor: 'white'}} />
            <Header />
            <CreatePostSection />
        </View>
    );
}

const styles = StyleSheet.create({

});

export default TweetbookScreen;
