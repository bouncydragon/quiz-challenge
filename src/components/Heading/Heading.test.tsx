import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Heading } from './index';

describe('Heading Component', () => {
  const Component = () => render(<Heading currentCount={2} totalNo={5} />);

  it('should render correctly with given props', () => {
    const { getByText } = Component();
    expect(getByText('Question 3/5')).toBeInTheDocument();
  });
});
