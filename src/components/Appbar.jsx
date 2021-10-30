import React from "react";
import { View, StyleSheet, ScrollView, Text, Pressable } from 'react-native';
import Constants from 'expo-constants';
import theme from "../theme";
import AppBarTab from "./AppBarTab";
import { Link } from "react-router-native";
import { useApolloClient, useQuery } from "@apollo/client";
import { AUTHORIZE_USER } from "../graphql/queries";
import useAuthStorage from "../hooks/useAuthStorage";

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
    const { loading, error, data } = useQuery(AUTHORIZE_USER, { fetchPolicy: 'cache-and-network' });
    const apolloClient = useApolloClient();
    const authStorage = useAuthStorage();

    const logout = async () => {
        await authStorage.removeAccessToken();
        apolloClient.resetStore();
    };

    if (loading) {
        return (
            <View style={styles.flexContainer}>
                <Text>Loading...</Text>
            </View>
        )
    }

    if (data.authorizedUser !== null) {
        return (
            <View style={styles.flexContainer}>
                <ScrollView horizontal>
                    <Link to='/'>
                        <AppBarTab title='Repositories' />
                    </Link>
                    <Pressable onPress={logout}>
                        <AppBarTab title='Sign out' />
                    </Pressable>
                </ScrollView>
            </View>
        );
    }

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