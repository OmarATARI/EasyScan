import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function ListItem( { navigation, item }){
    function goTo(item){
        navigation.navigate('Product',
        {
            item: item
        })
    }

    return(
        // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={styles.line}>
            <TouchableOpacity>
                onPress={ () => goTo(item) }
                <Text>{item.product_name_fr}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    line:{
        padding: 10,
        height: 40
    }
})