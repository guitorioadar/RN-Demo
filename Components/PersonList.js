import React, { Component } from 'react'
import axios from 'axios'
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

/*const instance = axiosVariable.create({
    baseURL: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?listing_status=active&start=1&limit=100',
    timeout: 1000,
    headers: {'X-CMC_PRO_API_KEY': '6ad18894-dd54-432c-9145-9536ca5eec58'}
});*/

const URL = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?listing_status=active&start=1&limit=100'
//const AuthKey = 'X-CMC_PRO_API_KEY'
//const AuthVal = '6ad18894-dd54-432c-9145-9536ca5eec58'

const TAG = 'PersonList: '

class PersonList extends Component {

    state = {
        persons: []
    }


    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                const personsJSON = res.data;
                this.setState({
                    persons: personsJSON
                });
            })
    }

    alertItemName = (item) => {
        alert(
            'Name: ' + item.name
            + '\n Username: ' + item.username
            + '\n Email: ' + item.email
            + '\n Zipcode: ' + item.address.zipcode
            + '\n City: ' + item.address.city
            + '\n Lat: ' + item.address.geo.lat
            + '\n Lng: ' + item.address.geo.lng
        )
    }

    render() {
        return (
            <View>

                {
                    this.state.persons.map(
                        (person, index) =>
                            <Text
                                key={person.id}
                                style={styles.item}
                                onPress={() => this.alertItemName(person)}>
                                {
                                    'Id: ' + person.id
                                    + '\n Name: ' + person.name
                                }
                            </Text>
                    )
                }

            </View>
        )
    }
}

export default PersonList

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30,
        margin: 2,
        borderColor: '#2a4944',
        borderWidth: 0.3,
        backgroundColor: '#d2f7f1'
    }
})

