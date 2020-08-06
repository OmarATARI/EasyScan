import React from 'react';
import { Text, View, Image } from 'react-native';

function ProductScreen({ route }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{route.params.item.product_name_fr}</Text>
      <Image
        source={{ uri: route.params.item.image_front_url }}
        style={{ width: 200, height: 200 }}
        />
    </View>
  );
}

export default ProductScreen;