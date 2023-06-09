import { TodoItem } from "./TodoItem"
import PropTypes from 'prop-types';

export const TodoList = ({todos = [], onDeleteTodo, onToggleTodo}) => {

  return (
    <ul className="list-group">
        {
            todos.map( todo => (
                <TodoItem 
                  key={todo.id} 
                  todo={todo} 
                  onDeleteTodo={ id => onDeleteTodo(id) }
                  onToggleTodo={ id => onToggleTodo(id) }
                />
            ))
        }
    </ul>
  )
}

TodoList.propTypes = {
    todos: PropTypes.array,
    onDeleteTodo: PropTypes.func,
    onToggleTodo: PropTypes.func
}