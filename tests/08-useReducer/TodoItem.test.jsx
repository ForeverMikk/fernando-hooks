import { fireEvent, render, screen } from '@testing-library/react';
import { TodoItem } from "../../src/08-useReducer/TodoItem";

/* eslint-disable no-undef */
describe('Pruebas en <TodoItem />', () => { 

    const todo = {
        id: 1,
        description: 'Piedra del Alma'
    }

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(() => jest.clearAllMocks()); //Resetea las funciones cada que se corre la prueba
    
    test('debe de mostrar el Todo Pendiente de completar', () => { 
        render(
            <TodoItem 
                todo={todo} 
                onToggleTodo={onToggleTodoMock} 
                onDeleteTodo={onDeleteTodoMock}
            />)

        const liElement = screen.getByRole('listitem');
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between align-items-center'); //Checas las clases del li

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toBe('');
    });

    test('debe de mostrar Todo completado', () => { 
        
        todo.done = true;
        
        render(
            <TodoItem 
                todo={todo} 
                onToggleTodo={onToggleTodoMock} 
                onDeleteTodo={onDeleteTodoMock}
            />)

        const liElement = screen.getByRole('listitem');
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between align-items-center'); //Checas las clases del li

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('text-decoration-line-through');
    });

    test('el span debe de llamar el toggleTodo cuando hace click', () => { 

        render(
            <TodoItem 
                todo={todo} 
                onToggleTodo={onToggleTodoMock} 
                onDeleteTodo={onDeleteTodoMock}
            />)

        const spanElement = screen.getByLabelText('span');
        fireEvent.click(spanElement);

        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id); 
    });

    test('el span debe de llamar el deleteTodo cuando hace click', () => { 

        render(
            <TodoItem 
                todo={todo} 
                onToggleTodo={onToggleTodoMock} 
                onDeleteTodo={onDeleteTodoMock}
            />)

        const deleteButton = screen.getByRole('button');
        fireEvent.click(deleteButton);

        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id); 
    });


});