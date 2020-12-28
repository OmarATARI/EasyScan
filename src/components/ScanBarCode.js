import React, { useState, useEffect } from 'react';
import { Button, Text, View, StyleSheet, Vibration } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { BarCodeScanner } from 'expo-barcode-scanner';


function ScanBarCode({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.error(`error saving the product in history: ${error}`)
    }
  };

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    Vibration.vibrate()

    fetch(`https://world.openfoodfacts.org/api/v0/product/${data}.json`)
      .then((response) => response.json())
      .then((json) => {
        if (json.status_verbose === 'product found'){
          storeData(json.product._id, JSON.stringify(json.product))
          navigation.navigate('Product',
          {
            item: json.product
          })
        }
        else alert('Product not found')

      })
      .catch((error) => {
        console.error(error);
      });
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      {scanned && <Button title={'Scannez votre code'} onPress={() => setScanned(false)} />}
    </View>
  );
}

export default ScanBarCode;
