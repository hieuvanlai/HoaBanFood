import React, {Component} from 'react'
import {
    TouchableOpacity, View, Image, Text, StyleSheet, FlatList
} from "react-native"
import {List, Item, Right, Input} from 'native-base';
import Icons from 'react-native-vector-icons/dist/Feather'
import IconsClose from 'react-native-vector-icons/dist/MaterialCommunityIcons'
import {COLOR_PRIME} from "../../component/const";
import ListItems from '../../component/ListItem'


export class SearchLeafletsScreen extends Component {



    render() {
        let a = [{title: "List Shop", id: 1,key:1}]


        return (
            <View>
                <View style={{backgroundColor: COLOR_PRIME,padding:5}}>
                    <View style={{backgroundColor:'white',borderRadius:2,padding:2}}>
                        <View
                            style={{height: 40,flexDirection:'row',alignItems:'center'}}>
                            <Icons name="search" size={25} color="black"/>
                            <Input placeholder='Enter key' placeholderTextColor="black" style={{color: "black"}}/>
                            <IconsClose name="close" size={30} color="black"/>
                        </View>
                    </View>

                </View>

                <ListItems data={a} onPress={()=>{

                }}/>
            </View>
        )
    }
}