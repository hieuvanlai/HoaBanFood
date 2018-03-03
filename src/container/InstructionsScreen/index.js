import {StyleSheet, View, Text,Image,Button} from 'react-native';
import React, {Component} from 'react';
import { IndicatorViewPager, PagerDotIndicator,ViewPager} from 'rn-viewpager';
import {COLOR_PRIME} from "../../component/const";

export default class ViewPagerPage extends Component {
    render() {
        return (
            <View style={{flex:1}}>


                <IndicatorViewPager

                    style={{flex:8}}
                    indicator={this._renderDotIndicator()}
                >
                    <View style={{backgroundColor:'white'}}>
                        <Image style={{width:'100%',height:'95%'}} source={require('../../images/instructions.png') } resizeMode={'cover'}/>

                    </View>
                    <View style={{backgroundColor:'white'}}>
                        <Image style={{width:'100%',height:'95%'}} source={require('../../images/instructions.png') } resizeMode={'cover'}/>

                    </View>
                    <View style={{backgroundColor:'white'}}>
                        <Image style={{width:'100%',height:'95%'}} source={require('../../images/instructions.png') } resizeMode={'cover'}/>
                    </View>




                </IndicatorViewPager>
                <View style={{flex:2,backgroundColor:'white',paddingRight:100,paddingLeft:100,paddingTop:10}}>
                    <Button title={'Back'} color={COLOR_PRIME} onPress={()=>{
                        this.props.navigation.goBack(null)
                    }}/>

                </View>


            </View>
        );
    }



    _renderDotIndicator() {
        return <PagerDotIndicator selectedDotStyle={{backgroundColor:COLOR_PRIME}} pageCount={3} titles={['one', 'two', 'three']} />;
    }



}