import React from 'react';
import { View, Image } from 'react-native';
import { Text } from 'react-native-elements';
import {globalStyles,globalTextStyle } from '../../styles/global';

function Autre({ route }) {

  const { additives_tags, allergens } = route.params.item;
    return (
      <View style={globalStyles.productContainer}>
        <Text style={globalStyles.paddingCenter} h1>Additifs:</Text>
        { additives_tags && additives_tags.length > 0? additives_tags.map( (additif, id) => <Text key={id} style={{ fontSize : 16}} >{additif}</Text> ) : <Text h4>N/A</Text> }

        <Text style={globalStyles.paddingCenter} h1>Allergens:</Text>
        <Text style={{fontSize : 16 }}>{ allergens? allergens : 'N/A' }</Text>

      </View>
    );
  }

  export default Autre;