import React from 'react';
import { View, FlatList, Text, AsyncStorage } from 'react-native';
import ListItem from '../components/Listitem';

function HistoryScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       <FlatList
        data={retrieveScans()}
        renderItem={ ({ item }) => <ListItem item={item} navigation={navigation} />}
        keyExtractor={item => item._id}
      />
      <Text>Salut</Text>
   </View>
  );
}

async function retrieveScans(){
  try {
    const scans = await AsyncStorage.getAllKeys();
    //await AsyncStorage.removeItem('3596710386512');
    //await AsyncStorage.removeItem('5000112611878');
    console.log(`getAllKeys: ${scans}`)

    let rendu = scans.map( async (id_product) => await AsyncStorage.getItem(id_product.toString())) // return promise with non attended data
    //let rendu = await AsyncStorage.getItem('3596710386512'); //returns the good object
    //scans.map( async (id_product) => console.log(id_product.toString()) )
    console.log(`Rendu: ${JSON.stringify(rendu)}`)
  } catch (error) {
     console.error(`error when getting products stored: ${error}`)
  }
};

export default HistoryScreen;