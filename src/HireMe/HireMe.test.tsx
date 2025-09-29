import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import textValues from './hireMe.json';
import { HireMe } from './HireMe';

const { linksArray } = textValues;
describe('HireMe tests', () => {
  it(' should display the h1 title.', () => {
    const { getByText } = render(<HireMe />);
    expect(getByText('Dragon Messmer')).toBeInTheDocument();
  });

  it('should toggle text expansion on click', async () => {
    render(<HireMe />);
    const showMore = screen.getByText('... Show more');
    expect(showMore).toBeInTheDocument();
    showMore.click();
    expect(await screen.findByText('Show less')).toBeInTheDocument();
    expect(
      await screen.findByText(/Dragon is a fantastic front-end developer/),
    ).toBeInTheDocument();
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
      if (link.extra && link.extra[0].length) {
        expect(queryByText(link.extra[0])).toBeInTheDocument();
      }
    });
  });
});
