import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { HireMe } from './HireMe';

describe('HireMe tests', () => {
  it(' should display the h1 title.', () => {
    const { getByText } = render(<HireMe />);
    expect(getByText('About me, Dragon Messmer.')).toBeDefined();
  });
});
