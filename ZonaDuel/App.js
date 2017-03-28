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
import Score from './score.js'
import { StackNavigator } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import Quizz from './Quizz.js';
import ThemeChooser from './theme.js'

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
          onPress={() => navigate('ThemeChooser')}
          title="Commencer une nouvelle partie"
          color="#ffff" />

          </View>
          </LinearGradient>
      </View>

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
    margin: 30,
    marginTop: 70,
    backgroundColor: '#c9e4ca',
  },
  quiz: {
    backgroundColor: '#db4c40',
    borderWidth: 2,
    borderRadius: 5,
    margin: 70,
    marginTop: 120,

  },
  container: {
    flex: 1,
    backgroundColor: '#c9e4ca'
  },


})

const ZonaDuel = StackNavigator({
  Home: { screen: HomeScreen },
  Quizz: { screen: Quizz },
  ThemeChooser: {screen: ThemeChooser},
  Score: {screen: Score}
});



AppRegistry.registerComponent('ZonaDuel', () => ZonaDuel);
