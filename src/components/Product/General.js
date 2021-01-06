import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import { globalStyles, globalTextStyle } from "../../styles/global";
import { getColorScore } from '../../styles/product';
import { setProductFavorite, getProductFavoriteState } from '../../utils/database'

function General({ route }) {

  const { _id, product_name_fr, image_front_url, quantity, nutriscore_grade,rev } = route.params.item;
  const [favorite, setFavorite] = useState(false);
  const setFavoriteState = (favoriteState) => {
    if(favoriteState[0]['is_favorite'] != favorite){
      setFavorite(_ => favoriteState[0]['is_favorite'])
    }
  }

  useEffect(() => {
    (() => {
      getProductFavoriteState(_id, setFavoriteState)
    })();
  }, [route]);

  const onPress = () => {
    setFavorite(state => !state)
    storeData(_id)
  }

	const storeData = (key) => {
		try {
      setProductFavorite(key, !favorite)
		} catch (error) {
			console.error(`error saving the product: ${error}`)
		}
  };
  
    return (
      
      <View style={globalStyles.productContainer}>
        <Text style={{ alignContent: 'center'}} h4>{ product_name_fr }</Text>
        <Text style={{ padding: 10 }} h4>{ quantity? `Quantité: ${quantity}` : `Quantité: N/A` }</Text>
        <Image
          source={{ uri: image_front_url }}
          style={{ flex: 0, width: 200, height: 200}}
          />
        <Text style={[ globalTextStyle.description,
            {color: getColorScore(nutriscore_grade)}]}>
            La nutriScore est de {rev}/100
        </Text>
        <TouchableOpacity
          style={{padding: 10, margin: 25, width: 100, height: 50}}
          onPress={onPress}
        >
          {favorite? <Icon name="heart" type="antdesign" />  : <Icon name="hearto" type="antdesign" />}
        </TouchableOpacity>
      </View>
    );
  }

  export default General;