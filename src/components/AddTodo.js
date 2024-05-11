// AddTodo.js
import React, { useState } from 'react';

const AddTodo = ({ onAdd }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleAddTodo = () => {
        if (!title) return;
        onAdd({ title, description });
        setTitle('');
        setDescription('');
    };

    return (
        <div className="mb-4">
            <input
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <input
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
                type="text"
                placeholder="Description"
                value={description}
                onChange={e => setDescription(e.target.value)}
            />
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
                onClick={handleAddTodo}
            >
                Add Todo
            </button>
        </div>
    );
};

export default AddTodo;
