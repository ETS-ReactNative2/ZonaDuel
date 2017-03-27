import React from 'react';
import {
  AppRegistry,
  Text,
  Button,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';



class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Text>Hello, Navigation!</Text>
        <Button
          onPress={() => navigate('Quizz')}
          title="Quizz"/>
      </View>
    );
  }
}

class Quizz extends React.Component {
  static navigationOptions = {
    title: 'MyQuestion',
  }
  render() {
    return <Text>Hello Im fucked</Text>;
  }
}

const ZonaDuel = StackNavigator({
  Home: { screen: HomeScreen },
  Quizz: { screen: Quizz }
});



AppRegistry.registerComponent('ZonaDuel', () => ZonaDuel);
