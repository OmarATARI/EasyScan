import React from 'react';
import { View, Image } from 'react-native';
import { Text } from 'react-native-elements';

function Autre({ route }) {

  const { additives_tags, allergens } = route.params.item;
    return (
      <View style={{flex: 1 , flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ alignContent: 'center', padding: 50}} h1>Additifs:</Text>
        { additives_tags && additives_tags.length > 0? additives_tags.map( (additif) => <Text style={{ alignContent: 'center'}} h4>{additif}</Text>) : <Text h4>N/A</Text> }

        <Text style={{ alignContent: 'center', padding: 50}} h1>Allergens:</Text>
        { console.log(allergens) }
        <Text style={{padding: 50}} h4>{ allergens? allergens : 'N/A' }</Text>
      </View>
    );
  }

  export default Autre;