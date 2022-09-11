import React from 'react'
import { View, Text, ScrollView, ImageBackground, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import COLORS from '../Const/Color';
import Icon from 'react-native-vector-icons/MaterialIcons'

const DetailedScreen = ({ navigation, route }) => {
    const item = route.params;
    // console.log(item);
    const work = () => {
        alert("Work in progress :(")
    }
    return (
        <>
            <ScrollView
                contentContainerStyle={{
                    backgroundColor: COLORS.white,
                    paddingBottom: 20,
                }}>
                <StatusBar
                    barStyle='light-content'
                    translucent
                    backgroundColor="rgba(0,0,0,0)"
                />
                <ImageBackground style={styles.headerImage} source={item.image}>
                    <View style={styles.header}>
                        <Icon name='west' size={28} color={COLORS.white} onPress={() => navigation.navigate("Home")} />
                    </View>
                </ImageBackground>
                <View>
                    <View style={styles.iconContainer}>
                        <Icon name='place' color={COLORS.white} size={28} />
                    </View>
                    <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.name}</Text>
                        <Text style={{ fontSize: 12, fontWeight: '400', color: COLORS.grey, marginTop: 5 }}>{item.location}</Text>

                        <View style={{ marginTop: 20 }}>
                            <Text style={{ textAlign: 'justify', lineHeight: 20, color: COLORS.grey }}>
                                {item.details}
                            </Text>
                        </View>
                    </View>
                    <View style={{
                        marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 20, alignItems: 'center'
                    }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Price Per Night</Text>
                        <View style={{ ...styles.priceTag }}>
                            <Text style={{ fontSize: 22, fontWeight: 'bold', color: COLORS.grey, marginLeft: 8 }}>
                                ${item.price}
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => alert("Work in progress :(")}>
                        <View style={styles.btn}>
                            <Text style={{ color: COLORS.white, fontSize: 18, fontWeight: 'bold' }}>Book Now</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    headerImage: {
        height: 400,
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
        overflow: 'hidden',
    },
    header: {
        marginTop: 40,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        justifyContent: 'space-between',
    },
    iconContainer: {
        position: 'absolute',
        height: 60,
        width: 60,
        backgroundColor: COLORS.primary,
        top: -40,
        right: 20,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    priceTag: {
        height: 40,
        alignItems: 'center',
        marginLeft: 40,
        paddingLeft: 20,
        flex: 1,
        backgroundColor: COLORS.secondary,
        borderRadius: 20,
        flexDirection: 'row'
    },
    btn: {
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        backgroundColor: COLORS.primary,
        marginHorizontal: 20,
        borderRadius: 10
    }
})

export default DetailedScreen;