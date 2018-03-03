import React, { Component } from 'react'
import {
    TouchableOpacity, View, Image, Text, StyleSheet
} from "react-native"
import {COLOR_PRIME} from "../../component/const";
export default class ItemBottomBar extends Component{
    constructor(props){
        super(props)
    }
    componentWillMount(){

    }
    render(){
        let colorButton=this.props.color?this.props.color:COLOR_PRIME
        return(
                        <View style={{width:'25%',padding:5}}>
                            <TouchableOpacity onPress={()=>{
                                if(this.props.onPress){
                                    this.props.onPress()
                                }
                            }} style={{backgroundColor:colorButton,flex:1,borderRadius:10,justifyContent:"center",alignItems:"center"}}>
                                {this.props.title?
                                    <Text style={{fontSize:20,color: 'white',fontWeight:'bold'}} >{this.props.title}</Text>:
                                    <Image resizeMode={'contain'} style={{width:'70%',height:'70%'}} source={this.props.src} />}
                            </TouchableOpacity>
                        </View>

        )
    }
}
