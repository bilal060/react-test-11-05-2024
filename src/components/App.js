// App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo } from '../actions/actions';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

const App = () => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const handleAddTodo = todo => {
        dispatch(addTodo(todo));
    };

    const handleToggleTodo = id => {
        dispatch(toggleTodo(id));
    };

    return (
        <div>
            <h1>TODO List</h1>
            <AddTodo onAdd={handleAddTodo} />
            <TodoList todos={todos} onToggle={handleToggleTodo} />
        </div>
    );
};

export default App;
