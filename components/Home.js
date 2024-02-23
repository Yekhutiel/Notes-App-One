import React, {useState} from 'react';
import {Text, View} from 'react-native';

// components
import Header from "./Header.js"
import ListItems from './ListItems.js';

const Home = () => {

    // initial todos
    const initialTodos = [{
        title: "get some snacks",
        date: "Fri, 24 Jan 2024 08:20:33 GMT",
        key: "1"
    },
    {
        title: "Get some groceries",
        date: "Fri, 24 Jan 2024 08:20:33 GMT",
        key: "2"
    },
    {
        title: "Prepare youtube script",
        date: "Fri, 24 Jan 2024 08:20:33 GMT",
        key: "3"
    }]



    const [todos, setTodos] = useState(initialTodos);

    // clear all todos
    const handleClearTodos = () => {
        setTodos([]);
    }

    return (
        <>
            <Header handleClearTodos={handleClearTodos}/>
            <ListItems
                todos={todos}
                setTodos={setTodos} 
            />
        </>
        
    );
}

export default Home;