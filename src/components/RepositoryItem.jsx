import React from "react";
import { View, StyleSheet, Image } from "react-native";
import theme from "../theme";
import Text from "./Text";

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: 'white'
    },
    tinyLogo: {
        width: 50,
        height: 50,
        borderRadius: 5,
        flexGrow: 0
    },
    flexContainer: {
        flexDirection: "row",
    },
    container2: {
        paddingStart: 15,
        paddingBottom: 15,
        
    },
    row: {
        paddingTop: 5,
        paddingBottom: 5,
        flexDirection: 'row',
    }
})

const RepositoryItem = ({ item }) => {
    return (
        <View style={styles.container}>
            <View style={styles.flexContainer}>
                <Image style={styles.tinyLogo} source={{ uri: item.ownerAvatarUrl }} />
                <View style={styles.container2}>
                    <View>
                        <Text fontWeight='bold' fontSize='subheading'>{item.fullName}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={{ marginEnd: 20 }}>{item.description}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={{ color: 'white', backgroundColor: theme.colors.primary, padding: 5, borderRadius: 5 }}>{item.language}</Text>
                    </View>
                </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <View style={{ flexGrow: 1}}>
                    <Text fontWeight='bold' style={{ textAlign: 'center'}}>{item.stargazersCount > 1000 ? `${(item.stargazersCount / 1000).toFixed(1)}k` : item.stargazersCount}</Text>
                    <Text style={{ textAlign: 'center', paddingTop: 5 }}>Stars</Text>
                </View>
                <View style={{ flexGrow: 1}}>
                    <Text fontWeight='bold' style={{ textAlign: 'center'}}>{item.forksCount > 1000 ? `${(item.forksCount / 1000).toFixed(1)}k` : item.forksCount}</Text>
                    <Text style={{ textAlign: 'center', paddingTop: 5 }}>Forks</Text>
                </View>
                <View style={{ flexGrow: 1}}>
                    <Text fontWeight='bold' style={{ textAlign: 'center'}}>{item.reviewCount > 1000 ? `${(item.reviewCount / 1000).toFixed(1)}k` : item.reviewCount}</Text>
                    <Text style={{ textAlign: 'center', paddingTop: 5 }}>Reviews</Text>
                </View>
                <View style={{ flexGrow: 1}}>
                    <Text fontWeight='bold' style={{ textAlign: 'center'}}>{item.ratingAverage > 1000 ? `${(item.ratingAverage / 1000).toFixed(1)}k` : item.ratingAverage}</Text>
                    <Text style={{ textAlign: 'center', paddingTop: 5 }}>Ratings</Text>
                </View>
            </View>
        </View>
    )
};

export default RepositoryItem;