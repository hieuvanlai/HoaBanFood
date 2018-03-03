import React, {Component} from 'react'
import {View, Image, Text, KeyboardAvoidingView, TextInput, TouchableOpacity,ScrollView} from 'react-native'
import {COLOR_PRIME} from "../../component/const";
import {Item, Input, Button, Right, Icon} from 'native-base'
import IconMaterial from 'react-native-vector-icons/dist/MaterialCommunityIcons'


export class SignUpWithPhone extends Component {
    constructor(props) {
        super(props)
        this.state = {
            height: '100%',
            secureTextEntry: true
        }
    }

    render() {
        return (
            <View
                onLayout={(event) => {
                    var {height} = event.nativeEvent.layout;
                    this.setState({height})
                }}

                style={{
                    height: this.state.height,
                    flexDirection: 'column',
                    alignItems: 'center',
                    backgroundColor: COLOR_PRIME
                }}>

                <View style={{
                    flex: 6, width: '90%', alignItems: 'center',
                }}>
                    <View style={{flex: 0.5}}/>


                    <Item rounded style={{flex: 0.35, paddingLeft: 5}}>
                        <IconMaterial color={'black'} size={25} name={'phone'}/>


                        <Input keyboardType={'numeric'}
                               placeholder='Phone/Email'
                               placeholderTextColor={'#424242'}
                               style={{color: "white"}}/>
                    </Item>
                    <View style={{flex: 0.5}}/>


                    <Button style={{width: '100%', alignItems: 'center', flex: 0.25}} block rounded light>
                        <Text>Sign Up</Text>
                    </Button>
                    <View style={{flex: 0.3}}/>
                    <Text style={{color: 'white', fontSize: 15, flex: 1}}>Will password send a message to your
                        phone </Text>


                    <View style={{flex: 0.5}}/>


                </View>


            </View>
        )
    }
}