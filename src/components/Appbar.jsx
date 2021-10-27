import React from "react";
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import Constants from 'expo-constants';
import theme from "../theme";
import AppBarTab from "./AppBarTab";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.appBar
    },
    flexContainer: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.appBar,
        flexDirection: 'row'
    }
});

const AppBar = () => {
    return (
        <View style={styles.flexContainer}>
            <ScrollView horizontal>
                <Link to='/'>
                    <AppBarTab title='Repositories' />
                </Link>
                <Link to='/signin'>
                    <AppBarTab title='Sign In' />
                </Link>
            </ScrollView>
        </View>
    );
};

export default AppBar;