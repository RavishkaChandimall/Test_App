import React, {Component} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';



export default class LoginScreen extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        
        <View>
          <Text style={styles.txtWelcome}>WELCOME TO APP</Text>
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email"
            placeholderTextColor="#ffff"
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Password"
            placeholderTextColor="#ffff"
          />
        </View>
        <TouchableOpacity style={styles.loginBtn}>
          <Text
            style={styles.loginText}
            onPress={() => this.props.navigation.navigate('Table')}>
            LOGIN
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtnGoogle}>
          <Text style={styles.loginText}>SIGNUP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signUpBtnGoogle}>
          <Text style={styles.loginText} onPress={()=> this.props.navigation.navigate('SignUp')}>LOGIN With Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signUpFacebook}>
          <Text style={styles.loginText} onPress={()=> this.props.navigation.navigate('SignUp')}>LOGIN With Facebook</Text>
        </TouchableOpacity>
        
      </View>
   
    );
  }
}

const styles = StyleSheet.create({
  txtWelcome: {
    fontSize: 30,
    color: 'black',
    marginBottom: 30,
    fontWeight:'bold'
  },
  container: {
    
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: "column"
  },
  inputView: {
    width: '90%',
    backgroundColor: '#465881',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'white',
  },
  loginBtn: {
    width: '80%',
    backgroundColor: 'lightgreen',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 70,
    marginBottom: 0,
  },
  loginBtnGoogle: {
    width: '80%',
    backgroundColor: '#5758BB',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },

  signUpBtnGoogle: {
    width: '80%',
    backgroundColor: '#12CBC4',
    borderRadius: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
    marginBottom: 10,
  },
  signUpFacebook:{
    width: '80%',
    backgroundColor: '#12CBC4',
    borderRadius: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
    marginBottom: 5,

  }

});
