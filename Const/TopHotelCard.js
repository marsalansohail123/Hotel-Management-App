import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import COLORS from './Color';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TopHotelCard = ({ hotel }) => {
    return (
        <>
            <View style={styles.topHotelCard}>
                <TouchableOpacity>
                    <View style={{ position: 'absolute', top: 5, right: 5, zIndex: 1, flexDirection: 'row' }}>
                        <Icon name="star" size={15} color={COLORS.orange} />
                        <Text style={{ color: COLORS.white, fontWeight: 'bold', fontSize: 15 }}>
                            {hotel.star}
                        </Text>
                    </View>
                    <Image source={hotel.image} style={styles.topHotelCardImage} />
                    <View style={{ paddingVertical: 5, paddingHorizontal: 10, backgroundColor: COLORS.secondary }}>
                        <Text style={{ fontSize: 10, fontWeight: 'bold' }}>{hotel.name}</Text>
                        <Text style={{ fontSize: 7, fontWeight: 'bold', color: COLORS.grey, marginTop: 2 }}>{hotel.location}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </>
    )
};

const styles = StyleSheet.create({
    topHotelCard: {
        height: '100%',
        width: 120,
        backgroundColor: COLORS.white,
        elevation: 15,
        marginHorizontal: 10,
        borderRadius: 10,
    },
    topHotelCardImage: {
        height: 80,
        width: '100%',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    }
});

export default TopHotelCard;