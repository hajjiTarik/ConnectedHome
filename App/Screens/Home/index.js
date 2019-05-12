import React from "react";
import {View, Text, StyleSheet} from "react-native";

const Home = () => {
    return (
        <View style={styles.container}>
            <Text>
                Hello you are logged
            </Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
        paddingTop: 130
    },
});

export default Home;