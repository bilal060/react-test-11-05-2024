const initialState = {
    todos: [
        { id: 1, title: 'React Test', description: 'Create React Test framework', completed: true },
        { id: 2, title: 'React Test Todo App', description: 'Build a simple React Test Todo App using React', completed: false },
        { id: 3, title: 'Redux Integration', description: 'Integrate Redux for state management', completed: false },
    ],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [
                    { id: state.todos.length + 1, ...action.payload },
                    ...state.todos,
                ],
            };
        case 'TOGGLE_TODO':
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
                ),
            };
        default:
            return state;
    }
};

export default reducer;
