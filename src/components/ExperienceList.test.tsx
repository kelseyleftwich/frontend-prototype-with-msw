import React from 'react';
import { waitFor } from '@testing-library/dom';
import { render, act, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

afterEach(cleanup);

test('filter tours list', async () => {
  const { findByLabelText, findByText, getAllByRole } = render(<App />);

  await act(async () => {
    const search = await findByLabelText(/Search/i);
    await waitFor(() => {
      expect(getAllByRole('listitem').length).toBe(2);
    });
    userEvent.type(search, 'Oys');
    await findByText(/Oyster Grilling in Historic Mid-City/i);
    expect(getAllByRole('listitem').length).toBe(1);
  });
});
