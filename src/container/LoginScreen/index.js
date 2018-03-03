import React, {Component} from 'react'
import {View, Image, Text, KeyboardAvoidingView, TextInput, TouchableOpacity} from 'react-native'
import {COLOR_PRIME} from "../../component/const";
import {Item, Input, Button, Right, Icon} from 'native-base'
import IconMaterial from 'react-native-vector-icons/dist/MaterialCommunityIcons'


export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            height: '100%',
            secureTextEntry:true
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

                <Text style={{color: 'white', fontSize: 40, flex: 1}}>Maxvule</Text>
                <Text style={{color: 'white', fontSize: 15, flex: 0.5}}>Sigin</Text>
                <Text style={{color: 'white', fontSize: 20, flex: 1}}>Verify Phone Number/Email</Text>
                <View style={{
                    flex: 6, width: '90%', alignItems: 'center',
                }}>

                    <Item rounded style={{flex: 1}}>
                        <Icon active name='person'/>


                        <Input placeholder='Phone/Email' placeholderTextColor={'#424242'} style={{color: "white"}}/>
                    </Item>
                    <View style={{flex: 0.5}}/>
                    <Item rounded style={{flex: 1}}>
                        <Icon active name='color-filter'/>
                        <Input placeholder='Password' secureTextEntry={this.state.secureTextEntry} placeholderTextColor={'#424242'}
                               style={{color: "white"}}/>
                        <TouchableOpacity onPress={()=>{
                            this.setState({secureTextEntry:false})
                        }}>
                            <Icon active name='eye' />
                        </TouchableOpacity>


                    </Item>


                    <View style={{flex: 0.5}}/>
                    <Button style={{width: '100%', alignItems: 'center', flex: 0.8}} block rounded light>
                        <Text>Login</Text>
                    </Button>


                    <View style={{flex: 0.5}}/>
                    <Text style={{color: 'white', fontSize: 15, flex: 1}}>or</Text>
                    <Text style={{color: 'white', fontSize: 15, flex: 1}}>CREATE AN ACCOUNT WITH</Text>
                    <View style={{flexDirection: 'row', flex: 1}}>
                        <Button style={{width: '40%'}} block rounded light onPress={()=>{
                            this.props.navigation.navigate('SignUpWithPhone')
                        }}>
                            <IconMaterial color={'black'} size={25} name={'phone'}/>
                            <Text>Phone Number</Text>
                        </Button>
                        <View style={{width: '20%'}}/>
                        <Button style={{width: '40%',paddingLeft:5}} block rounded light>
                            <IconMaterial style={{flex:3}} color={'black'} size={25} name={'email'}/>
                            <Text style={{flex:9}}>Email</Text>
                        </Button>
                    </View>
                    <View style={{flex: 0.5}}/>


                </View>
                <View style={{flexDirection: 'row', flex: 0.5, width: '90%',alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>{
                        this.props.navigation.goBack('')
                    }}>
                        <Text style={{color: 'white'}}>DON'T HAVE AN ACCOUNT</Text>
                    </TouchableOpacity>

                    <Right>
                        <TouchableOpacity>
                            <Text style={{color: 'white'}}>SIGN UP</Text>
                        </TouchableOpacity>
                    </Right>


                </View>


            </View>
        )
    }
}