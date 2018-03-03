import React, { Component } from 'react'
import {
    TouchableOpacity, View, Image, Text, StyleSheet,WebView,Linking
} from "react-native"
import Item from "../../component/ItemBottom"
import ItemBottomBar from "../../component/ItemBottomBar"
import {COLOR_PRIME} from "../../component/const";
import Infoslider from 'react-native-infoslider'
import Notifications from "../Notifications";

export default class Home extends Component{

    constructor(props){
        super(props)
        this.state = {
            data:[
                {
                    title:"Hello World",
                    image: require('../../images/slider1.jpg')},
                {
                    title:"Lorem Ipsum",
                    image: require('../../images/slider2.jpg')},

            ]
        };
    }

    handleClick = (url) => {
        Linking.canOpenURL(url).then(supported => {
            if (supported) {
                Linking.openURL(url);
            } else {

            }
        });
    };
    render(){
        return(
           <View  style={{flex: 1}}>
               <View style={{flex:4.5,backgroundColor:"white"}}>
                   <Infoslider
                       data={this.state.data}
                       titleColor="#000"
                       textColor="#666"
                       loop={true}
                       autoplay={true}
                       autoplayTimeout={3}>

                   </Infoslider>

                   <View style={{height:'100%',width:'100%',position: 'absolute',justifyContent:'flex-end',alignItems:'center',padding:5}}>
                       <View style={{height:55,width:'100%',backgroundColor:'white',opacity:0.9,flexDirection:'row',padding:3,justifyContent:'center',alignItems:'center'}}>
                           <Text style={{flex:3}}>
                               dasdsda
                               sdadasd
                           </Text>
                           <Text style={{flex:7}}></Text>
                           <Text style={{flex:3,fontSize:30,color:'black'}}>0</Text>
                           <Text style={{flex:2}}>dahd</Text>


                       </View>

                   </View>
               </View>
               <View style={{flex:3,backgroundColor:"white",flexDirection:"column"}}>
                   <View style={styles.listItem1}>
                       <Item style={{flex:1}} title={"coupon"} src={require('../../images/conp.png')}
                             onPress={()=>{
                                 this.handleClick('https://shopee.vn/')
                             }}
                       />
                       <Item style={{flex:1}} title={"newd"} src={require('../../images/credit-card.png')}/>
                       <Item style={{flex:1}} title={"Leaflets"} src={require('../../images/newspaper.png')}
                             onPress={()=>{
                                 this.props.navigation.navigate('LeafletsDetail')
                             }}
                       />
                   </View>

                   <View style={styles.listItem1}>
                       <Item style={{flex:1}} title={"catalogue"} src={require('../../images/catalogues.png')}/>
                       <Item style={{flex:1}} title={"newasds"} src={require('../../images/supermarket-shopping-cart-icon-17839.png')}
                             onPress={()=>{
                                 this.handleClick('https://shopee.vn/')
                             }}

                       />
                       <Item style={{flex:1}} numberNotifications={99} title={"notification"} src={require('../../images/hank.png')}
                             onPress={()=>{
                                 this.props.navigation.navigate('Notifications')
                             }}
                       />
                   </View>
                   <View style={{flex:2,flexDirection:"row"}}>
                       <ItemBottomBar src={require('../../images/home.png')}/>
                       <ItemBottomBar src={require('../../images/store.png')}/>
                       <ItemBottomBar title={"LINE@"} color={'green'}/>

                       <ItemBottomBar onPress={()=>{
                           this.props.navigation.navigate('SettingScreen')
                       }} src={require('../../images/settings-cog.png')} />

                   </View>

               </View>
           </View>
        )
    }
}
const styles = StyleSheet.create({
    listItem1: {
        flexDirection: 'row',
        flex: 3.5,
        // flexWrap:"wrap"
    }
});