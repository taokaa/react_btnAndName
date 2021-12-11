import React from 'react';

function ChosenDrink(props) {
    return (
        <div>
            <p>You chose {props.drink} for {props.count} times.</p>
        </div>
    );
}

export {ChosenDrink};