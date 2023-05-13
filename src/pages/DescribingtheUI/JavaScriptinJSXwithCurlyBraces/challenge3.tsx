import React from 'react';

interface Person {
    name: string;
    imageId: string;
    imageSize: string;
    theme: {
        backgroundColor: string;
        color: string;
    };
}

const baseUrl = 'https://i.imgur.com/';
const person: Person = {
    name: 'Gregorio Y. Zara',
    imageId: '7vQD0fP',
    imageSize: 's',
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    }
};

const TodoList: React.FC = () => {
    return (
        <div style={person.theme}>
        <h1>{person.name}'s Todos</h1>
        <img
            className="avatar"
            src={`${baseUrl}${person.imageId}${person.imageSize}.jpg`}
            alt={person.name}
        />
        <ul>
            <li>Improve the videophone</li>
            <li>Prepare aeronautics lectures</li>
            <li>Work on the alcohol-fuelled engine</li>
        </ul>
        </div>
    );
};

export default TodoList;