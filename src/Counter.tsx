import React from 'react';
import { useState, useCallback } from 'react';

const Counter = () => {
    let [count, setCount] = useState(0);
    //let count = 0;
    const handleClick = useCallback(
        () => setCount(count+1)
        , [count]
    );
    return (
        <div>
            <p>Compteur : {count}</p>
            <button onClick={handleClick}>Valider</button>
        </div>
    );
};

export default Counter;