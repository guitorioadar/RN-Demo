import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import List from "./List";
import Inputs from "./Inputs";
import ScrollViewExample from "./ScrollViewExample";
import PersonList from "./PersonList";
import axiosVariable from "axios";
import JSONWithHeaders from "./JSONWithHeaders";

const App = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.containerMain}>
                <View style={styles.container}>
                    <View style={styles.redbox}/>
                    <View style={styles.greenbox}/>
                    <View style={styles.bluebox}/>
                </View>

                <List/>
                <Text>Input</Text>
                <Inputs/>
                <Text>Json WIth Header</Text>
                <JSONWithHeaders/>
                <Text>Person List</Text>
                <PersonList/>
                <Text>Scroll View</Text>
                <ScrollViewExample/>

            </View>

        </ScrollView>
    )
}

export default App

const styles = StyleSheet.create({

    containerMain: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'stretch',
        alignContent: 'center',
        padding: 10
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        marginTop: 55,
        elevation: 1,
        marginBottom: 10
    },
    redbox: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
    },
    greenbox: {
        width: 100,
        height: 100,
        backgroundColor: 'green'
    },
    bluebox: {
        width: 100,
        height: 100,
        backgroundColor: 'blue'
    },
})