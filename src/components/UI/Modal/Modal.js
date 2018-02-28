import React, {Component} from 'react';
import './Modal.css';
import Draggable from 'react-draggable';
import axios from 'axios';
import Work from "../../Work/Work";

class Modal extends Component {
    state = {
        works: []
    };

    componentDidMount() {
        axios.get('/wp/v2/posts?_embed').then(resp => {
            let works = [];
            resp.data.forEach(item => {
                let thumb = item._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url;
                let title = item.title.rendered;
                let id = item.id;

                let work = {title, thumb, id};
                works.push(work)
            });

            this.setState({works});
        });
    }

    render() {
        return (
            <Draggable
                handle=".window_header"
            >
                <div className={['central_window', this.props.isFullScreen ? 'full_width' : ''].join(' ')}
                     onMouseDownCapture={this.props.active}
                     style={{'zIndex': this.props.isActive ? 11 : 10}}>
                    <div className="window_header">
                        <div className="buttons">
                            <button className="btn_close" onClick={this.props.closed}></button>
                            <button className="btn_full" onClick={this.props.toggleFullScreen}></button>
                            <button className="btn_curtain"></button>
                        </div>
                        <h2 className="popup_title">{this.props.title}</h2>
                    </div>
                    <div className="window_content">
                        {this.state.works.map(work => <Work title={work.title} thumb={work.thumb} key={work.id}/>)}
                    </div>
                </div>
            </Draggable>
        );
    }
};

export default Modal;