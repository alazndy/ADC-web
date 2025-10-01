import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../src/app/page';

describe('Home Page', () => {
  it('should render the main heading', () => {
    render(<Home />);
    const heading = screen.getByRole('heading', {
      name: /Güvenlik ve Verimlilikte Yeni Dönem/i,
    });
    expect(heading).toBeInTheDocument();
  });
});
