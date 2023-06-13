/* eslint-disable no-undef */
import { renderHook } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter';


describe('Pruebas en el useCounter', () => { 
    test('debe retornar los valores por defecto', () => { 

        const { result } = renderHook(() => useCounter()); //Obtiene todo lo que retorna el Hook
        const { counter, decrement, increment, reset } = result.current;

        expect(counter).toBe(10); // Esperamos que el Counter sea 10
        expect(decrement).toEqual(expect.any(Function)); // Esperamos que sea una funcion
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
     })

     test('debe de generar el counter con un valor de 100', () => { 
      
        const { result } = renderHook(() => useCounter(100));
        const { counter } = result.current;

        expect(counter).toBe(100);
     })
 })