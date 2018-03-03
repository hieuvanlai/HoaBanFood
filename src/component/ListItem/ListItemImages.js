import React, { Component } from 'react'
import {
    TouchableOpacity, View, Image, StyleSheet, FlatList,Text
} from "react-native"
import {  List ,Item,Right,ListItem,Thumbnail,Body} from 'native-base';
import Icons from 'react-native-vector-icons/dist/MaterialCommunityIcons'
import {COLOR_PRIME} from "../const";


export  class ListItemImages extends Component{
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
        <View>

                <Item  style={{height:100,paddingLeft:5}} onPress={()=>{
                    if(this.props.onPress){
                        this.props.onPress(item)
                    }
                }}>
                    <Thumbnail large square  style={{flex:2}}  source={{ uri: 'https://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-9/26047305_1176609569141393_2268166410566187820_n.jpg?oh=02d62425fa76300899d35e1216b5b675&oe=5B136FC7' }} />
                    <View style={{padding:5,flex:5}}>
                    <Text style={{color:COLOR_PRIME,flex:1}}>{item.date}</Text>
                    <Text style={{flex:4}} note ellipsizeMode={'tail'} numberOfLines={5}>{item.title}</Text>
                    </View>
                    <Right style={{flex:1}}>
                        <Icons name="chevron-right" size={30} style={{marginLeft: 7}} color="black"/>
                    </Right>

                </Item>

        </View>

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