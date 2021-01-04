import React from 'react';
import { View, FlatList } from 'react-native';
import ListItem from '../components/Listitem';
import AsyncStorage from '@react-native-community/async-storage';
import { getProductsHistory, clearHistory } from '../utils/database'
import {globalTextStyle } from '../styles/global'

class HistoryScreen extends React.Component {

  _isMounted = false;

  constructor(props){
    super(props)

    this.state={
      DATA: [],
      isLoading: false
    }
  }

  componentDidMount(){
    this._isMounted = true;
    this.setState({
      isLoading: true
  })

    if (this._isMounted) {
      //this.getProductsFromHistory();
      //clearHistory()
      getProductsHistory(this.getProductsFromHistory)
			//this.getScans();
      this.setState({
          isLoading: false
      })
    }
  };

  componentWillUnmount() {
    this._isMounted = false;
  }

	async getScannedKeys() {
		try {
			const scans = await AsyncStorage.getAllKeys();
			return scans
		} catch (error) {
			 console.error(`error when getting products ids: ${error}`)
		}
  }
  
  getProductsFromHistory = (products) => {
    try{
      products.map(product => { 
        console.log(product)
        this.setState({
          DATA: [...this.state.DATA, product]
        })
      })
      console.log(this.state.DATA)
    } catch(error) {
      console.log(`An error occured when getting products from history: ${error}`)
    }
  }

	async getScans() {
		try {
			let product_keys = await this.getScannedKeys();
			product_keys.map( async (id_product) => {
        let current_item = await AsyncStorage.getItem(id_product);
        console.log(current_item)
				// this.setState({
				// 	DATA: [...this.state.DATA, JSON.parse(current_item)]
				// })
			})
		} catch (error) {
			 console.error(`error when getting products ids: ${error}`)
		}
	}

  render(){
    return (
      <View style={globalTextStyle.history}>
        <FlatList
          data={this.state.DATA}
          renderItem={ ({ item }) => <ListItem item={item} navigation={this.props.navigation} />}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  }

}

export default HistoryScreen;
