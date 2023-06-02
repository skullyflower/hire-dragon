import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { HireMe } from './HireMe';

describe('HireMe tests', () => {
  it(' should display the component name and prop.', () => {
    const { getByText, queryByText } = render(<HireMe />);

    expect(getByText('About me, Dragon Messmer.')).toBeDefined();
  });
});
