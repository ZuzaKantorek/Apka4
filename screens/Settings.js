import React, { Component } from 'react';
import { View, Text,Image, Button } from 'react-native';

export class Settings extends Component {
  static navigationOptions = {
    header: null,
  }
  render() {
    return (
      <View>
                <Image source={require('./me2.png')} />
        <Text>I like cats and have a good fun with the newest technologies</Text>
        <Button onPress={() => this.props.navigation.navigate('Home')} title="Go back"/>
      </View>
    )
  }
};

export default Settings;