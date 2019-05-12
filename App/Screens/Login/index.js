import React from "react";
import {KeyboardAvoidingView, StyleSheet} from "react-native";
import LoginForm from "./Components/LoginForm";

const Login = () => {
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <LoginForm/>
        </KeyboardAvoidingView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
        paddingTop: 130
    }
});

export default Login;