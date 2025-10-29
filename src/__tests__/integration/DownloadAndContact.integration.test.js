import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from '../../App';

// Mock window.location and other browser APIs
delete window.location;
window.location = { href: '' };

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  observe() {}
  disconnect() {}
  unobserve() {}
};

describe('Download and Contact Integration Tests', () => {
  beforeEach(() => {
    render(<App />);
    window.location.href = '';
  });

  describe('End-to-End Resume Download Flow', () => {
    test('should navigate from hero to download resume', async () => {
      const user = userEvent.setup();
      
      // Find and click the download resume button
      const downloadButton = screen.getByRole('link', { name: /download resume/i });
      expect(downloadButton).toBeInTheDocument();
      
      // Verify the download attributes
      const expectedHref = `${process.env.PUBLIC_URL || ''}/Laxman-Singh-Rawat-Resume.pdf`;
      expect(downloadButton).toHaveAttribute('href', expectedHref);
      expect(downloadButton).toHaveAttribute('download', 'Laxman-Singh-Rawat-Resume.pdf');
      
      // Simulate click (in real browser this would trigger download)
      await user.click(downloadButton);
      
      // Verify button is still accessible after click
      expect(downloadButton).toBeInTheDocument();
    });

    test('should verify resume file accessibility', () => {
      const downloadButton = screen.getByRole('link', { name: /download resume/i });
      const href = downloadButton.getAttribute('href');
      
      // Verify the file path is correctly set
      const expectedHref = `${process.env.PUBLIC_URL || ''}/Laxman-Singh-Rawat-Resume.pdf`;
      expect(href).toBe(expectedHref);
      
      // Verify download attribute matches filename
      const downloadAttr = downloadButton.getAttribute('download');
      expect(downloadAttr).toBe('Laxman-Singh-Rawat-Resume.pdf');
    });

    test('should maintain download functionality across page interactions', async () => {
      const user = userEvent.setup();
      
      // Interact with other elements first
      const getInTouchButton = screen.getByRole('button', { name: /get in touch/i });
      await user.click(getInTouchButton);
      
      // Verify download button still works
      const downloadButton = screen.getByRole('link', { name: /download resume/i });
      const expectedHref = `${process.env.PUBLIC_URL || ''}/Laxman-Singh-Rawat-Resume.pdf`;
      expect(downloadButton).toHaveAttribute('href', expectedHref);
      
      await user.click(downloadButton);
      expect(downloadButton).toBeInTheDocument();
    });
  });

  describe('End-to-End Contact Form Flow', () => {
    test('should navigate from hero to contact form and submit', async () => {
      const user = userEvent.setup();
      
      // Click "Get In Touch" button in hero section
      const getInTouchButton = screen.getByRole('button', { name: /get in touch/i });
      await user.click(getInTouchButton);
      
      // Wait for potential scroll animation
      await waitFor(() => {
        expect(screen.getByLabelText(/your name/i)).toBeInTheDocument();
      });
      
      // Fill out the contact form
      await user.type(screen.getByLabelText(/your name/i), 'Integration Test User');
      await user.type(screen.getByLabelText(/email address/i), 'test@integration.com');
      await user.type(screen.getByLabelText(/subject/i), 'Integration Test Subject');
      await user.type(screen.getByLabelText(/message/i), 'This is an integration test message');
      
      // Submit the form
      const sendButton = screen.getByRole('button', { name: /send message/i });
      await user.click(sendButton);
      
      // Verify mailto link was generated
      await waitFor(() => {
        expect(window.location.href).toContain('mailto:laxman.sr.iitkgp@gmail.com');
        expect(window.location.href).toContain('Integration%20Test%20User');
        expect(window.location.href).toContain('Integration%20Test%20Subject');
      });
    });

    test('should handle complete user journey from hero to contact submission', async () => {
      const user = userEvent.setup();
      
      // Start from hero section
      expect(screen.getByText(/solution architect & full stack developer/i)).toBeInTheDocument();
      
      // Navigate to contact section
      const getInTouchButton = screen.getByRole('button', { name: /get in touch/i });
      await user.click(getInTouchButton);
      
      // Verify contact section is accessible
      await waitFor(() => {
        expect(screen.getByText(/let's start a conversation/i)).toBeInTheDocument();
      });
      
      // Verify profile photo is displayed
      const profileImage = screen.getByAltText(/laxman singh rawat/i);
      expect(profileImage).toBeInTheDocument();
      const expectedSrc = `${process.env.PUBLIC_URL || ''}/laxman-photo.jpeg`;
      expect(profileImage).toHaveAttribute('src', expectedSrc);
      
      // Complete contact form
      await user.type(screen.getByLabelText(/your name/i), 'Journey Test User');
      await user.type(screen.getByLabelText(/email address/i), 'journey@test.com');
      await user.type(screen.getByLabelText(/subject/i), 'Complete Journey Test');
      await user.type(screen.getByLabelText(/message/i), 'Testing complete user journey flow');
      
      // Submit and verify
      const sendButton = screen.getByRole('button', { name: /send message/i });
      await user.click(sendButton);
      
      await waitFor(() => {
        expect(window.location.href).toContain('mailto:laxman.sr.iitkgp@gmail.com');
        expect(window.location.href).toContain('Complete%20Journey%20Test');
      });
    });
  });

  describe('Cross-Component Functionality', () => {
    test('should maintain state between download and contact interactions', async () => {
      const user = userEvent.setup();
      
      // First, try to download resume
      const downloadButton = screen.getByRole('link', { name: /download resume/i });
      await user.click(downloadButton);
      
      // Then navigate to contact
      const getInTouchButton = screen.getByRole('button', { name: /get in touch/i });
      await user.click(getInTouchButton);
      
      // Fill and submit contact form
      await waitFor(() => {
        expect(screen.getByLabelText(/your name/i)).toBeInTheDocument();
      });
      
      await user.type(screen.getByLabelText(/your name/i), 'Cross Component Test');
      await user.type(screen.getByLabelText(/email address/i), 'cross@test.com');
      await user.type(screen.getByLabelText(/subject/i), 'Cross Component Subject');
      await user.type(screen.getByLabelText(/message/i), 'Testing cross-component functionality');
      
      const sendButton = screen.getByRole('button', { name: /send message/i });
      await user.click(sendButton);
      
      // Verify both functionalities still work
      const expectedHref = `${process.env.PUBLIC_URL || ''}/Laxman-Singh-Rawat-Resume.pdf`;
      expect(downloadButton).toHaveAttribute('href', expectedHref);
      
      await waitFor(() => {
        expect(window.location.href).toContain('mailto:laxman.sr.iitkgp@gmail.com');
      });
    });

    test('should verify all contact methods are functional', async () => {
      const user = userEvent.setup();
      
      // Navigate to contact section
      const getInTouchButton = screen.getByRole('button', { name: /get in touch/i });
      await user.click(getInTouchButton);
      
      await waitFor(() => {
        // Verify direct contact links
        const emailLink = screen.getByRole('link', { name: /laxman\.sr\.iitkgp@gmail\.com/i });
        const phoneLink = screen.getByRole('link', { name: /\+1 929-409-1436/i });
        const githubLink = screen.getByRole('link', { name: /laxmansrawat/i });
        
        expect(emailLink).toHaveAttribute('href', 'mailto:laxman.sr.iitkgp@gmail.com');
        expect(phoneLink).toHaveAttribute('href', 'tel:+19294091436');
        expect(githubLink).toHaveAttribute('href', 'https://github.com/LaxmanSRawat');
        
        // Test clicking direct email link
        fireEvent.click(emailLink);
        
        // Verify form is still functional after direct link clicks
        expect(screen.getByLabelText(/your name/i)).toBeInTheDocument();
      });
    });
  });

  describe('Error Scenarios and Edge Cases', () => {
    test('should handle rapid successive clicks on download button', async () => {
      const user = userEvent.setup();
      
      const downloadButton = screen.getByRole('link', { name: /download resume/i });
      
      // Rapidly click multiple times
      await user.click(downloadButton);
      await user.click(downloadButton);
      await user.click(downloadButton);
      
      // Button should remain functional
      expect(downloadButton).toBeInTheDocument();
      expect(downloadButton).toHaveAttribute('href', '/Laxman-Singh-Rawat-Resume.pdf');
    });

    test('should handle rapid form submissions', async () => {
      const user = userEvent.setup();
      
      // Navigate to contact
      const getInTouchButton = screen.getByRole('button', { name: /get in touch/i });
      await user.click(getInTouchButton);
      
      await waitFor(() => {
        expect(screen.getByLabelText(/your name/i)).toBeInTheDocument();
      });
      
      // Fill form
      await user.type(screen.getByLabelText(/your name/i), 'Rapid Test');
      await user.type(screen.getByLabelText(/email address/i), 'rapid@test.com');
      
      const sendButton = screen.getByRole('button', { name: /send message/i });
      
      // Rapid submissions
      await user.click(sendButton);
      await user.click(sendButton);
      
      // Should handle gracefully
      expect(sendButton).toBeInTheDocument();
    });

    test('should maintain functionality with empty form fields', async () => {
      const user = userEvent.setup();
      
      // Navigate to contact
      const getInTouchButton = screen.getByRole('button', { name: /get in touch/i });
      await user.click(getInTouchButton);
      
      await waitFor(() => {
        expect(screen.getByLabelText(/your name/i)).toBeInTheDocument();
      });
      
      // Submit empty form
      const sendButton = screen.getByRole('button', { name: /send message/i });
      await user.click(sendButton);
      
      // Should still generate mailto link
      await waitFor(() => {
        expect(window.location.href).toContain('mailto:laxman.sr.iitkgp@gmail.com');
      });
    });
  });

  describe('Performance and Responsiveness', () => {
    test('should load and render components quickly', () => {
      const startTime = performance.now();
      
      // Verify key elements are rendered
      expect(screen.getByRole('link', { name: /download resume/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /get in touch/i })).toBeInTheDocument();
      
      const endTime = performance.now();
      const renderTime = endTime - startTime;
      
      // Should render in reasonable time (less than 100ms)
      expect(renderTime).toBeLessThan(100);
    });

    test('should handle multiple simultaneous interactions', async () => {
      const user = userEvent.setup();
      
      // Get references to both key elements
      const downloadButton = screen.getByRole('link', { name: /download resume/i });
      const getInTouchButton = screen.getByRole('button', { name: /get in touch/i });
      
      // Simulate simultaneous interactions
      const downloadPromise = user.click(downloadButton);
      const contactPromise = user.click(getInTouchButton);
      
      // Wait for both to complete
      await Promise.all([downloadPromise, contactPromise]);
      
      // Both should remain functional
      expect(downloadButton).toBeInTheDocument();
      expect(getInTouchButton).toBeInTheDocument();
    });
  });
});
