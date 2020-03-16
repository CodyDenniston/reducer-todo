
export const initialState = [
    {
        item: 'Finish todo list',
        completed: false,
        id: 38
    }
]

export const ToDoReducer = (state, action) => {
    switch(action.type){
        case 'ADD_ITEM':
            return [
                ...state,
                {
                    item: action.payload,
                    complete: false,
                    id: Date.now(),
                }
            ];
        case 'TOGGLE_COMPLETED':
            return state.map(item => {
                if(item.id === action.id){
                    return {
                        ...item,
                        completed: !item.completed,
                    }
                }else return item
            });
        case 'CLEAR_COMPLETED':
            return [...state].filter(item => {
                return !item.completed
            });
        default:
            return state;
    }
}