import React from 'react';
import {render, waitFor, getByAltText, getByDisplayValue} from '@testing-library/react';
import {userEvent} from '@testing-library/user-event';
import {fetchShow as mockFetchShow, fetchShow} from './api/fetchShow';
import App from './App';

//mock out fetchShow with jest
jest.mock('./api/fetchShow');

test('shows fetching data message and calls api', async () => {
  mockFetchShow.mockResolvedValueOnce(data);
  const {getByText} = render(<App />);

  const fetchingMessage = getByText(/fetching data.../i);
  expect(fetchingMessage).toBeVisible();

  await waitFor(() => {
    /* const dropdown = getByPlaceholderText(/select an option/i);
    expect(dropdown).toBeVisible(); */
    expect(mockFetchShow).toHaveBeenCalledTimes(1);
  })
}); 

/* test('renders component and data correctly after api call', async () => {
  mockFetchShow.mockResolvedValueOnce(data);
  const {findByText, findByDisplayValue} = render(<App />);
  
  

  await waitFor(async () => {
    const dropdown = await findByDisplayValue(/select a season/i);
    userEvent.click(dropdown);

    const season1 = await findByText(/season 1/i);
    userEvent.click(season1);
    expect(dropdown).toBeVisible();
    expect(season1).toBeVisible();
  })
}); */


//mock data

const data = {
  image: { original: "original" },
  name: "name",
  summary: "<p>summary</p>",
  _embedded: {
    episodes: [
      {
        id: "1",
        image: { medium: "medium_image" },
        name: "name",
        season: 3,
        number: 2,
        summary: "<p>Summary</p>",
        runtime: 20,
      },
    ],
  },
};

