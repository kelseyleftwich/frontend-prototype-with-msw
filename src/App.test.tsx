import React from 'react';
import { render, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders learn react link', async () => {
  const { getByText, debug } = render(<App />);
  await act(() => {
    const oysterLink = getByText(/Oyster Grilling in Historic Mid-City/i);
    userEvent.click(oysterLink);
    debug();
  });
});
