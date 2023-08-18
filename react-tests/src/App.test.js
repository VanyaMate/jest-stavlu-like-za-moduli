import { render, screen, fireEvent } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";
import App from './App';

describe('App', () => {
    test('App test', () => {
        render(<App/>);
        const header = screen.getByText(/hello/i);
        const button = screen.getByRole('button');
        const input  = screen.getByPlaceholderText('input');
        expect(header).toBeInTheDocument();
        expect(button).toBeInTheDocument();
        expect(input).toBeInTheDocument();
        expect(input).toMatchSnapshot();
        screen.debug();
    });

    test('Hello2 is null', async () => {
        render(<App/>);
        const header = await screen.findByText(/data/i, {}, { timeout: 1000 });
        expect(header).toBeInTheDocument();
        expect(header).toHaveStyle({ color: 'red' });
    });

    test('Buttons', () => {
        render(<App/>);
        const button = screen.getByTestId('toggle-button');
        expect(screen.queryByTestId('toggle-element')).toBeNull();
        fireEvent.click(button);
        expect(screen.queryByTestId('toggle-element')).toBeInTheDocument();
        fireEvent.click(button);
        expect(screen.queryByTestId('toggle-element')).toBeNull();
    });

    test('Input', async () => {
        render(<App/>);
        act(() => {
            const input = screen.getByTestId('input');
            expect(input).toBeInTheDocument();
            expect(input).toHaveTextContent('');
            const randomText = Math.random().toString();
            fireEvent.input(input, { target: { value: randomText } })

            const inputValuePlaceholder = screen.getByTestId('input-value');
            expect(inputValuePlaceholder).toHaveTextContent(randomText);
            fireEvent.input(input, { target: { value: 'some text2' } })
            expect(inputValuePlaceholder).toHaveTextContent('some text2');
            userEvent.type(input, 'text');
            expect(inputValuePlaceholder).toHaveTextContent('text');
        })
    });
})

