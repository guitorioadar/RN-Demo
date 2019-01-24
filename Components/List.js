import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

class List extends Component {
    state = {
        userNames: [
            {
                id: 3,
                name: 'Ben',
            },
            {
                id: 5,
                name: 'Susan',
            },
            {
                id: 7,
                name: 'Robert',
            },
            {
                id: 9,
                name: 'Mary',
            }
        ]
    }
    alertItemName = (item) => {
        alert(item.id)
    }

    render() {
        return (
            <View>
                {
                    this.state.userNames.map((itemCount, index) => (
                        <TouchableOpacity
                            key={itemCount.id}
                            style={styles.container}
                            onPress={() => this.alertItemName(itemCount)}>

                            <Text style={styles.text}>
                                {itemCount.name}
                            </Text>

                        </TouchableOpacity>
                    ))
                }
            </View>
        )
    }
}

export default List

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: 3,
        backgroundColor: '#d9f9b1',
        alignItems: 'center',
    },
    text: {
        color: '#4f603c'
    }
})