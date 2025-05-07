import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { HireMe, linksArray } from './HireMe';

describe('HireMe tests', () => {
  it(' should display the h1 title.', () => {
    const { getByText } = render(<HireMe />);
    expect(getByText('Dragon Messmer')).toBeInTheDocument();
  });

  it('should toggle text expansion on click', async () => {
    render(<HireMe />);
    const toggleButton = screen.getByText('... Show more');
    expect(toggleButton).toBeInTheDocument();
    toggleButton.click();
    expect(await screen.findByText('Show less')).toBeInTheDocument();
    expect(
      await screen.findByText(/Dragon is a fantastic front-end developer/),
    ).toBeInTheDocument();
    toggleButton.click();
    expect(await screen.findByText('... Show more')).toBeInTheDocument();
    expect(await screen.queryByText(/Dragon is a fantastic front-end developer/)).toBeNull();
  });

  it('should render all links', () => {
    render(<HireMe />);
    linksArray.forEach((link) => {
      expect(screen.getByText(link.name)).toBeInTheDocument();
    });
  });

  it('should render extra text for links with extra property', () => {
    const { queryByText } = render(<HireMe />);
    linksArray.forEach((link) => {
      if (link.extra) {
        expect(queryByText(link.extra[0])).toBeInTheDocument();
      }
    });
  });
});
