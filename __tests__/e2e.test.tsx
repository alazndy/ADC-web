import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../src/app/page';
import About from '../src/app/hakkimizda/page';
import Services from '../src/app/hizmetler/page';
import Projects from '../src/app/projeler/page';
import Sectors from '../src/app/sektorler/page';
import TechSolutions from '../src/app/teknoloji-cozumleri/page';
import Products from '../src/app/urunler/page';
import Contact from '../src/app/iletisim/page';
import PrivacyPolicy from '../src/app/gizlilik-politikasi/page';
import TermsOfUse from '../src/app/kullanim-sartlari/page';

describe('E2E Tests', () => {
  // Homepage Tests
  describe('Homepage', () => {
    it('should render all homepage sections', async () => {
      render(<Home />);
      await waitFor(() => {
        expect(screen.getByRole('heading', { name: /Güvenlik ve Verimlilikte Yeni Dönem/i })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: /Öne Çıkan Teknolojiler/i })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: /Kapsamlı Çözüm ve Hizmetlerimiz/i })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: /Her Sektöre Özel Uzmanlık/i })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: /Başarı Hikayelerimiz/i })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: /Filonuzu Geleceğe Taşımaya Hazır Mısınız?/i })).toBeInTheDocument();
      });
    });
  });

  // Navigation Tests
  describe('Navigation', () => {
    it('should navigate to all main pages from the homepage', async () => {
      render(<Home />);
      
      const aboutLink = await screen.findAllByRole('link', { name: /hakkımızda/i });
      fireEvent.click(aboutLink[0]);
      await waitFor(() => {
        render(<About />);
        expect(screen.getByRole('heading', { name: /Hakkımızda/i })).toBeInTheDocument();
      });

      const servicesLink = await screen.findAllByRole('link', { name: /hizmetler/i });
      fireEvent.click(servicesLink[0]);
      await waitFor(() => {
        render(<Services />);
        expect(screen.getByRole('heading', { name: /Hizmetlerimiz/i })).toBeInTheDocument();
      });

      const projectsLink = await screen.findAllByRole('link', { name: /projeler/i });
      fireEvent.click(projectsLink[0]);
      await waitFor(() => {
        render(<Projects />);
        expect(screen.getByRole('heading', { name: /Projelerimiz/i })).toBeInTheDocument();
      });

      const sectorsLink = await screen.findAllByRole('link', { name: /sektörler/i });
      fireEvent.click(sectorsLink[0]);
      await waitFor(() => {
        render(<Sectors />);
        expect(screen.getByRole('heading', { name: /Sektörler/i })).toBeInTheDocument();
      });

      const techSolutionsLink = await screen.findAllByRole('link', { name: /teknoloji çözümleri/i });
      fireEvent.click(techSolutionsLink[0]);
      await waitFor(() => {
        render(<TechSolutions />);
        expect(screen.getByRole('heading', { name: /Teknoloji Çözümleri/i })).toBeInTheDocument();
      });

      const productsLink = await screen.findAllByRole('link', { name: /ürünler/i });
      fireEvent.click(productsLink[0]);
      await waitFor(() => {
        render(<Products />);
        expect(screen.getByRole('heading', { name: /Ürünler/i })).toBeInTheDocument();
      });

      const contactLink = await screen.findAllByRole('link', { name: /iletişim/i });
      fireEvent.click(contactLink[0]);
      await waitFor(() => {
        render(<Contact />);
        expect(screen.getByRole('heading', { name: /İletişim/i })).toBeInTheDocument();
      });
    });
  });

  // Footer Navigation Tests
  describe('Footer Navigation', () => {
    it('should navigate to privacy policy and terms of use', async () => {
      render(<Home />);

      const privacyLink = await screen.findAllByRole('link', { name: /gizlilik politikası/i });
      fireEvent.click(privacyLink[0]);
      await waitFor(() => {
        render(<PrivacyPolicy />);
        expect(screen.getByRole('heading', { name: /Gizlilik Politikası/i })).toBeInTheDocument();
      });

      const termsLink = await screen.findAllByRole('link', { name: /kullanım şartları/i });
      fireEvent.click(termsLink[0]);
      await waitFor(() => {
        render(<TermsOfUse />);
        expect(screen.getByRole('heading', { name: /Kullanım Şartları/i })).toBeInTheDocument();
      });
    });
  });
});
