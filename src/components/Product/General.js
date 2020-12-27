import React from 'react';
import { View, Image } from 'react-native';
import { Text } from 'react-native-elements';
import {globalStyles, globalTextStyle} from "../../styles/global";
import {getColorScore} from "../../function/product";


function General({ route }) {

  const { product_name_fr, image_front_url, quantity, nutriscore_grade,rev } = route.params.item;
    return (
      
      <View style={globalStyles.productContainer}>

        <Text style={{ alignContent: 'center'}} h2>{ product_name_fr }</Text>
        <Text style={{ padding: 10 }} h4>{ quantity? `Quantité: ${quantity}` : `Quantité: N/A` }</Text>
        <Image
          source={{ uri: image_front_url }}
          style={{ flex: 0, width: 200, height: 200}}
          />
          <Text style={[ globalTextStyle.description,
              {color: getColorScore(nutriscore_grade)}]}>
              La nutriScore est de {rev}/100
          </Text>

      </View>
    );
  }

  export default General;