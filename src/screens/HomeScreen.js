import React from 'react';
import { View, Image , Text } from 'react-native';
import { globalStyles,globalTextStyle } from '../styles/global'
import { initDatabase } from '../utils/database'

class HomeScreen extends React.Component {

  constructor(props){
    super(props)


    initDatabase()
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
  
  this.setState({
      isLoading: false
    });
  }

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
          </View>

      </View>
    );
  }

}

export default HomeScreen;