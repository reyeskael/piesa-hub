import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { App } from './App';

describe('App Component', () => {
	it('renders heading and motorcycle parts button correctly', () => {
		render(
			<MemoryRouter>
				<App />
			</MemoryRouter>
		);

		const heading = screen.getByRole('heading', { name: /PiesaHub/i });
		expect(heading).toBeInTheDocument();

		const button = screen.getByRole('button', { name: /Find Motorcycle Parts/i });
		expect(button).toBeInTheDocument();
	});
});
