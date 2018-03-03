import React, {Component} from 'react'
import {
    TouchableOpacity, View, Image, StyleSheet, Text
} from "react-native"
import {COLOR_PRIME} from "../const";
import {  Button } from 'native-base';


export default class Item extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.itemInner} onPress={()=>{
                    if(this.props.onPress){
                        this.props.onPress()
                    }
                }}>
                    {this.props.numberNotifications>0?
                        <Button style={{position:'absolute',backgroundColor:'white',margin:5,height:'25%',padding:4} }  rounded >
                            <Text style={{color:'black'}}>{this.props.numberNotifications>99?'99':this.props.numberNotifications}</Text>

                        </Button>
                        :null
                    }

                    <View style={{justifyContent: "center", alignItems: "center",flex:1
                    }}>
                        <View style = {{flex:4}}>
                            <Image style={{height:'90%'}} resizeMode={'contain'}   source={this.props.src}/>
                        </View>

                        <Text style={{flex:1.5,color:'white',fontSize:15,marginBottom:5}}>{this.props.title}</Text>
                    </View>



                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",width:'33%',padding:5,flex:1
    },
    itemInner:{
        backgroundColor:COLOR_PRIME,width:"100%",borderRadius:10,flex:1
    }
})

