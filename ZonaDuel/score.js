import {
  View,
  Text,
  Button,
  Navigate,
  StyleSheet,
  Image,
} from 'react-native';
import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';

class Score extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGame: 'en attente'
    }
    this.props.navigation.state.params.sock.send('finish'+this.props.navigation.state.params.score);
    this.props.navigation.state.params.sock.onmessage = (e) => {
      this.setState({currentGame: e.data})
    }
  }
  render() {
    const {navigate} = this.props.navigation;
    const {score} = this.props.navigation.state.params;
    return (
      <LinearGradient colors={['#f44f0d', '#f88a00', '#fcac00']} style={styles.linearGradient}>
      <View
      style={{
        backgroundColor: 'transparent',
        justifyContent: 'center'
      }}>
      <Text style={{
        textAlign: 'center',
        marginTop: 40,
        fontSize: 42,
        color: 'white'
      }}>Votre score final {'\n'}
      {score} / 3
      </Text>

      </View>

      <View style={styles.more}>
          <Text style={{fontSize: 50, textAlign: 'center',}}>{this.state.currentGame}</Text>
        </View>
        <View
        style={styles.quiz}>
          <Button
          title="Retour au menu"
          color="white"
          onPress={() => {navigate('Home', {sock: this.props.navigation.state.params.sock})}} />
        </View>
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  linearGradient: {
   flex: 1,
   paddingLeft: 15,
   paddingRight: 15,
   borderRadius: 5
 },
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
    backgroundColor: '#1194f6',
    borderWidth: 2,
    borderRadius: 5,
    marginTop: 10,
    margin: 35,
    width: '80%'

  },
  container: {
    flex: 1,
  },
  logo: {

  },

})


export default Score;
