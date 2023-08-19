import { render, screen } from '@testing-library/react';
import Button from './button.tsx';


test('test', async () => {
    render(<Button/>);
    const button = await screen.findByRole('button');
    expect(true).toBeTruthy();
    expect(button).toBeInTheDocument();
});