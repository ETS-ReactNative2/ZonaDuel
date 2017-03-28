import {
  View,
  Text,
  Button,
  Navigate,
  StyleSheet
} from 'react-native';
import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';

class ThemeChooser extends Component {
  render(){
    const {navigate} = this.props.navigation;
    return (
      <LinearGradient colors={['#f44f0d', '#f88a00', '#fcac00']} style={styles.linearGradient}>
      <View>
        <View
        style={{
          backgroundColor: 'transparent',
        }}>
            <Text style={{
              textAlign: 'center',
              marginTop: 10,
              fontSize: 42,
              color: 'white'
            }}>Choisissez un thème</Text>
          </View>
          <View
            style={{
              marginTop: 20,
            }}>
          <View
          style={styles.quiz}>
            <Button
            title="Épidémologie"
            color="white"
            onPress={() => {navigate('Quizz', {theme: 'EPI'})}} />
          </View>
          <View
          style={styles.quiz}>
            <Button
            color="white"
            title="Physiopathologie"
            onPress={() => {navigate('Quizz', {theme: 'PHY'})}} />
          </View>
          <View
          style={styles.quiz}>
            <Button
            color="white"
            title="Signes cliniques"
            onPress={() => {navigate('Quizz', {theme: 'DX'})}} />
          </View>
          <View
          style={styles.quiz}>
            <Button
            color="white"
            title="Prise en charge"
            onPress={() => {navigate('Quizz', {theme: 'PEC'})}} />
          </View>
          <View
          style={styles.quiz}>
            <Button
            color="white"
            title="Prévention"
            onPress={() => {navigate('Quizz', {theme: 'CUG'})}} />
          </View>
          </View>
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

  },
  container: {
    flex: 1,

  },


})

export default ThemeChooser;
