import React, {Component} from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, TextInput} from 'react-native';
import CircleInput from '../components/CircleInput';
import background from '../images/Fluorescent-Gradient-Final.jpg';
import logo from '../images/Logo_transparent_whitedots.png';
import CircleButton from '../components/circlebutton';


export default class SignUpScreen extends Component {
  static navigationOptions = {
    header : null
  }
    render() {
      return (
        <ImageBackground source={background} style={styles.backgroundcss}>
          <Image source={logo} style={styles.logocss}/>
            <CircleInput 
              placeholder = 'Username'
            />
            <CircleInput 
              placeholder = 'Email'
            />
            <CircleInput 
              placeholder = 'Password'
            />
            <CircleInput 
              placeholder = 'Password Confirmation'
            />
            <CircleButton 
              name='LOGIN'
              onPress={ () => 
                this.props.navigation.navigate('Home') 
              }
            />
        </ImageBackground>
      );
    }
  }

const styles = StyleSheet.create({
  backgroundcss: {
    width: '100%', 
    height: '100%', 
    alignItems: 'center',
    flex: 1,
    backgroundColor:'#F1E5EF',
  },
  logocss: {
    width: '70%',
    height: '50%', 
    resizeMode: 'contain',
    marginBottom: '-20%',
  },
});