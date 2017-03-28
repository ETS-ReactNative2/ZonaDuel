import {
  AppRegistry,
  Text,
  Button,
  View,
  TouchableHighlight
} from 'react-native';

import AllQuestions from './questions.js'
import React, {Component} from 'react';

const getRandomInt = (min, max) =>  Math.floor(Math.random() * (max - min + 1) + min);

const QuestionBox = ({question}) => {
    return (
        <View style={{flexDirection: 'row', height: 100, padding: 20}}>
            <Text>{question.question}</Text>
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
                <View style={{
                        backgroundColor: this.state.color,
                        marginTop: 40,
                        width: '80%'
                    }}
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
        this.state = {
            all: allPossible(AllQuestions, 'EPI'),
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

        if (this.state.all[this.state.current].right.includes(response)) {
            let newScore = this.state.score + 1;
            this.setState({score: newScore});
        }
        if ((this.state.all.length == actual) || (actual == 5)) {
            this.setState({status: 'finished'});
        } else {
            this.setState({current: actual});
        }
    }

    render() {
        return (
            <View>
                <Text>
                    {JSON.stringify(this.state.status)}
                </Text>
                <Text>
                    Votre score: {this.state.score}
                </Text>
                {this.state.status === 'finished' ? <Text>Votre score final: {this.state.score}</Text> : <RenderQuestion question={this.state.all[this.state.current]} handleResponse={this.changeQuestion.bind(this)}/>}
            </View>
        )
    }
}

export default Quizz;
