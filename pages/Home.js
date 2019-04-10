import React, {Component} from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, TextInput} from 'react-native';
import Carousel from '../components/Carousel'
import Box from '../components/Box'
import background from '../images/Fluorescent-Gradient-Final.jpg';
import blue_background from '../images/blue_background.jpeg';





export default class HomeScreen extends Component {
  static navigationOptions = {
    header : null
  }
  render = () => {
    return (
      <ImageBackground source={background} style={styles.viewcss}>
        <View style={styles.boxes}> 
          <Box />
          <Box />
          <Box />
          <Box />
        </View> 
        <View style={{alignItems: 'center', top:-40}}>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              width: 100,
              bottom: 20
            }}
          />
          <Text style={{fontSize: 40, fontWeight: '100'}}>Recent Falls</Text>
        </View>
        
        <Carousel style={{flex: 1}}/>

      </ImageBackground>
    );
  }
}


const styles = StyleSheet.create({
  viewcss: {
    alignItems: 'center',
    height: '100%',
  },
  boxes: {
    flex: 1, 
    flexDirection:'row', 
    alignItems:'center', 
    flexWrap:'wrap', 
    alignContent:'center', 
    justifyContent:'center', 
  }
});