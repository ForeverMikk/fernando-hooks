import { useEffect, useReducer } from "react"
import { todoReducer } from "./totoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

const initialState = [
    // {
    //     id: new Date().getTime(),
    //     description: 'Recolectar la piedra del alma',
    //     done: false,
    // },
    // {
    //     id: new Date().getTime() * 3,
    //     description: 'Recolectar la piedra del poder',
    //     done: false,
    // }
]

const init = () => {
    // Esta funcion indica que si el valor del arreglo es null, regresa un arreglo vacio
    // Si no, regresa el valor del local Storage
    return JSON.parse(localStorage.getItem('todos')) || []; 

}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

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

  return (
    <>
        <h1>TODOApp: 10 <small>pendientes 2</small> </h1>
        <hr />
        <div className="row">
            <div className="col-7">
                <TodoList todos={todos}/>
            </div>

            <div className="col-5">
                {/* <TodoAdd onNewTodo={(todo) => handleNewTodo(todo)}/> */}
                {/* Esto equivale a lo mismo si no envias otro argumento */}
                <TodoAdd onNewTodo={handleNewTodo}/>
            </div>
        </div>
    </>
  )
}
