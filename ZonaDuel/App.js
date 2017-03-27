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
import LinearGradient from 'react-native-linear-gradient';
import Quizz from './Quizz.js'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'ZonaDuel',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
    <View style={styles.container}>
    <LinearGradient colors={['skyblue', '#3b5998', '#192f6a']} style={styles.linearGradient}>

    <View style={styles.logo}>
        {/*}<Image
          style={{width: 250, height: 250,}}
          source={require('./img/zonaduel.png')}
        />*/}
      </View>
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
          </LinearGradient>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    margin: 65,
  },
  more: {
    borderRadius: 10,
    marginTop: 10,
      backgroundColor: 'skyblue',
  },
  quiz: {
    backgroundColor: 'orange',
    borderWidth: 2,
    borderRadius: 5,
    margin: 120,
    marginTop: 50,

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
