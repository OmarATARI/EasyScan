import React from 'react';
import { View, Image } from 'react-native';
import { Text } from 'react-native-elements';


function General({ route }) {

  const { product_name_fr, image_front_url, quantity } = route.params.item;
    return (
      
      <View style={{flex: 1 , flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
        
        <Text style={{ alignContent: 'center'}} h2>{ product_name_fr }</Text>
        <Text style={{ padding: 10 }} h4>{ quantity? `Quantité: ${quantity}` : `Quantité: N/A` }</Text>
        <Image
          source={{ uri: image_front_url }}
          style={{ flex: 0, width: 200, height: 200}}
          />

      </View>
    );
  }

  export default General;