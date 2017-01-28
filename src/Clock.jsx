import React, {Component} from 'react';
import dateFormat from 'dateformat';

class Clock extends Component {

    constructor() {
        super();
        var now = new Date();
        this.state = {
            time: dateFormat(now, "h:MM")
        };
    }

    tick() {
        var now = new Date();
        this.setState({
            time: dateFormat(now, "h:MM")
        });
    }

    componentDidMount() {
        setInterval(() => {
            this.tick()
        }, 1000);
    }


    render() {
        return <div className="clockContainer">
        <h1 className="clock">{this.state.time}</h1>
        </div>;
    }
}

export default Clock;