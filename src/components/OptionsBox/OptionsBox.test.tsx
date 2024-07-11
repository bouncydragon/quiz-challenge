import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { OptionsBox } from './index';

describe('OptionsBox Component', () => {
  const mockOnSelect = vi.fn();

  const defaultProps = {
    option: 'Option 1',
    optionLetter: 'answer_a',
    onSelect: mockOnSelect,
    isSelected: false,
  };

  it('should render the option and option letter correctly', () => {
    render(<OptionsBox {...defaultProps} />);
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('A')).toBeInTheDocument();
  });

  it('should apply the selected styles when isSelected is true', () => {
    render(<OptionsBox {...defaultProps} isSelected={true} />);
    const label = screen.getByText('Option 1').closest('label');
    expect(label).toHaveClass('bg-blue-700 dark:bg-gray-400');
  });

  it('should call onSelect with the correct option letter when clicked', () => {
    render(<OptionsBox {...defaultProps} />);
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(mockOnSelect).toHaveBeenCalledWith('answer_a');
  });
});
