import React from "react";
import {Provider} from "react-redux";
import {NativeRouter} from "react-router-native";

import store from "./redux";
import LoginPage from "./Screens/Login";
import {StyleSheet, View} from "react-native";
import {Route} from "react-router";
import Home from "./Screens/Home";

export default () => {
    return(
        <Provider store={store}>
            <NativeRouter>
                <NativeRouter>
                    <View style={styles.container}>
                        <Route exact path="/" component={LoginPage} />
                        <Route path="/Home" component={Home} />
                    </View>
                </NativeRouter>
            </NativeRouter>
        </Provider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
        paddingTop: 130
    }
});