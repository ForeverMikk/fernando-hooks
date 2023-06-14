/* eslint-disable no-undef */
import { act, renderHook } from "@testing-library/react"
import { useForm } from "../../src/hooks/useForm"

describe('Pruebas en useForm', () => { 
    
    const initialForm = {
        name: 'Michael',
        email: 'michael@gmail.com'
    }

    test('debe de regresar los valores por defects', () => { 
        const { result } = renderHook(() => useForm(initialForm));
        
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function)
        });

     });

     test('debe de cambiar el nombre del formulario', () => { 
        
        const newValue = 'Juan';
        // Montar el hook
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange } = result.current;

        // onInputChange() //act, evento
        act(() => {
            onInputChange({
                target: {name: 'name', value: newValue} //Debes de poner el target porque es como si ingresaras el Input
            });
        })

        //expect, result.current.name === Juan
        expect(result.current.name).toBe(newValue);
        //expect, resul.current.formstate.name === Juan
        expect(result.current.formState.name).toBe(newValue);
      });

     test('debe realizar del formulario', () => { 
        
        const newValue = 'Juan';
        // Montar el hook
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange, onResetForm } = result.current;

        // onInputChange() //act, evento
        act(() => {
            onInputChange({
                target: {name: 'name', value: newValue} //Debes de poner el target porque es como si ingresaras el Input
            });

            onResetForm();
        })

        //expect, result.current.name === Juan
        expect(result.current.name).toBe(initialForm.name);
        //expect, resul.current.formstate.name === Juan
        expect(result.current.formState.name).toBe(initialForm.name);
      });
});