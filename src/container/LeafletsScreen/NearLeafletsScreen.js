import React, { Component } from 'react'
import {
    TouchableOpacity, View, Image, Text, StyleSheet
} from "react-native"
import {  List ,Item,Right} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import ListItem from '../../component/ListItem'

export  class NearLeafletsScreen extends Component{
    render(){
        let a = [{title:"List Shop",id:1}]

        return(
            <View>

                <ListItem data={a}/>

            </View>
        )
    }
}