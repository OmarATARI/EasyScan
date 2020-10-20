import React, { useState } from 'react';
import { View } from 'react-native';
import { ButtonGroup, Text } from 'react-native-elements';
import General from '../components/Product/General';
import GeneralProductView from '../components/Product/GeneralProductView';
import Ingredients from '../components/Product/Ingredients';
import Autre from '../components/Product/Autre';

function ProductScreen({ route }) {
  const [selectedIndex, updateIndex] = useState(0);
  const buttons = ['Général', 'Ingrédients', 'Autre']

  return (
    <View>
      <ButtonGroup
        onPress={updateIndex}
        selectedIndex={selectedIndex}
        buttons={buttons}
        containerStyle={{
          height: 75
          }} />

        <View>
          { selectedIndex === 0 ? <GeneralProductView route={route}/> : false }
          { selectedIndex === 1 ? <Ingredients route={route}/> : false }
          { selectedIndex === 2 ? <Autre route={route}/> : false }
        </View>
    </View>
  )
}

export default ProductScreen;
