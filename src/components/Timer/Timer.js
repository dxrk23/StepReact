import React from "react";
import { ReactDOM } from "react";

class Timer extends React.Component {
    constructor(props){
        super(props);
        this.state = { date: new Date() }
        this.timerRef = React.createRef()
    }

    componentDidMount(){
        this.timerID = setInterval(
            () =>  this.nextTick(),
            1000
        )
        console.log('Im mounted');
        console.log(this.timerRef)
    }

    nextTick(){
        this.setState({
            date: new Date()
        })
    }

    componentDidUpdate(){
        console.log('Im updated')
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    render(){
        return (
            <h1 ref={this.timerRef}> { this.state.date.toLocaleTimeString() } </h1>
        )
    }
}

export default Timer;