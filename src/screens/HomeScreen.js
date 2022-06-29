import { SafeAreaView, StyleSheet, Text, View } from "react-native"
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
        </SafeAreaView>
    )
} 

const style = StyleSheet.create({
    header: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
export default HomeScreen