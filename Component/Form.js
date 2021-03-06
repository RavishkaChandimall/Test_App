import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="ID"
            placeholderTextColor="black"
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="NAME"
            placeholderTextColor="black"
            
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="QTY"
            placeholderTextColor="black"
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="PRICE"
            placeholderTextColor="black"
          />
        </View>
        <TouchableOpacity style={styles.loginBtn}>
          <Text
            style={styles.loginText}
            onPress={() => this.props.navigation.navigate('Table')}>
            Save
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
    marginBottom: 30,
  },
  container: {
    flex: 1,
    backgroundColor: '#0abde3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView: {
    width: '80%',
    backgroundColor: '#d1ccc0',
    borderRadius:100,
    height: 40,
    marginBottom: 30,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'blue',
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#009432',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 90,
    marginBottom: 5,
  },

});
