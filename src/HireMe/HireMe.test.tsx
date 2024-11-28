import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { HireMe, linksArray } from './HireMe';

describe('HireMe tests', () => {
  it(' should display the h1 title.', () => {
    const { getByText } = render(<HireMe />);
    expect(getByText('About me, Dragon Messmer.')).toBeDefined();
  });

  it('should display the h1 title', () => {
    const { getByText } = render(<HireMe />);
    expect(getByText('Dragon Messmer')).toBeDefined();
  });

  it('should toggle text expansion on click', () => {
    const { getByText, queryByText } = render(<HireMe />);
    const toggleButton = getByText('... Show more');
    toggleButton.click();
    expect(getByText('Show less')).toBeDefined();
    expect(getByText(/Dragon is a fantastic front-end developer/)).toBeDefined();
    toggleButton.click();
    expect(getByText('... Show more')).toBeDefined();
    expect(queryByText(/Dragon is a fantastic front-end developer/)).toBeNull();
  });

  it('should render all links', () => {
    const { getByText } = render(<HireMe />);
    linksArray.forEach((link) => {
      expect(getByText(link.name)).toBeDefined();
    });
  });

  it('should render extra text for links with extra property', () => {
    const { getByText } = render(<HireMe />);
    linksArray.forEach((link) => {
      if (link.extra) {
        expect(getByText(link.extra)).toBeDefined();
      }
    });
  });
});
