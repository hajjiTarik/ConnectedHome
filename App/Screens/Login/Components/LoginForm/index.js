import { View, Text, TextInput, TouchableOpacity ,StyleSheet ,StatusBar} from 'react-native';
import { Redirect } from "react-router";
import intl from "react-intl-universal";
import React, {Component} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

import constantes from "../../../../constantes";

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
                <Text>{intl.get("HOME_TEXT_MESSAGE")}</Text>
                <View style={styles.input}>
                    <FontAwesomeIcon icon={faLock} />
                    <TextInput
                               autoCapitalize="none"
                               onSubmitEditing={() => this.passwordInput.focus()}
                               autoCorrect={false}
                               keyboardType='email-address'
                               returnKeyType="next"
                               placeholder='Email or Mobile Num'
                               placeholderTextColor='rgba(225,225,225,0.7)'/>
                </View>
                <View style={styles.input}>
                    <TextInput
                               returnKeyType="go" ref={(input)=> this.passwordInput = input}
                               placeholder='Password'
                               placeholderTextColor='rgba(225,225,225,0.7)'
                               secureTextEntry/>
                </View>
                <TouchableOpacity style={styles.buttonContainer} onPress={this.onButtonPress}>
                    <Text  style={styles.buttonText}>tTOTO</Text>
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
        backgroundColor: constantes.colors.inputBgColor,
        height: 55,
        marginBottom: 10,
        padding: 20,
        color: '#fff',
        borderRadius: 7,
        fontSize: 18,
        paddingLeft:60
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
        backgroundColor: constantes.colors.inputBgColor,
        color: '#fff'
    }

});

export default LoginForm;