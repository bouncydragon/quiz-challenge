import '@testing-library/jest-dom';
import { LandingPage } from '.';
import { renderWithRouter } from '../../test/renderWithRouter';

describe('LandingPage', () => {
  it('should render correctly', () => {
    const { getByText, getByAltText } = renderWithRouter(<LandingPage />);
    expect(getByText('QUIZZLER')).toBeInTheDocument();
    expect(getByText('BY:')).toBeInTheDocument();
    expect(getByAltText('forge logo')).toBeInTheDocument();
    expect(getByText("Let's start the quiz→")).toBeInTheDocument();
  });
});
