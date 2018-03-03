import React, { Component } from 'react'
import {
    TouchableOpacity, View, Image, Text, StyleSheet
} from "react-native"
import {  List ,Item,Right} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import ListItem from '../../component/ListItem'

export default class Setting extends Component{
    render(){
        let a = [{title:"Instructions for use",id:1},{title:"Login",id:2}]
        return(
            <View>
                <ListItem data={a} onPress={(item)=>{
                    if(item.id==2){
                        this.props.navigation.navigate('Login')
                    }
                    if(item.id==1){
                        this.props.navigation.navigate('Instructions')
                    }
                }}/>
            </View>
        )
    }
}