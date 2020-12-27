import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ListItem from '../components/Listitem';

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
  })
    

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
      <View>
        <FlatList
          data={this.state.DATA}
          renderItem={ ({ item }) => <ListItem item={item} navigation={this.props.navigation} />}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }

}

export default HomeScreen;