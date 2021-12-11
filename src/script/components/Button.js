import React from 'react';

function CompButton(props) {
    return (
        <button onClick={() => {props.onClick(props.drink)}}>
            {props.drink}
        </button>
    );
}
export {CompButton};