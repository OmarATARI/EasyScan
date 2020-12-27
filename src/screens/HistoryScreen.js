import React from 'react';
import { View, FlatList } from 'react-native';
import ListItem from '../components/Listitem';
import AsyncStorage from '@react-native-community/async-storage';

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
			this.getScans();
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

	async getScans() {
		try {
			let product_keys = await this.getScannedKeys();
			product_keys.map( async (id_product) => {
				let current_item = await AsyncStorage.getItem(id_product);
				this.setState({
					DATA: [...this.state.DATA, JSON.parse(current_item)]
				}, () => console.log(this.state.DATA)) //console.log fires before async tasks, hence the second callback arg in setState
			})
		} catch (error) {
			 console.error(`error when getting products ids: ${error}`)
		}
	}

  render(){
    return (
      <View style={{flex: 1 , flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <FlatList
          data={this.state.DATA}
          renderItem={ ({ item }) => <ListItem item={item} navigation={this.props.navigation} />}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }

}

export default HistoryScreen;
