import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { Question } from './index';

describe('Question Component', () => {
  it('should render the question text correctly', async () => {
    const questionText = 'What is Javascript?';
    render(<Question question={questionText} />);
    await waitFor(() => {
      expect(screen.getByText(questionText)).toBeInTheDocument();
    });
  });
});
