import { useForm } from "../hooks/useForm"
import PropTypes from 'prop-types';

export const TodoAdd = ({ onNewTodo }) => {

    const { description, onInputChange, onResetForm} = useForm({
        description: ''
    });

    const onFormSubmit = (event) => {
        event.preventDefault();
        if(description.length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description
        }

        onNewTodo(newTodo);
        onResetForm();
    }

  return (
    <>
        <h4>Agregar TODO</h4>
        <hr />
        <form onSubmit={onFormSubmit}>
            <input 
                type="text" 
                className="form-control" 
                placeholder="Que hay que hacer"
                name="description"
                value={description}
                onChange={onInputChange}
            />

            <button 
                type="submit"
                className="btn btn-primary mt-2"
            >
                Agregar
            </button>
        </form>
    </>
  )
}

TodoAdd.propTypes = {
    onNewTodo: PropTypes.func
}