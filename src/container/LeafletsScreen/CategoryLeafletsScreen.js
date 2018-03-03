import React, {Component} from 'react'
import {
    TouchableOpacity, View, Image, Text, StyleSheet, FlatList
} from "react-native"
import {List, Item, Right, Input} from 'native-base';
import Icons from 'react-native-vector-icons/dist/Feather'
import IconsClose from 'react-native-vector-icons/dist/MaterialCommunityIcons'
import {COLOR_PRIME} from "../../component/const";
import ListItems from '../../component/ListItem'


export class CategoryLeafletsScreen extends Component {


    render() {
        let a = [{title: "List Shop", id: 1,key:1}]
        let menu = [{title: "Shop1 ", id: 1},{title: "Shop2 ", id: 2}]
        let renderItem=menu.map((item,index)=>{
                return(
                    <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}
                                      onPress={()=>{
                                          if(this.props.onPress){
                                              this.props.onPress(item)
                                          }
                                      }}
                                      key={index}>
                        <Text  style={{color:'white',fontSize:17}}>{item.title}</Text>
                        <IconsClose name="chevron-right" size={30} style={{marginLeft: 7}} color="white"/>
                    </TouchableOpacity>
                )
        })


        return (
            <View>
                <View style={{backgroundColor: COLOR_PRIME, paddingLeft: 2, paddingRight: 2}}>
                    <View
                        style={{height: 50,flexDirection:'row',alignItems:'center'}}>
                        {renderItem}
                    </View>
                </View>

                <ListItems data={a} onPress={()=>{

                }}/>
            </View>
        )
    }
}