import { render, screen } from '@testing-library/react';
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
        // screen.debug();


    });
});