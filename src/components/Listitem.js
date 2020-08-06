import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class ListItem extends React.Component{
    goTo(item){
        this.props.navigation.navigate('Product',
        {
            item: item
        })
    }

    render(){
        return(
            // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={styles.line}>
                <TouchableOpacity
                    onPress={ () => this.goTo(this.props.item) }
                >
                    <Text>{this.props.item.product_name_fr}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    line:{
        padding: 10,
        height: 40
    }
})

export default ListItem;