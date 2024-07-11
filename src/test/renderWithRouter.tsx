import { render, RenderResult } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

export const renderWithRouter = (ui: React.ReactElement): RenderResult => {
  return render(<MemoryRouter>{ui}</MemoryRouter>);
};
