import React, { useState } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

function FavoritesScreen({ route }) {

	const favKeys = async () => {

	  let values
	  try {
	    values = await AsyncStorage.multiGet(['^Fav-'])
	  } catch(e) {
	    // read error
	  }
	  console.log(values)
		alert(values? values : 'tableau vide')
	}

  return (
		<View style={{flex: 1 , flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
			<Text style={{padding: 50}} h4> Mes produits favoris ! </Text>
			{favKeys}
		</View>
  )
}

export default FavoritesScreen;
