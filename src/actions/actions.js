export const addTodo = todo => ({
    type: 'ADD_TODO',
    payload: todo,
});

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    payload: id,
});
