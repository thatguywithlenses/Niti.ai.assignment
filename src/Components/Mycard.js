import React from 'react';
import './Mycard.css';
const Mycard = (props) => {
    return (
        <div className='mycard'>
            <h1>{props.cardno}</h1>
        </div>
    )
}

export default Mycard;