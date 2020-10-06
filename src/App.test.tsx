import React from 'react';
import { render, act, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

afterEach(cleanup);

test('navigate to details page', async () => {
  const { findByText, getByText } = render(<App />);
  await act(async () => {
    // find link on home page
    const oysterLink = await findByText(
      /Oyster Grilling in Historic Mid-City/i
    );
    userEvent.click(oysterLink);

    // confirm contents are present
    const oysterHeading = await findByText(
      /Oyster Grilling in Historic Mid-City/i
    );
    expect(oysterHeading).toBeInTheDocument();

    expect(
      getByText(
        /We'll meet at Jazz after Dark. After introductions and a complementary cocktail, we'll move to the courtyard for a hands-on oyster preparation and cooking demo./i
      )
    ).toBeInTheDocument();

    expect(getByText(/Cooking Class/i)).toBeInTheDocument();

    expect(getByText(/Aneesa Travis/i)).toBeInTheDocument();
  });
});
