import React, {Component} from 'react';
import { StyleSheet, ScrollView, View, Text, StatusBar,} from 'react-native';
import Component1 from './Components/Component1/Component1';

export default class App extends Component {
  render(){
  return (
    <View>
      <StatusBar barStyle="dark-content" />
         <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>

          <Text>Czesc tu Zuza,</Text>
          <Text> uczę się programować</Text>


          <Component1 />


        </ScrollView>
    </View>
  );
  }
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
 
});


