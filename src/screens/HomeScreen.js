import { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from "../data/colors"

const HomeScreen = () => {
    const categories = ['All', 'ORGANIC', 'INDOORS', 'SYNTHETIC', 'ORGANIC', 'INDOORS', 'SYNTHETIC']
    const [categoryIndex, setCategoryIndex] = useState(0)

    const CategoryList = () => {
        return (
            <View style={style.categoryContainer}>
                <ScrollView  horizontal={true} style={{flex: 1}}>  
                    {categories.map((item, index) => (
                        <TouchableOpacity key={index} onPress={() => setCategoryIndex(index)} activeOpacity={.8}>
                            <Text key={index} style={[style.categoryText, categoryIndex == index && style.categoryTextSelected]}>{item}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>  
            </View>
        )
    }
    return(
        <SafeAreaView style={{ flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white}}>
            <View style={style.header}>
                <View>
                    <Text style={{ fontSize: 25, fontWeight: 'bold'}}>Welcome To</Text>
                    <Text style={{ fontSize: 38, fontWeight: 'bold', color: COLORS.green}}>Plant Shop</Text>
                </View>
                <Icon name="shopping-cart" size={28}/>
            </View>
            <View style={{ marginTop: 30, flexDirection: 'row'}}>
                <View style={style.searchContainer}>
                    <Icon name="search" size={25} style={{ marginLeft: 20 }}/>
                    <TextInput placeholder="Search" style={ style.input}/>
                </View>
                <View style={style.sortBtn}>
                    <Icon name="sort" size={30} color={ COLORS.white}/>
                </View>
            </View>
            <CategoryList/>
        </SafeAreaView>
    )
} 

const style = StyleSheet.create({
    header: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    searchContainer: {
        height: 50,
        backgroundColor:COLORS.light,
        borderRadius: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    input : {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.dark,
        flex: 1
    },
    sortBtn: {
        marginLeft: 10,
        height: 50,
        width: 50,
        backgroundColor: COLORS.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    categoryContainer: {
        flexDirection: 'row',
        marginTop: 30,
        marginBottom: 20,
        // justifyContent: 'space-between'

    },
    categoryText: {
        paddingRight: 10,
        fontSize: 16,
        color: 'grey',
        fontWeight: 'bold'
    },
    categoryTextSelected: {
        color: COLORS.green,
        paddingBottom: 5,
        borderBottomWidth: 4,
        borderColor: COLORS.green
    }
})
export default HomeScreen