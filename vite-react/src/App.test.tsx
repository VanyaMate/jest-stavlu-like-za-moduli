import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { describe, it as test, expect } from 'vitest';
import App from './App.tsx';


/**
 * @vitest-environment jsdom
 */
describe('App', () => {
    test('All', async () => {
        render(<MemoryRouter><App/></MemoryRouter>);
        const button: HTMLButtonElement  = await screen.findByRole('button');
        const header: HTMLHeadingElement = await screen.findByRole('heading', { level: 2 });
        const input: HTMLInputElement    = await screen.findByRole('textbox');

        expect(button).toBeInTheDocument();
        expect(header).toBeInTheDocument();
        expect(input).toBeInTheDocument();
        expect(header.textContent).toBe('Status: false');
        await userEvent.click(button);
        expect(header.textContent).toBe('Status: true');
        await userEvent.click(button);
        expect(header.textContent).toBe('Status: false');

        expect(input.value).toBe('');
        expect(input).toContainHTML('');
        await userEvent.type(input, 'Any text');
        expect(input).toContainHTML('Any text');
    });
});