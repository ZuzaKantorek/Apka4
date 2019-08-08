import React, {Component} from 'react';
import { StyleSheet, ScrollView, View, Text, StatusBar,} from 'react-native';


export default class Component1 extends Component {
    render(){
    return (
      <View>
        <StatusBar barStyle="dark-content" />
           <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
  
            <Text>This is Component1</Text>

  
  
  
  
  
          </ScrollView>
      </View>
    );
    }
  };

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'blue',
  },
 
});


