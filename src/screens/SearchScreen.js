
import React from 'react'
import { View, TextInput, Button, StyleSheet, Text, FlatList, ActivityIndicator } from 'react-native'
import {globalStyles,globalTextStyle } from '../styles/global'
import { connect } from 'react-redux'

export function getProduitsFromApiWithSearchedText (text) {
    const url = 'https://world.openfoodfacts.org/api/v0/product/' + text
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            produits: [],
            isLoading: false,
        }
        this.searchedText = ""
    }

    _loadProduits() {
        console.log(this.state.searchedText)
        if (this.searchedText.length > 0) {
            this.setState({ isLoading: true })
            getProduitsFromApiWithSearchedText(this.searchedText).then(data => {
                this.setState({
                    produits: data.product,
                    isLoading: false
                })
            })
        }
    }

    _searchTextInputChanged(text) {
        this.searchedText =  text
    }

    _displayLoading() {
        if (this.state.isLoading) {
            return (
                <View style={styles.loading_container}>
                    <ActivityIndicator size='large' />
                </View>
            )
        }
    }

    _displayDetailForProduit = (item) => {
        console.log("Display produit with id " + item)
        this.props.navigation.navigate('Product', { item: item})
    }


    componentDidMount(){
        this._isMounted = true;
        this.setState({
            isLoading: true
        })

        if (this._isMounted) {
            this.setState({
                isLoading: false
            })
        }
    };

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <View style={globalTextStyle.main_container}>
                <TextInput
                    style={globalTextStyle.textinput}
                    placeholder='Rechercher'
                    onChangeText={(text) => this._searchTextInputChanged(text)}
                    onSubmitEditing={() => this._loadProduits()}
                />
                <Button title='Rechercher' onPress={() => this._loadProduits()}/>

            </View>
        )
    }
}



export default Search;