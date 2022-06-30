import { useState } from "react";
import { Dimensions, FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from "react-native"
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from "../data/colors"
import plants from "../data/plants";

const width = Dimensions.get('screen').width/2 - 30

const HomeScreen = ({navigation}) => {
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

    const Card = ({plant}) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('Details', plant)}>
                <View style={style.card}>
                    <View style={{alignItems: 'flex-end'}}>
                        <View style={{
                            width: 30,
                            height: 30,
                            borderRadius: 15,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: plant.like? 'rgba(245, 42, 42, .2)': 'rgba(0, 0, 0, 0.2)'
                        }}>
                            <Icon name="favorite" size={18} color={ plant.like? COLORS.red: COLORS.dark}/>
                        </View>                
                    </View>
                    <View style={{ height: 100, alignItems: 'center'}}>
                        <Image style={{ flex: 1, resizeMode: 'contain'}} source={plant.img}/>
                    </View>
                    <Text style={{ fontWeight: 'bold', fontSize: 17, marginTop: 10}}>{plant.name}</Text>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 5
                    }}>
                        <Text style={{ fontSize: 19, fontWeight: 'bold'}}>${plant.price}</Text>
                        <View style={{
                            height: 25,
                            width: 25,
                            backgroundColor: COLORS.green,
                            borderRadius: 5,
                            justifyContent: 'center',
                            alignItems: 'center',
                            alignContent: 'center'
                        }}>
                            <Text style={{ fontSize: 22, color: COLORS.white, fontWeight: 'bold'}}>+</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
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
            <FlatList 
                columnWrapperStyle={{justifyContent: 'space-between'}}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    marginTop: 10,
                    paddingBottom: 50
                }}
                numColumns={2} data={plants} 
                renderItem={({item}) => <Card plant={item}/>}/>
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
    },
    card: {
        height: 255,
        backgroundColor: COLORS.light,
        width,
        marginHorizontal: 2,
        borderRadius: 10,
        marginBottom: 20,
        padding: 15,
    }
})
export default HomeScreen