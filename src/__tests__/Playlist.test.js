import Categories from '../pages/Playlist';
import mockedAxios from 'axios';
import { act, cleanup, render, screen, waitFor } from '@testing-library/react';
import TokenContext from '../TokenContext';

afterEach(cleanup);
jest.mock('axios');

describe('Categories Page', function () {
	var response = {
		data: {
			items: [
				{
					id: 1,
					images: [
						{
							url: 'https://via.placeholder.com/600',
						},
					],
					name: 'rock On',
					type: 'playlist',
				},
				{
					id: 2,
					images: [
						{
							url: 'https://via.placeholder.com/600',
						},
					],
					name: 'Dance Moves',
					type: 'playlist',
				},
			],
		},
	};

	var mockContext = [
		{
			access_token: '1234',
		},
	];

	it('shows a list of categories', async function () {
		mockedAxios.get.mockResolvedValue(response);

		act(function () {
			render(
				<TokenContext.Provider value={mockContext}>
					<Categories />
				</TokenContext.Provider>
			);
		});

		await waitFor(function () {
			var text = screen.getByText(/rock on/i);
			expect(text);
		});
	});
});
