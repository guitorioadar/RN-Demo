import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView,TouchableOpacity } from 'react-native';

const TAG = 'ScrollViewExample: '

class ScrollViewExample extends Component {

    state = {
        names: [
            {
                name: 'Ben',
                id: 1
            },
            {
                id: 2,
                name: 'Susan'
            },
            {'name': 'Robert', 'id': 3},
            {'name': 'Mary', 'id': 4},
            {'name': 'Daniel', 'id': 5},
            {'name': 'Laura', 'id': 6},
            {'name': 'John', 'id': 7},
            {'name': 'Debra', 'id': 8},
            {'name': 'Aron', 'id': 9},
            {'name': 'Ann', 'id': 10},
            {'name': 'Steve', 'id': 11},
            {'name': 'Olivia', 'id': 12}
        ]

    }

    alertItemName = (item) => {
        alert(item.id)
    }
    render() {
        return (


            <View>

                <ScrollView>
                    {
                        this.state.names.map((item, index) => (
                            <TouchableOpacity
                                key = {item.id}
                                style = {styles.item}
                                onPress={() => this.alertItemName(item)}>
                                <Text>{item.id}</Text>
                                <Text>{item.name}</Text>
                            </TouchableOpacity>
                        ))
                    }
                </ScrollView>
            </View>
        )
    }
}
export default ScrollViewExample

const styles = StyleSheet.create ({
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