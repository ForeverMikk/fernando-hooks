const initialState = [
    {
        id: 1,
        todo: 'Recolectar la Piedra del Alma',
        done:false
    }
]

// Un reducer siempre debe de tener 2 argumentos un estado inicial y una accion
const todoReducer = (state = initialState, action = {}) => {
    // Verifica que el type sea el mismo que ingresaste
    if(action.type === '[TODO] add todo'){
        return[...state, action.payload]; //Mandamos la accion y regresa el nuevo estado
    }
    return state;
}

let todos = todoReducer();

const newTodo = {
        id: 2,
        todo: 'Recolectar la Piedra del Poder',
        done:false
    }

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo, //lo que va dentro de la accion
}

todos = todoReducer(todos, addTodoAction);

console.log({state: todos});