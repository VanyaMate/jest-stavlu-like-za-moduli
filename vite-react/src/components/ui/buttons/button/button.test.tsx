import { render, screen } from '@testing-library/react';
import Button from './button.tsx';
import { describe, it as test, expect } from 'vitest';


/**
 * @vitest-environment jsdom
 */
describe('Button', () => {
    test('test', async () => {
        render(<Button loading/>);
        const button: HTMLElement = await screen.findByRole('button');
        expect(button).toBeInTheDocument();
        screen.debug();
        expect(button).toHaveClass('button-module_loading'); // А вот я и
        // попался со своими модулями. Можно попробовать писать без
        // hash:base64:5. Но там всё равно классы свои: _loading_3cb848". Мда
    });
});