/* eslint-disable no-undef */
import { renderHook, act } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter';


describe('Pruebas en el useCounter', () => { 
    test('debe retornar los valores por defecto', () => { 

        const { result } = renderHook(() => useCounter()); //Obtiene todo lo que retorna el Hook
        const { counter, decrement, increment, reset } = result.current;

        expect(counter).toBe(10); // Esperamos que el Counter sea 10
        expect(decrement).toEqual(expect.any(Function)); // Esperamos que sea una funcion
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
     });

    test('debe de generar el counter con un valor de 100', () => { 
      
        const { result } = renderHook(() => useCounter(100));
        const { counter } = result.current;

        expect(counter).toBe(100);
    });

    test('debe de incrementar el contador', () => { 
        const { result } = renderHook(() => useCounter(100)); 
        const { increment } = result.current;

        act(() => {
            increment();
            increment(2);
        })

        expect(result.current.counter).toBe(103); //Debes de indicar el current porque si desestructuras obtiene el valor anterior
    })

    test('debe de decrementar el contador', () => { 
        const { result } = renderHook(() => useCounter(100)); 
        const { decrement } = result.current;

        act(() => {
            decrement();
            decrement(2);
        })

        expect(result.current.counter).toBe(97); //Debes de indicar el current porque si desestructuras obtiene el valor anterior
    })

    test('debe de realizar el reset del contador', () => { 
        const { result } = renderHook(() => useCounter(100)); 
        const { reset, decrement, increment } = result.current;

        act(() => {
            decrement();
            increment(2);
            reset();
        })

        expect(result.current.counter).toBe(100); //Debes de indicar el current porque si desestructuras obtiene el valor anterior
    })
 })