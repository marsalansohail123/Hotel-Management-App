import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import COLORS from './Color';
const { width } = Dimensions.get('screen');
const cardWidth = width / 1.8;
import Icon from 'react-native-vector-icons/MaterialIcons'

const Card = ({ hotel, nav }) => {
    // console.log(navigate)
    const navigation = () => {
        nav.navigate('Detail', hotel)
    }
    return (
        <View style={{ ...styles.card }}>
            <TouchableOpacity onPress={navigation}>
                <View style={styles.priceTag}>
                    <Text style={{ color: COLORS.white, fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>${hotel.price}</Text>
                </View>
                <Image source={hotel.image} style={styles.cardImage} />
                <View style={styles.cardDetails}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>
                            <Text style={{ fontWeight: 'bold', fontSize: 17 }}>{hotel.name}</Text>
                            <Text style={{ color: COLORS.grey, fontSize: 14, marginTop: 10 }}><Icon style={{ fontSize: 14, color: COLORS.primary }} name='place' />{hotel.location}</Text>
                        </View>
                    </View>
                </View>
                <Text style={{ fontSize: 10, marginTop: '47%', textAlign: 'center' }}>Tap For Detail.</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        height: '100%',
        width: cardWidth,
        elevation: 15,
        marginRight: 20,
        borderRadius: 15,
        backgroundColor: COLORS.white
    },
    cardImage: {
        height: 200,
        width: '100%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    priceTag: {
        height: 60,
        width: 80,
        backgroundColor: COLORS.primary,
        position: 'absolute',
        zIndex: 1,
        right: 0,
        // borderTopRightRadius: 15,
        // borderTopLeftRadius: 15,
        borderRadius: 8,
        justifyContent: 'center',
        alignContent: 'center',
    },
    cardDetails: {
        height: 105,
        borderRadius: 8,
        backgroundColor: COLORS.secondary,
        position: 'absolute',
        bottom: 15,
        padding: 15,
        width: '100%',
    },
})

export default Card;