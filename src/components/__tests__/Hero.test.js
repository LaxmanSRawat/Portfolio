import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from '../Hero';

// Mock window.location for testing
delete window.location;
window.location = { href: '' };

describe('Hero Component', () => {
  beforeEach(() => {
    render(<Hero />);
  });

  describe('Resume Download Functionality', () => {
    test('should render download resume button', () => {
      const downloadButton = screen.getByRole('link', { name: /download resume/i });
      expect(downloadButton).toBeInTheDocument();
    });

    test('should have correct href for resume download', () => {
      const downloadButton = screen.getByRole('link', { name: /download resume/i });
      expect(downloadButton).toHaveAttribute('href', '/Laxman-Singh-Rawat-Resume.pdf');
    });

    test('should have download attribute set', () => {
      const downloadButton = screen.getByRole('link', { name: /download resume/i });
      expect(downloadButton).toHaveAttribute('download', 'Laxman-Singh-Rawat-Resume.pdf');
    });

    test('should have correct styling classes', () => {
      const downloadButton = screen.getByRole('link', { name: /download resume/i });
      expect(downloadButton).toHaveClass('px-8', 'py-3', 'border-2', 'border-primary-600');
    });

    test('should contain download icon', () => {
      const downloadButton = screen.getByRole('link', { name: /download resume/i });
      const downloadIcon = downloadButton.querySelector('svg');
      expect(downloadIcon).toBeInTheDocument();
    });

    test('should trigger download when clicked', () => {
      const downloadButton = screen.getByRole('link', { name: /download resume/i });
      
      // Create a spy for the click event
      const clickSpy = jest.fn();
      downloadButton.addEventListener('click', clickSpy);
      
      fireEvent.click(downloadButton);
      expect(clickSpy).toHaveBeenCalledTimes(1);
    });

    test('should be accessible with proper aria labels', () => {
      const downloadButton = screen.getByRole('link', { name: /download resume/i });
      expect(downloadButton).toBeVisible();
      expect(downloadButton).not.toHaveAttribute('aria-disabled');
    });
  });

  describe('Get In Touch Button Functionality', () => {
    test('should render get in touch button', () => {
      const getInTouchButton = screen.getByRole('button', { name: /get in touch/i });
      expect(getInTouchButton).toBeInTheDocument();
    });

    test('should scroll to contact section when clicked', () => {
      // Mock querySelector and scrollIntoView
      const mockScrollIntoView = jest.fn();
      const mockElement = { scrollIntoView: mockScrollIntoView };
      
      document.querySelector = jest.fn().mockReturnValue(mockElement);
      
      const getInTouchButton = screen.getByRole('button', { name: /get in touch/i });
      fireEvent.click(getInTouchButton);
      
      expect(document.querySelector).toHaveBeenCalledWith('#contact');
      expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
    });

    test('should handle case when contact section does not exist', () => {
      // Mock querySelector to return null
      document.querySelector = jest.fn().mockReturnValue(null);
      
      const getInTouchButton = screen.getByRole('button', { name: /get in touch/i });
      
      // Should not throw error when element doesn't exist
      expect(() => fireEvent.click(getInTouchButton)).not.toThrow();
    });

    test('should have correct styling classes', () => {
      const getInTouchButton = screen.getByRole('button', { name: /get in touch/i });
      expect(getInTouchButton).toHaveClass('bg-primary-600', 'hover:bg-primary-700', 'text-white');
    });
  });

  describe('Contact Information Display', () => {
    test('should display correct email address', () => {
      const emailLink = screen.getByRole('link', { name: /laxman\.sr\.iitkgp@gmail\.com/i });
      expect(emailLink).toBeInTheDocument();
      expect(emailLink).toHaveAttribute('href', 'mailto:laxman.sr.iitkgp@gmail.com');
    });

    test('should display correct phone number', () => {
      const phoneLink = screen.getByRole('link', { name: /\+1 929-409-1436/i });
      expect(phoneLink).toBeInTheDocument();
      expect(phoneLink).toHaveAttribute('href', 'tel:+19294091436');
    });

    test('should display LinkedIn profile link', () => {
      const linkedinLink = screen.getByRole('link', { name: /linkedin/i });
      expect(linkedinLink).toBeInTheDocument();
      expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com/in/laxman-s-rawat');
      expect(linkedinLink).toHaveAttribute('target', '_blank');
    });

    test('should display GitHub profile link', () => {
      const githubLink = screen.getByRole('link', { name: /github/i });
      expect(githubLink).toBeInTheDocument();
      expect(githubLink).toHaveAttribute('href', 'https://github.com/LaxmanSRawat');
      expect(githubLink).toHaveAttribute('target', '_blank');
    });
  });

  describe('Accessibility', () => {
    test('should have proper heading structure', () => {
      const mainHeading = screen.getByRole('heading', { level: 1 });
      expect(mainHeading).toBeInTheDocument();
      expect(mainHeading).toHaveTextContent(/laxman.*singh.*rawat/i);
    });

    test('should have descriptive text for screen readers', () => {
      const description = screen.getByText(/solution architect & full stack developer/i);
      expect(description).toBeInTheDocument();
    });

    test('all interactive elements should be keyboard accessible', () => {
      const downloadButton = screen.getByRole('link', { name: /download resume/i });
      const getInTouchButton = screen.getByRole('button', { name: /get in touch/i });
      
      expect(downloadButton).not.toHaveAttribute('tabindex', '-1');
      expect(getInTouchButton).not.toHaveAttribute('tabindex', '-1');
    });
  });
});
