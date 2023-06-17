import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from "../../src/09-useContext/LoginPage";
import { UserContext } from "../../src/09-useContext/context/UserContext";

/* eslint-disable no-undef */
describe('Pruebas en <LoginPage />', () => { 

    const user = {
        id: '123',
        name: 'Michael',
        email: 'correo@gmail.com'
    }

    test('debe de mostrar el componente sin el ususario ', () => { 
        render(
            <UserContext.Provider value={{user: null}}>
                <LoginPage />
            </UserContext.Provider>
        )

        const preTag = screen.getByLabelText('pre'); //aria-label
        expect(preTag.innerHTML).toBe('null');
    });

    test('debe de llamar setUser cuando das click en el boton', () => { 
        
        const setUserMock = jest.fn();
        
        render(
            <UserContext.Provider value={{user: null, setUser: setUserMock}}>
                <LoginPage />
            </UserContext.Provider>
        )

        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(setUserMock).toHaveBeenCalledWith(user);
    });
});