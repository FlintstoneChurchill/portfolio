import React from 'react';
import './Work.css';

const Work = props => {
    return (
        <div className="work">
            <div className="work_img"><img src={props.thumb} alt={props.title}/></div>
            <h5>{props.title}</h5>
        </div>
    );
};

export default Work;