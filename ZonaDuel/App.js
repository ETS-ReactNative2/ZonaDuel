import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View,
  Image,
  Navigator,
  NativesModules
} from 'react-native';
import { COLOR, ThemeProvider } from 'react-native-material-ui';

import { StackNavigator } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import Quizz from './Quizz.js';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'ZonaDuel',
  };
  render() {
    const uiTheme = {
      palette: {
        primaryColor: COLOR.green500,
      }
    }
    const {navigate} = this.props.navigation;
    return (
      <ThemeProvider uiTheme={uiTheme}>
    <View style={styles.container}>
    <LinearGradient colors={['#f44f0d', '#f88a00', '#fcac00']} style={styles.linearGradient}>

    <View style={styles.logo}>
        <Image
          style={{width: 200, height: 200,}}
          source={require('./img/zona.png')}
        />
      </View>
        <View style={styles.more}>
            <Text style={{textAlign: 'center', fontFamily: 'Gill Sans',}}>
            ZonaDuel, un jeu rapide, amusant te permettant de défier tes amis professionnels de santé sur le Zona.
            {'\n'}Qui sera le meilleur ?
           </Text>
          </View>
          <View style={styles.quiz}>
        <Button raised primary
          onPress={() => navigate('Quizz')}
          title="Commencer une nouvelle partie"/>
          </View>
          </LinearGradient>

      </View>
      </ThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    marginLeft: 90,
  },
  more: {
    borderWidth: 1,
    borderRadius: 2,
    margin: 10,
    marginTop: 70,
    backgroundColor: '#73c51a',
  },
  quiz: {
    backgroundColor: 'red',
    borderWidth: 2,
    borderRadius: 5,
    margin: 70,
    marginTop: 150,

  },
  container: {
    flex: 1,

  },


})


const ZonaDuel = StackNavigator({
  Home: { screen: HomeScreen },
  Quizz: { screen: Quizz }
});



AppRegistry.registerComponent('ZonaDuel', () => ZonaDuel);
