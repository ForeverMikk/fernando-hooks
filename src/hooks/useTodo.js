import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/totoReducer";

const init = () => {
    // Esta funcion indica que si el valor del arreglo es null, regresa un arreglo vacio
    // Si no, regresa el valor del local Storage
    return JSON.parse(localStorage.getItem('todos')) || []; 

}

export const useTodo = () => {
  
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos)); //Seteas los valores del localStorage cada que cambian los todos
    }, [todos]);
    

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        dispatch(action);
    }

    const handleDeleteTodo = (id) => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: id
        }
        dispatch(action);
    }

    const handleToggleTodo = (id) => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: id
        }
        dispatch(action)
    }

    const todosCount = todos.length

    const pendingTodosCount = todos.filter(todo => !todo.done).length
  
    return {
        todos,
        todosCount,
        pendingTodosCount,
        handleDeleteTodo,
        handleNewTodo,
        handleToggleTodo
    }
}
