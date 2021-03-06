import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class SignUpPage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.txtWelcome}>WELCOME</Text>
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email"
            placeholderTextColor="#A3CB38"
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="New Password"
            placeholderTextColor="#A3CB38"
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Retype Password"
            placeholderTextColor="#A3CB38"
          />
        </View>
        <TouchableOpacity style={styles.loginBtn}>
          <Text
            style={styles.loginText}
            onPress={() => this.props.navigation.navigate('Table')}>
            SIGNUP
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  txtWelcome: {
    fontSize: 40,
    color: 'black',
    marginBottom: 110,
    textDecorationStyle:'dotted',
    textShadowRadius:100,
    fontWeight:'bold'
  },
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView: {
    width: '80%',
    backgroundColor: '#303952',
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
    backgroundColor: 'green',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },

});
