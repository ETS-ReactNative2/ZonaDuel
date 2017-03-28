import {
  View,
  Text,
  Button,
  Navigate,
  StyleSheet
} from 'react-native';
import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';

class Score extends Component {
  render() {
    const {navigate} = this.props.navigation;
    const {score} = this.props.navigation.state.params;
    return (
      <LinearGradient colors={['#f44f0d', '#f88a00', '#fcac00']} style={styles.linearGradient}>
      <View
      style={{
        backgroundColor: 'transparent',
      }}>
      <Text style={{
        textAlign: 'center',
        marginTop: 10,
        fontSize: 42,
        color: 'white'
      }}>Votre score final:</Text>

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
    margin: 10,
    marginTop: 70,
    backgroundColor: '#73c51a',
  },
  quiz: {
    backgroundColor: '#1194f6',
    borderWidth: 2,
    borderRadius: 5,
    marginTop: 40,
    width: '80%'

  },
  container: {
    flex: 1,

  },


})


export default Score;
