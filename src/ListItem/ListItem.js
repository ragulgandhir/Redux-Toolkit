import React, { useState } from 'react';

const ListItem = ({ text }) => {
    return <li>{text}</li>;
};

const List = ({ numberOfItems }) => {
    const listItems = [];
    for(let i = 0; i < numberOfItems; i++)
    listItems.push(<ListItem text={i} />);
    return <pre>{listItems}</pre>;

};

const ListItems = () =>{
    const [name, setName] = useState('');
    return (
        <div>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={() => alert("hey" + name)}>Click Me</button>
            <List numberOfItems={200} />
        </div>
    );
}

export default ListItems;