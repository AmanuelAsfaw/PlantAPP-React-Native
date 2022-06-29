import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native"
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from "../data/colors"

const HomeScreen = () => {
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
    }
})
export default HomeScreen