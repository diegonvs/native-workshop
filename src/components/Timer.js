import React from 'react';
import TimerMixin from 'react-timer-mixin';
import Button from 'react-native-button';
import { StyleSheet, View, Text } from 'react-native';

export default class Timer extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            timeRemaining: this.initialTime,
            isStarted: false
        };

        this.timeLeft = 0;
        this.startTime = 0;
        this.minutes = 0;
        this.seconds = 0;
        this.timeRemaining = 0;
        this.timerInterval = 0;
        this.timerDuration = 25 * 60;
        this.initialTime = '25:00';
    }

    handleClick() {
        if (this.state.isStarted){
            this.deactivateClock();
        } else {
            this.activateClock();
        }
    }

    activateClock() {
        this.startTime = Date.now();
        this.timer();
        this.timerInterval = TimerMixin.setInterval(this.timer.bind(this), 1000);
        this.setState({
            isStarted: true,
            timeRemaining: this.initialTime
        });
    }

    deactivateClock() {
        TimerMixin.clearInterval(this.timerInterval);
        this.setState({
            isStarted: false
        });
    }

    timer() {
        this.timeLeft = this.timerDuration - (((Date.now() - this.startTime)/1000) | 0 );

        this.minutes = (this.timeLeft / 60) | 0;
        this.seconds = (this.timeLeft % 60) | 0;

        this.minutes = this.minutes < 10 ? '0' + this.minutes : this.minutes;
        this.seconds = this.seconds < 10 ? '0' + this.seconds : this.seconds;

        if ( this.timeLeft > -1 ) {
            this.setState({
                timeRemaining: this.minutes + ':' + this.seconds
            });
        } else {
            this.deactivateClock();
        }
    }

    render() {
        return (
            <View style={styles.container}>

            <Button style={styles.button} onPress={this.handleClick.bind(this)}>
            { this.state.isStarted? 'STOP' : 'START' }
            </Button>
            <Text style={styles.timer}>
            {this.state.timeRemaining}
            </Text>

            </View>

        )
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'white',
        fontSize: 40,
        padding: 30,
        textAlign: 'center',
        color: 'tomato'
    },
    timer: {
        color: 'black',
        fontSize: 75,
        textAlign: 'center',
        margin: 10
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    }

});