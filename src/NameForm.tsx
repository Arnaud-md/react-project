import React, { useCallback } from 'react';
import { useState } from 'react';
import { useMemo } from 'react';

const NameForm = () => {

    const [name, setName] = useState('thomas');

    const upperCaseName = useMemo(
        () => name.toUpperCase()
        , [name]
    );

    const handleChange = useCallback((e) => {
        console.log('new value', e.target.value)
        //  return (
        //      <div>
        //          <p>{e.target.value}</p>
        //      </div>);
        setName(e.target.value);
    }, [])

    return (
        <div>
            <p>Nom : </p>
            <input onChange={handleChange} type='text' id='name'></input>
            <p style={{color:"green"}}>{upperCaseName}</p> 
        </div>
    );
};

export default NameForm;