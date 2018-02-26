import React, {Component} from 'react';
import './Modal.css';
import Draggable from 'react-draggable';

class Modal extends Component {
    render() {
        return (
            <Draggable
                handle=".window_header"
                defaultPosition={{
                    x: (window.innerWidth / 2 - window.innerWidth / 3),
                    y: (window.innerHeight / 2 - window.innerHeight / 3)
                }}>
                <div className="central_window"
                     onMouseDownCapture={this.props.active}
                     style={{'zIndex': this.props.isActive ? 11 : 10}}>
                    <div className="window_header">
                        <div className="buttons">
                            <button className="btn_close" onClick={this.props.closed}></button>
                            <button className="btn_full"></button>
                            <button className="btn_curtain"></button>
                        </div>
                        <h2 className="popup_title">{this.props.title}</h2>
                    </div>
                        <div className="window_content"></div>
                </div>
            </Draggable>
        );
    }
};

export default Modal;