import React from 'react';

const names = ["thomas", 'Arnaud', "brigitte", 'philippe']

const List = (props:any) => {
    return (
        <div>
            {names.map((name, index) => (
                <li key={index} style={{color: index % 2 ? 'blue': 'black'}}>{name} - {index % 2}</li>
            ))}
        </div>
    );
};

export default List;