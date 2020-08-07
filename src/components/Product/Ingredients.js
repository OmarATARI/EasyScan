import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';


function Ingredients({ route }) {

  const { ingredients_text } = route.params.item;
    return (
      
      <View style={{flex: 1 , flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{padding: 50}} h4>{ ingredients_text? ingredients_text : 'N/A' }</Text>
      </View>
    );
  }

  export default Ingredients;