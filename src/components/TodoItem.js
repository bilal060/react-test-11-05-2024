import React from 'react';

const TodoItem = ({ todo, onToggle }) => {
    const handleToggle = () => {
        onToggle(todo.id);
    };

    return (
        <div style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={handleToggle}
            />
            <span className={" m-2"}>{todo.title}</span>
        </div>
    );
};

export default TodoItem;
