import React, {Component} from 'react';
import dateFormat from 'dateformat';

class Clock extends Component {

    constructor() {
        super();
        var now = new Date();
        this.state = {
            time: dateFormat(now, "h:MM TT")
        };
    }

    tick() {
        var now = new Date();
        this.setState({
            time: dateFormat(now, "h:MM TT")
        });
    }

    componentDidMount() {
        setInterval(() => {
            this.tick()
        }, 1000);
    }


    render() {
        const now = new Date();
        const dayOfWeek = dateFormat(now, "dddd");
        const date = dateFormat(now, "mmmm d");
        return (
        <ul className="clockContainer">
            <li>{this.state.time}</li>
            <li>{dayOfWeek}</li>
            <li>{date}</li>
        </ul>    
           )
    }
}

export default Clock;