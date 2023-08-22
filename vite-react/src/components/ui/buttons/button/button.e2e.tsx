import { expect } from '@wdio/globals';
import { render, screen } from '@testing-library/react';

import * as matchers from '@testing-library/jest-dom/matchers';


expect.extend(matchers);

import Button from './button.tsx';


// eto rofl? pochemu tut ne rabotaet, a Component.e2e rabotaet?
describe('Button', () => {
    it('Clear', async () => {
        render(<div id={ 'root' }><Button/></div>);
        const button: HTMLElement = screen.getByText(/button/i);
        expect(button).toBeInTheDocument();
    });
});
