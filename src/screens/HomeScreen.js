import React, {useEffect} from 'react';
import { View, FlatList } from 'react-native';
import ListItem from '../components/Listitem';

class HomeScreen extends React.Component {

  constructor(props){
    super(props)

    this.state={
      DATA: false,
      isLoading: false
    }
  }

  componentDidMount(){
    this.setState({
        isLoading: true,
    })

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
        isLoading: false,
    })
  };

  render(){
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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