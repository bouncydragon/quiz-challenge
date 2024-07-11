import '@testing-library/jest-dom';
import { SuccessPage } from '.';
import { renderWithRouter } from '../../test/renderWithRouter';

describe('SuccessPage', () => {
  it('should render correctly', () => {
    const { getByText } = renderWithRouter(<SuccessPage />);

    expect(getByText('BRAVO!')).toBeInTheDocument();
    expect(getByText('You have scored')).toBeInTheDocument();
    expect(getByText('Wanna Play Again?')).toBeInTheDocument();
  });
});
