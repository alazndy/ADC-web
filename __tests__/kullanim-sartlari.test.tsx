import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import KullanimSartlariPage from '../src/app/kullanim-sartlari/page';

describe('Kullanım Şartları Page', () => {
  it('should render the heading', () => {
    render(<KullanimSartlariPage />);
    const heading = screen.getByRole('heading', { name: /Kullanım Şartları/i });
    expect(heading).toBeInTheDocument();
  });

  it('should render key text content', () => {
    render(<KullanimSartlariPage />);
    const text = screen.getByText(/Bu kısıtlamalardan herhangi birini ihlal etmeniz durumunda bu lisans otomatik olarak sona erer/i);
    expect(text).toBeInTheDocument();
  });
});
