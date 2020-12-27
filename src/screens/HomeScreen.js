import React from 'react';
import { View, FlatList, StyleSheet,Image , Text,TouchableHighlight } from 'react-native';
import ListItem from '../components/Listitem';
import {globalStyles,globalTextStyle } from '../styles/global'

class HomeScreen extends React.Component {

  _isMounted = false;

  constructor(props){
    super(props)

    this.state={
      DATA: false,
      isLoading: false
    }
  }

  componentDidMount(){
    this._isMounted = true;
    this.setState({
      isLoading: true
  });
  //Loads home products from api
    if (this._isMounted) {
      fetch('https://fr-en.openfoodfacts.org/category/pizzas.json')
      .then((response) => response.json())
      .then((json) => {
          this.setState({
            DATA: json.products
          })
      })
      .catch((error) => {
        console.error(error);
      })
    
      this.setState({
          isLoading: false
      })
    }

  };

  componentWillUnmount() {
    this._isMounted = false;
  }

  render(){
    return (
      <View >

        <Image
            style={globalStyles.photo }
            source={require("../../assets/Easyscan.png")}
        />
        <Text style={globalTextStyle.welcome}>Bienvenue sur EasyScan!</Text>
        <Text style={globalTextStyle.description}>
          EasyScan est une appli 100% indépendante qui vous aide à choisir les bons
          produits !
        </Text>
          <View
              style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 20
              }}
          >
              <TouchableHighlight
                  style={globalStyles.button}
                  onPress={() => navigation.navigate("")}
              >
                  <Text style={globalTextStyle.buttonText}>Suggestions Pizzas !</Text>
              </TouchableHighlight>
          </View>

      </View>
    );
  }

}

export default HomeScreen;