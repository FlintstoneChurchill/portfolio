import React from 'react';
import './Header.css';
import Moment from 'react-moment';


class Header extends React.Component {
    state = {
        date: new Date()
    };

    componentDidMount() {
        setInterval(() => {
           this.setState({date: new Date()})
        });
    }

    render() {
        return (
            <header className="mac_header">
                <Moment className="watches" format="HH:mm">{this.state.date}</Moment>
            </header>
        );
    }

};

export default Header;