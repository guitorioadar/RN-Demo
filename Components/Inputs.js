import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet,ScrollView } from 'react-native'

class Inputs extends Component {

    state = {
        email: '',
        password: ''
    }
    handleEmail = (textEmail) => {
        this.setState({email: textEmail})
    }
    handlePassword = (textPass) => {
        this.setState({password: textPass})
    }
    login = (email, pass) => {
        alert('email: ' + email + ' Pass: ' + pass)
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input}
                           underlineColorAndroid="transparent"
                           placeholder="Email"
                           placeholderTextColor="#9a73ef"
                           autoCapitalize="none"
                           onChangeText = {this.handleEmail}/>
                <TextInput style = {styles.input}
                           underlineColorAndroid = "transparent"
                           placeholder = "Password"
                           placeholderTextColor = "#9a73ef"
                           autoCapitalize = "none"
                           onChangeText = {this.handlePassword}/>

                <TouchableOpacity
                style = {styles.submitButton}
                onPress = {
                    () => this.login(this.state.email,this.state.password)
                }>
                    <Text styte={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

export default Inputs

const styles = StyleSheet.create({
    container: {
        padding: 13,
    },
    input: {
        margin: 5,
        padding: 10,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 0.3
    },
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        height: 40,
        color: 'white'
    },
    submitButtonText: {
        color: 'white'
    }
})
