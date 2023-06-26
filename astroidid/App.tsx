import 'react-native-gesture-handler';
import React, {Component} from 'react';
import Home from './src/components/Home';
import AstroidId from './src/components/AstroidId';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="AstroidId" component={AstroidId} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
