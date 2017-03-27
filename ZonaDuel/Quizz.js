import {
  AppRegistry,
  Text,
  Button,
  View
} from 'react-native';

import AllQuestions from './questions.js'
import React, {Component} from 'react';

const getRandomInt = (min, max) =>  Math.floor(Math.random() * (max - min + 1) + min);

class Question {
    constructor(question, right, wrong, theme) {
        this.question = question;
        this.theme = theme
        this.right = right;
        this.wrong = wrong;
    }
}

const QuestionBox = ({question}) => {
    return (
        <View style={{flexDirection: 'row', height: 100, padding: 20}}>
            <Text>{question.question}</Text>
        </View>
    )
}

const renderResponses = ({right, wrong}) => {
}

class ResponsesWrapper extends Component {
    selectResponses() {
        const {wrong, right} = this.props.question;
        const responses = [];
        responses.push(right[getRandomInt(0, right.lentgh)]);
        return right;
    }

    render() {
        return (
            <View>
                <Text>
                    Good response is:
                </Text>
                <Text>
                    {this.selectResponses().map((elem) => {
                        console.log(elem);
                    })}
                </Text>
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
                <ResponsesWrapper question={question} />
            </View>
        )
    }
}

class Quizz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: {},
            all: AllQuestions
        }
    }

    getQuestionFromTheme(theme) {
        const allPossible = this.state.all.filter((element) => {
            if (element.theme === theme) {
                return true;
            }
        })
        return allPossible;
    }

    loadQuestions(theme) {
        this.setState({
            currentTheme: theme
        })
    }

    changeQuestion() {
        const actual = this.state.current
        const passed = this.state.passedQuestions

        this.setState({
            passedQuestions: [...passed, actual]
        })
    }
    render() {
        return (
            <View>
                {this.getQuestionFromTheme('PEC').map((elem, id) => {
                    return (
                        <RenderQuestion question={elem} />
                    )
                })}
            </View>
        )
    }
}

export default Quizz;
