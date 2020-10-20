import React, { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

function General({ route }) {

  const { _id, product_name_fr, image_front_url, quantity } = route.params.item;
	const [favorite, setFavorite] = useState(false);
	const onPress = () => setFavorite(state => !state)
	const storeData = async (key, value) => {
		try {
			await AsyncStorage.setItem(key, value);
		} catch (error) {
			console.error(`error saving the product: ${error}`)
		}
	};

    return (

      <View style={{flex: 1 , flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>

        <Text style={{ alignContent: 'center'}} h2>{ product_name_fr }</Text>
        <Text style={{ padding: 10 }} h4>{ quantity? `Quantité: ${quantity}` : `Quantité: N/A` }</Text>
        <Image
          source={{ uri: image_front_url }}
          style={{ flex: 0, width: 200, height: 200}}
          />

					<View>
						<TouchableOpacity
							style={styles.button}
							onPress={onPress}
						>
							{favorite? <Icon name="heart" type="antdesign" />  : <Icon name="hearto" type="antdesign" />}
							{favorite?  storeData(`Fav-${_id}`, JSON.stringify(route.params.item)) : false}
						</TouchableOpacity>
					</View>
      </View>
    );
  }

  export default General;
