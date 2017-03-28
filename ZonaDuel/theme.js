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
          style={styles.epi}>
            <Button
            title="Épidémologie"
            color="white"
            onPress={() => {navigate('Quizz', {theme: 'EPI'})}} />
          </View>
          <View
          style={styles.phy}>
            <Button
            color="white"
            title="Physiopathologie"
            onPress={() => {navigate('Quizz', {theme: 'PHY'})}} />
          </View>
          <View
          style={styles.dx}>
            <Button
            color="white"
            title="Signes cliniques"
            onPress={() => {navigate('Quizz', {theme: 'DX'})}} />
          </View>
          <View
          style={styles.pec}>
            <Button
            color="white"
            title="Prise en charge"
            onPress={() => {navigate('Quizz', {theme: 'PEC'})}} />
          </View>
          <View
          style={styles.cug}>
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
  epi: {
    borderWidth: 2,
    borderRadius: 5,
    marginTop: 0,
    margin: 50,
    backgroundColor: '#d81e5b',
  },
  phy: {
    borderWidth: 2,
    borderRadius: 5,
    marginTop: 0,
    margin: 50,
    backgroundColor: '#3a3335',
  },
  dx: {
    borderWidth: 2,
    borderRadius: 5,
    marginTop: 0,
    margin: 50,
    backgroundColor: '#2ec4b6',
  },
  pec: {
    borderWidth: 2,
    borderRadius: 5,
    marginTop: 0,
    margin: 50,
    backgroundColor: '#db4c40',
  },
  cug: {
    borderWidth: 2,
    borderRadius: 5,
    marginTop: 0,
    margin: 50,
    backgroundColor: '#ffb627',
},

})

export default ThemeChooser;
