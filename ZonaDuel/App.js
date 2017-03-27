import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View,
  Image
} from 'react-native';
import { StackNavigator } from 'react-navigation';


class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'ZonaDuel',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
    <View style={styles.container}>
        <View style={styles.more}>
            <Text style={{textAlign: 'center', fontFamily: 'Gill Sans',}}>
            ZonaDuel, un jeu rapide, amusant te permettant de défier tes amis professionnels de santé sur le Zona.
            Qui sera le meilleur ?
           </Text>
          </View>
          <View style={styles.quiz}>
        <Button
          onPress={() => navigate('Quizz')}
          title="Let's go!"/>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {

  },
  more: {
    borderRadius: 10,
    marginTop: 60,
    backgroundColor: 'skyblue',
  },
  quiz: {
    backgroundColor: 'orange',
    borderWidth: 2,
    borderRadius: 5,
    margin: 120,
    marginTop: 400,

  },
  container: {
    flex: 1,
    backgroundColor: '#3399ff',
  },


})


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
