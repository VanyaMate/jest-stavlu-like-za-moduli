import { render, screen } from '@testing-library/react';
import Button from './button.tsx';
import { describe, it as test, expect } from 'vitest';
import css from './button.module.scss';


/**
 * @vitest-environment jsdom
 */
describe('Button', () => {
    test('Clear', async () => {
        render(<Button/>);
        const button: HTMLElement = await screen.findByRole('button');
        expect(button).toBeInTheDocument();
        expect(button.classList.contains('loading')).toBe(false);
        expect(button.classList.contains('active')).toBe(false);
    });

    test('With loading', async () => {
        render(<Button loading/>);
        const button: HTMLElement = await screen.findByRole('button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveClass(css.loading);
    });
});