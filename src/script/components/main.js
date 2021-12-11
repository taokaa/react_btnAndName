import React, { useState, useEffect } from 'react';
import {ChosenDrink} from './chosenDrink';
import {Hello} from './hello'
import {CompButton} from './Button';

function Main() {
    const [drink, setDrink] = useState('nothing');
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `You clicked ${count} times!`
    });

    function handleClick(drink) {
        setDrink(drink);
        setCount(count + 1);
    }
    

    return (
        <div>
            <Hello name={drink}/>
            <ChosenDrink drink={drink} count={count} />
            <CompButton drink='coffee' onClick={handleClick}/>
            <CompButton drink='greenTea' onClick={handleClick}/>
            <CompButton drink='tea' onClick={handleClick}/>
        </div>
    );
}

export {Main};