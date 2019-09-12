import React, { Component } from 'react';
import { View, Text, Image, Button } from 'react-native';

export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null,
  }
  render() {
    return (
      <View>
        <Image source={require('./me.png')} />
        <Text>I am  Zuza :)</Text>
        <Text>I like to sit and learn React Native</Text>
        <Button onPress={() => this.props.navigation.navigate('SettingScreen')} title="Tell more"/>
      </View>
    )
  }
}
