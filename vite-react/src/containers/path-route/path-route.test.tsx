import App from '@/App.tsx';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import userEvent from '@testing-library/user-event';


/**
 * @vitest-environment jsdom
 */
describe('Route', () => {
    it('Default', async () => {
        const { container }: { container: HTMLElement } = render(
            <MemoryRouter>
                <App/>
            </MemoryRouter>,
        );
        const mainLink: HTMLAnchorElement | null        = container.querySelector('a[href="/"]');
        const aboutLink: HTMLAnchorElement | null       = container.querySelector('a[href="/about"]');
        expect(mainLink).toBeInTheDocument();
        expect(aboutLink).toBeInTheDocument();
        expect(await screen.findByText('Main Page')).toBeInTheDocument();
        userEvent.click(aboutLink!);
        expect(await screen.findByText('About Page')).toBeInTheDocument();
        userEvent.click(mainLink!);
        expect(await screen.findByText('Main Page')).toBeInTheDocument();
    });

    it('404 page', async () => {
        const { container }: { container: HTMLElement } = render(
            <MemoryRouter initialEntries={ [ '/404_not_page_route' ] }>
                <App/>
            </MemoryRouter>,
        );

        const mainLink: HTMLAnchorElement | null = container.querySelector('a[href="/"]');
        expect(mainLink).toBeInTheDocument();
        expect(await screen.findByText('Error Page')).toBeInTheDocument();
        userEvent.click(mainLink!);
        expect(await screen.findByText('Main Page')).toBeInTheDocument();
    });
});