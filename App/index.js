import React from "react";
import {Provider} from "react-redux";
import {NativeRouter} from "react-router-native";
import intl from "react-intl-universal";
import store from "./redux";
import LoginPage from "./Screens/Login";
import {StyleSheet, View} from "react-native";
import {Route} from "react-router";
import Home from "./Screens/Home";
import constantes from "./constantes";

const locales = {
    fr_FR: require("./i18n/fr_FR.json")
};

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            initDone: false
        }
    }
    componentDidMount(){
        this.loadLocales();
    }

    loadLocales = () => {
        intl.init({
            currentLocale: "fr_FR",
            locales
        }).then(() => {
            this.setState({ initDone: true });
        });
    };

    renderViews = () =>{
        if (!this.state.initDone) return null;

        return(
            <View style={styles.container}>
                <Route exact path="/" component={LoginPage} />
                <Route path="/Home" component={Home} />
            </View>
        )
    };

    render(){
        return(
            <Provider store={store}>
                <NativeRouter>
                    <NativeRouter>
                        {this.renderViews()}
                    </NativeRouter>
                </NativeRouter>
            </Provider>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: constantes.colors.backgroundColor,
        paddingTop: 130
    }
});

export default App;