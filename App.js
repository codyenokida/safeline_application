
import React, {Component} from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, TextInput} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import background from './images/Fluorescent-Gradient-Final.jpg';
import logo from './images/Logo_transparent_whitedots.png';
import CircleButton from './components/circlebutton';
import HomeScreen from './pages/Home';
import SignUpScreen from './pages/SignUp';

class TInput extends Component {
  render() {
    return(
      <View style={styles.tinputview}>
        <Text style={styles.tinputtexttitle}>{this.props.texttitle}</Text>
        <TextInput style={styles.textinput} placeholder = "type here"/>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
          }}
        />
      </View>
    );
  }
}


export class LoginScreen extends Component {
  static navigationOptions = {
    header : null
  }
  render() {
    return (
      <ImageBackground source={background} style={styles.backgroundcss}> 
        <Image 
          source={logo} 
          style={styles.logocss}
        />
        <TInput texttitle='username'/>
        <TInput texttitle='password'/>
        <CircleButton 
          name='LOGIN'
          onPress={ () => 
            this.props.navigation.navigate('Home') 
          }
        />
        <CircleButton 
          name='SIGN-UP'
          onPress={ () => 
            this.props.navigation.navigate('SignUp') 
          }
        />
        {/* <CircleButton /> */}
      </ImageBackground>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Home: HomeScreen,
    SignUp: SignUpScreen,
  },
  {
    initialRouteName: "Login"
  }
);

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  backgroundcss: {
    width: '100%', 
    height: '100%', 
    alignItems: 'center',
    flex: 1,
  },
  logocss: {
    marginTop: '10%',
    width: '80%',
    height: '50%', 
    resizeMode: 'contain',
    marginBottom: '-5%',
  },
  textinput: {
    color: 'white',
    textAlign: 'center',
    paddingBottom: '2%',
  },
  tinputtexttitle: {
    color: 'black',
    marginRight: '60%',
    paddingBottom: '5%',
  },
  tinputview: {
    paddingBottom: '5%',
  },
});
