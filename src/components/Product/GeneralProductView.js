import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

class GeneralProductView extends React.Component {

  _isMounted = false;

  constructor(props){
    super(props)

    this.state={
      isFavorite: false,
      isLoading: false
    }
  }

  componentDidMount(){
    this._isMounted = true;
    this.setState({
      isLoading: true
  })
		this.state.isFavorite?  this.storeData(`Fav-${this.props.route.params.item._id}`, JSON.stringify(this.props.route.params.item)) : false

    if (this._isMounted) {
      this.setState({
          isLoading: false
      })
    }
  };

  componentWillUnmount() {
    this._isMounted = false;
  }

	onPress = () => {
		this.setState({
			isFavorite: !this.state.isFavorite
		})
	}

	async storeData(key, value){
		try {
			await AsyncStorage.setItem(key, value);
		} catch (error) {
			console.error(`error saving the product: ${error}`)
		}
	};


  render(){
    return (
			<View style={styles.view}>

        <Text style={{ alignContent: 'center'}} h2>{ this.props.route.params.item.product_name_fr }</Text>
        <Text style={{ padding: 10 }} h4>{ this.props.route.params.quantity? `Quantité: ${this.props.route.params.item.quantity}` : `Quantité: N/A` }</Text>
        <Image
          source={{ uri: this.props.route.params.item.image_front_url }}
          style={{ flex: 0, width: 200, height: 200}}
          />

					<View>
						<TouchableOpacity
							style={styles.button}
							onPress={this.onPress}
						>
							{this.state.isFavorite? <Icon name="heart" type="antdesign" />  : <Icon name="hearto" type="antdesign" />}
							{ alert(this.state.isFavorite) }
						</TouchableOpacity>
					</View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
view: {
	flex: 1 ,
	flexDirection: 'column',
	justifyContent: 'space-between',
	alignItems: 'center',
	position: 'absolute'
},
button: {
	alignItems: "center",
	backgroundColor: "#DDDDDD",
	padding: 10
}
});

export default GeneralProductView;
