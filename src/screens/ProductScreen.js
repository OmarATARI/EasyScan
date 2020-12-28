import React, { useState } from 'react';
import { View } from 'react-native';
import { ButtonGroup, Text } from 'react-native-elements';
import General from '../components/Product/General';
import Ingredients from '../components/Product/Ingredients';
import Autre from '../components/Product/Autre';
import Defaults from '../components/Product/Defaults';
import Qualite from '../components/Product/Qualite';

function ProductScreen({ route }) {
  const [selectedIndex, updateIndex] = useState(0);
  const buttons = ['Général', 'Ingrédients','Qualite', 'Defaults', 'Autre']

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
          { selectedIndex === 0 ? <General route={route}/> : false }
          { selectedIndex === 1 ? <Ingredients route={route}/> : false }
          { selectedIndex === 2 ? <Qualite route={route}/> : false }
          { selectedIndex === 3 ? <Defaults route={route}/> : false }
          { selectedIndex === 4 ? <Autre route={route}/> : false }
        </View>
    </View>
  )
}

export default ProductScreen;