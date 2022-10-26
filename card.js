import React, { Component } from 'react';
import './card.css';

let Card = (props) => {
    const classes = 'card ' + props.className;
    return(
        <div className={classes}>{props.children}</div>
    );
}

export default Card;
