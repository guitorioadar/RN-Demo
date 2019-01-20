import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.redbox}/>
            <View style={styles.greenbox}/>
            <View style={styles.bluebox}/>
        </View>
    )
}

export default Home