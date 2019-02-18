import React from 'react';



const userInput = ( props ) => {
    const inputStyle = {
        border: '2px solid lightblue'
    };

    return (
    <div className='UserInput'>
        <p>I'm the UserInput Component!!!</p>
        <input
            style={inputStyle}
            type="text"
            onChange={props.changed}
            value={props.name}
        />
    </div>
    )
};

export default userInput;
