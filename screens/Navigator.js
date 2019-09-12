import React, { Component } from 'react';
import {       createStackNavigator,   createAppContainer } from 'react-navigation';
import Settings from './Settings';
import HomeScreen from './Home';

const AppNavigator = createStackNavigator({
  
  Home: { 
    screen: HomeScreen,
},
SettingScreen: { 
    screen: Settings,
}},

  {
      initialRouteName: 'Home', 
  }
  );

//  class Nav extends Component {
//       render() {
//           return(
//               <AppNavigator />
//           );
//       }
//   }
  const Nav = createAppContainer(AppNavigator);
  export default Nav;