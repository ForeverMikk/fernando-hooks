/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import { MainApp } from "../../src/09-useContext/MainApp";
import { MemoryRouter } from "react-router-dom";

describe('Pruebas en <MainApp />', () => { 
    test('debe de mostrar el componentne <HomePage />', () => { 

        render(
            // El memory Router proporciona los hooks que usa el browser roter
            <MemoryRouter> 
                <MainApp />
            </MemoryRouter>
        );

        expect(screen.getByText('Home Page')).toBeTruthy();
    });

    test('debe mostrar el Login Page', () => {
        render(
            <MemoryRouter initialEntries={['/login']}> 
                <MainApp />
            </MemoryRouter>
        );

        expect(screen.getByText('Login Page')).toBeTruthy();
    });


});