import React, { useState } from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {
    
    let [age, useage] = useState(25);

    let myName = "kevin";

    let sumarAge = () => {
        useage(age + 1);
    }

    return (
        <div>
            <h1>{props.title}</h1>
            <p>My name is {myName}</p>
            <p>My age is { age }</p>
            <p>            
                <button onClick={sumarAge}>
                    Agregar Edad
                </button>
            </p>
        </div>
    );
};


GreetingF.propTypes = {
    title: PropTypes.string
};


export default GreetingF;
