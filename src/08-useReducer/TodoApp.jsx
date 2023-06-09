import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodo } from "../hooks";

export const TodoApp = () => {

  const {todos, todosCount, pendingTodosCount, handleDeleteTodo, handleNewTodo, handleToggleTodo} = useTodo();

  return (
    <>
        <h1>
            TODOApp: {todosCount}
            <br />
            <small> Pendientes: {pendingTodosCount}</small> 
        </h1>
        <hr />
        <div className="row">
            <div className="col-7">
                <TodoList 
                    todos={todos} 
                    onDeleteTodo={id => handleDeleteTodo(id)}
                    onToggleTodo={id => handleToggleTodo(id)}
                />
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
