import { screen, render } from '@testing-library/react';
import { MultipleCustomHooks } from "../../src/03-examples";

/* eslint-disable no-undef */
describe('Pruebas en <MultipleCustomHooks />', () => { 
    test('debe de mostrar el componente por defecto', () => {   

        render(<MultipleCustomHooks />);

        expect(screen.getByText('Loading...')); //Verifica si tiene el texto Loading
        expect(screen.getByText('Braking Bad Cuotes')); //Verifica si tiene el texto del Quote

        const nextButton = screen.getByRole('button', {name: "Next Quote"}); //Obtienes el valor del 

        console.log(nextButton.disabled);
        expect(nextButton.disabled).toBe(true);
     });
 });