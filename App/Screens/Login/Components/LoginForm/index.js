import { View, Text, TextInput, TouchableOpacity ,StyleSheet ,StatusBar} from 'react-native';
import { Redirect } from "react-router";
import React, {Component} from "react";

class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            redirectLogin: false
        }
    }
    onButtonPress = () => {
        this.setState({
            redirectLogin: true
        })
    };

    render(){
        if (this.state.redirectLogin) {
            return <Redirect to="/Home"/>
        }

        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content"/>
                <TextInput style = {styles.input}
                           autoCapitalize="none"
                           onSubmitEditing={() => this.passwordInput.focus()}
                           autoCorrect={false}
                           keyboardType='email-address'
                           returnKeyType="next"
                           placeholder='Email or Mobile Num'
                           placeholderTextColor='rgba(225,225,225,0.7)'/>

                <TextInput style = {styles.input}
                           returnKeyType="go" ref={(input)=> this.passwordInput = input}
                           placeholder='Password'
                           placeholderTextColor='rgba(225,225,225,0.7)'
                           secureTextEntry/>
                <TouchableOpacity style={styles.buttonContainer} onPress={this.onButtonPress}>
                    <Text  style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input:{
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        padding: 10,
        color: '#fff'
    },
    buttonContainer:{
        backgroundColor: '#2980b6',
        paddingVertical: 15
    },
    buttonText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    },
    loginButton:{
        backgroundColor:  '#2980b6',
        color: '#fff'
    }

});

export default LoginForm;