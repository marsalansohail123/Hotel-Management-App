import React from 'react'
import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import CategoryList from '../Const/CategoryList';
import Card from '../Const/Card';
import COLORS from '../Const/Color';
import Api from '../Const/RoomApi'
import TopHotelApi from '../Const/TopHotelApi'
import TopHotelCard from '../Const/TopHotelCard';

const HomeScreen = ({ navigation }) => {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <View style={styles.header}>
                <View style={{ paddingBottom: 15 }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
                        Find Your Hotel
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>in </Text>
                        <Text style={{ fontSize: 30, fontWeight: 'bold', color: COLORS.primary }}>Paris</Text>
                    </View>
                </View>
                <Icon name='person' size={38} color={COLORS.grey} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.searchInputContainer}>
                    <Icon name='search' size={30} style={{ marginLeft: 20 }} />
                    <TextInput
                        placeholder='Search Your Hotel'
                        style={{ fontSize: 20, paddingLeft: 10 }}
                    />
                </View>
                <CategoryList />
                <View>
                    <FlatList
                        horizontal
                        data={Api}
                        contentContainerStyle={{ paddingVertical: 30, paddingLeft: 20 }}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => <Card hotel={item} nav={navigation} />}
                    />
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: 20,
                }}>
                    <Text style={{ fontWeight: 'bold', color: COLORS.grey }}>
                        Top Hotels
                    </Text>
                    <Text style={{ color: COLORS.grey }}>
                        Show All
                    </Text>
                </View>

                <FlatList
                    data={TopHotelApi}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingLeft: 20,
                        marginTop: 20,
                        paddingBottom: 30,
                    }}
                    renderItem={({ item }) => <TopHotelCard hotel={item} />}
                />

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    searchInputContainer: {
        height: 50,
        backgroundColor: COLORS.secondary,
        marginTop: 15,
        marginLeft: 20,
        marginRight: 20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
})

export default HomeScreen;