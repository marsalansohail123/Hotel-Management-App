import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import COLORS from "./Color";

const CategoryList = () => {
    const categories = ['All', 'Popular', 'Top Rated', 'Features', 'Luxury'];
    const [selectedCategoryIndex, setSelectedCategoryIndex] = useState("");
    return (
        <View style={styles.categoryListContainer}>
            {categories.map((item, index) => (
                <TouchableOpacity key={index} activeOpacity={0.8} onPress={() => setSelectedCategoryIndex(index)}>
                    <View>
                        <Text style={{
                            ...styles.categoryListText,
                            color:
                                selectedCategoryIndex == index ? COLORS.primary : COLORS.grey,
                        }}>
                            {item}
                        </Text>
                        {selectedCategoryIndex == index && (
                            <View
                                style={{
                                    height: 3,
                                    width: 30,
                                    backgroundColor: COLORS.primary,
                                    marginTop: 2,
                                }}
                            />
                        )}
                    </View>
                </TouchableOpacity>
            ))
            }
        </View >
    )
}

const styles = StyleSheet.create({
    categoryListContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 30,
    },
    categoryListText: {
        fontSize: 17,
        fontWeight: 'bold'
    }
})

export default CategoryList;