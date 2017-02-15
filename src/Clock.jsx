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
            <div className="clockContainer row">
                <div className='timeContainer col s12 m6 l6'>
                   <ul>
                        <li className='timeText'>{this.state.time}</li>
                    </ul>
                </div>
                <div className='dateContainer col s12 m6 l6'>
                    <ul>
                        <li className='dowText'>{dayOfWeek}</li>
                        <li className='dateText'>{date}</li>
                    </ul>
                </div>
                
            </div>    
        )
    }
}

export default Clock;