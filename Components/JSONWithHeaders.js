import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import axios from 'axios'
import perser from 'json-parser'
//import CoinCards from 'CoinCards'

const TAG = 'JSONWithHeaders: '

class JSONWithHeaders extends Component {


    state = {
        persons: [],

    }

    componentDidMount() {
        axios.get(
            'https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?listing_status=active&start=1&limit=10',
            {
                headers: {
                    'X-CMC_PRO_API_KEY': '6ad18894-dd54-432c-9145-9536ca5eec58'
                }
            }
        )
            .then(res => {

                /*console.log(TAG + ' Status: ' +
                    ' Timestamp: ' + JSON.stringify(res.data.status.timestamp) +
                    ' Elapsed: ' + JSON.stringify(res.data.status.elapsed)
                )*/

                var personsJSON = res.data.data;
                this.setState({
                    persons: personsJSON
                });
            })
    }

    alertItemName = (item) => {
        alert(item.symbol)
    }

    render() {
        return (
            <View>
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
                                        + '\n Symbol: ' + person.symbol
                                    }
                                </Text>



                        )
                    }

                </View>
            </View>
        )
    }

}

export default JSONWithHeaders

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30,
        margin: 2,
        borderColor: '#2a4944',
        borderWidth: 0.3,
        backgroundColor: '#efebf9'
    }
})

/*
    <CoinCards
    key={person.id}
    symbol={person.symbol}
    coin_name={person.name}
    price_usd={person.slug}
    percent_change_24h={person.first_historical_data}
    percent_change_7d={person.last_historical_data}
                               />

*/