import React, { Component } from 'react'
import {
    TouchableOpacity, View, Image, Text, StyleSheet, FlatList
} from "react-native"
import {  List ,Item,Right} from 'native-base';
import Icons from 'react-native-vector-icons/dist/MaterialCommunityIcons'


export default class ListItem extends Component{
    constructor(props){
        super(props);
        if(this.props.size){
            this.state={
                size:this.props.size
            }
        }else{
            this.state={
                size:55
            }
        }

    }
    _renderItem = ({item}) => (
        <Item style={{height: 55, padding: 5}} onPress={() => {
            if(this.props.onPress){
                this.props.onPress(item)
            }
        }}>
            <Text>{item.title}</Text>
            <Right>
                <Icons name="chevron-right" size={30} style={{marginLeft: 7}} color="black"/>
            </Right>
        </Item>
    );


    render(){
        return(
            <FlatList
                data={this.props.data}
                extraData={this.state}
                keyExtractor={(x,i)=>i}
                renderItem={this._renderItem}
            />
        )
    }
}