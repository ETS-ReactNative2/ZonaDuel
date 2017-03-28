import {
  AppRegistry,
  Text,
  Button,
  View,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AllQuestions from './questions.js'
import React, {Component} from 'react';

const getRandomInt = (min, max) =>  Math.floor(Math.random() * (max - min + 1) + min);

const QuestionBox = ({question}) => {
    return (
        <View style={{
          backgroundColor: 'transparent',
          justifyContent: 'center',
          flexDirection: 'row', height: 100, padding: 20}}>
            <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontSize: 24
            }}>{question.question}</Text>
        </View>
    )
}

const shuffle = (input) => {

    for (var i = input.length-1; i >=0; i--) {
        var randomIndex = Math.floor(Math.random()*(i+1));
        var itemAtIndex = input[randomIndex];
        input[randomIndex] = input[i];
        input[i] = itemAtIndex;
    }
    return input;
}

// const renderResponses = ({right, wrong}) => {
// }

class ButtonRender extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: '#841584'
        }
    }

    changeColor() {
        if (this.props.right) {
            this.setState({color: 'green'});
        } else {
            this.setState({color: 'red'});
        }
    }

    render() {
        return (
            <TouchableHighlight>
                <View style={styles.quiz}
                    >
                    <Button
                        title={this.props.elem}
                        color="#FFFFFF"
                        onPress={() => {
                            this.props.handleResponse(this.props.elem);
                        }}
                        />
                </View>
            </TouchableHighlight>
        )
    }
}

class ResponsesWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: '#841584'
        }
    }

    getThreeWrong(wrongs) {
        let res = [];
        let cur = '';
        while (res.length != 3) {
            cur = wrongs[Math.floor(Math.random() * (wrongs.length))];
            if (!res.includes(cur)) {
                res.push(cur);
            }
        }
        return res;
    }

    selectResponses() {
        const {wrong, right} = this.props.question;
        let responses = [];
        responses.push((right.length != 1) ? right[Math.floor(Math.random() * (right.length))] : right[0]);
        if (wrong.length <= 3) {
            ret = responses.concat(wrong);
            shuffle(ret);
            return ret;
        } else {
            ret = responses.concat(this.getThreeWrong(wrong));
            shuffle(ret);
            return ret;
        }
    }

    isRight(response, question) {
        return question.right.includes(response);
    }

    render() {
        return (

            <View alignItems="center"
                style={{
                }}>
                    {this.selectResponses().map((elem, id) => {
                        return (
                            <ButtonRender key={id} right={this.props.question.right.includes(elem)} elem={elem} handleResponse={this.props.handleResponse}/>
                        );
                    })}
            </View>
        )
    }
}

class RenderQuestion extends Component {
    render() {
        const {question} = this.props;
        return (
            <View>
                <QuestionBox question={question} />
                <ResponsesWrapper handleResponse={this.props.handleResponse} question={question} />
            </View>
        )
    }
}

const allPossible = (tab, theme) => {
    return tab.filter((element) => {
    if (element.theme === theme) {
        return true;
    }
})}


class Quizz extends Component {
    constructor(props) {
        super(props);
        const {theme} = this.props.navigation.state.params;

        this.state = {
            all: allPossible(AllQuestions, theme),
            current: 0,
            score: 0,
            status: 'working'
        }
    }

    loadQuestions(theme) {
        this.setState({
            currentTheme: theme,
        });
    }

    test(res) {
        let that = this;
        setTimeout(that.changeQuestion(res), 1000);
    }

    changeQuestion(response) {
        const actual = this.state.current + 1;
        const {navigate} = this.props.navigation;
        let newScore = 0;
        if (this.state.all[this.state.current].right.includes(response)) {
            newScore = this.state.score + 1;
            this.setState({score: newScore});
        }
        if ((this.state.all.length == actual) || (actual == 3)) {
            this.setState({status: 'finished'});
            navigate('Score', {score: (newScore !== 0) ?  newScore : this.state.score})
        } else {
            this.setState({current: actual});
        }
    }

    render() {
        return (
          <LinearGradient colors={['#f44f0d', '#f88a00', '#fcac00']} style={styles.linearGradient}>
            <View>
                <View style={{
                  backgroundColor: 'transparent'
                }}>
                  <Text style={{
                    textAlign: 'center',
                    fontSize: 18
                  }}>
                      Votre score: {this.state.score}
                  </Text>
                </View>
                <RenderQuestion question={this.state.all[this.state.current]} handleResponse={this.changeQuestion.bind(this)}/>
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
    backgroundColor: '#db4c40',
    borderWidth: 2,
    borderRadius: 5,
    marginTop: 40,
    width: '80%'

  },
  container: {
    flex: 1,

  },
  qu1: {
    backgroundColor: '#db4c40',
  },


})

export default Quizz;
