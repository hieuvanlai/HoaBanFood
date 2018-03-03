import React, { Component } from 'react'
import {
    TouchableOpacity, View, Image, Text, StyleSheet
} from "react-native"
import {  List ,Item,Right} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ListItemImages} from '../../component/ListItem/ListItemImages'

export default class Notifications extends Component{
    render(){
        let a = [{title:"List Shop dasdasd  dasdasdsd dasdasdasd asdasdadasdasd adsdasdasdasdada",id:1,date:'20/1/2017'},{title:"List sdasd asdasdaudu u asdasdad  asdasdasdad a ádasdShop 2",id:2,date:'20/1/2017'}]

        return(
            <View>

                <ListItemImages data={a}/>

            </View>
        )
    }
}