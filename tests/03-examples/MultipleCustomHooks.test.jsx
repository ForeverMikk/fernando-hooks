import { screen, render, fireEvent } from '@testing-library/react';
import { MultipleCustomHooks } from "../../src/03-examples";
import { useFetch } from '../../src/hooks/useFetch';
import { useCounter } from '../../src/hooks/useCounter';

// eslint-disable-next-line no-undef
jest.mock('../../src/hooks/useFetch');
// eslint-disable-next-line no-undef
jest.mock('../../src/hooks/useCounter');

/* eslint-disable no-undef */
describe('Pruebas en <MultipleCustomHooks />', () => { 

    const mockIncrement = jest.fn();
    
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach(() => {
        jest.clearAllMocks();
    })


    test('debe de mostrar el componente por defecto', () => {  
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });

        render(<MultipleCustomHooks />);
        
        expect(screen.getByText('Loading...')); //Verifica si tiene el texto Loading
        expect(screen.getByText('Braking Bad Cuotes')); //Verifica si tiene el texto del Quote
        
        const nextButton = screen.getByRole('button', {name: "Next Quote"}); //Obtienes el valor del 

        console.log(nextButton.disabled);
        expect(nextButton.disabled).toBe(true);
    });
    
    test('debe de mostrar un quote', () => { 
        
        useFetch.mockReturnValue({
            data: [{author: 'Michael', quote: 'Hola Mundo'}],
            isLoading: false,
            hasError: null
        });

        render(<MultipleCustomHooks />);
        expect(screen.getByText('Hola Mundo')).toBeTruthy();
        expect(screen.getByText('Michael')).toBeTruthy();
        
        const nextButton = screen.getByRole('button', {name: "Next Quote"});
        expect(nextButton.disabled).toBeFalsy();
    });

    test('debe de llamar la funcion de incrementat', () => { 
        
        useFetch.mockReturnValue({
            data: [{author: 'Michael', quote: 'Hola Mundo'}],
            isLoading: false,
            hasError: null
        });

        
        render(<MultipleCustomHooks />);
        const nextButton = screen.getByRole('button', {name: "Next Quote"});
        fireEvent.click(nextButton);

        expect(mockIncrement).toHaveBeenCalled();
    });




 });