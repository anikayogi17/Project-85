import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class LoadingScreen extends Component {
    signInWithGoogleAsync = async () => {
        try{
            const result = await this.signInWithGoogleAsync.loginAsync({
                behaviour: "web"
                androidClientId: 
                iosClientId:

                scopes: ['profile','email']

                
            })
        }
    }

    render(){
        return(
            <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems:"center"
            }}>
                <Text>Login</Text>
            </View>
        )
    }

}