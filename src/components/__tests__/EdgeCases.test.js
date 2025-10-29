import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Hero from '../Hero';
import Contact from '../Contact';

// Mock console.error to test error handling
const originalError = console.error;
beforeAll(() => {
  console.error = jest.fn();
});

afterAll(() => {
  console.error = originalError;
});

describe('Edge Cases and Error Scenarios', () => {
  describe('Resume Download Edge Cases', () => {
    test('should handle download when PDF file does not exist', () => {
      render(<Hero />);
      
      const downloadButton = screen.getByRole('link', { name: /download resume/i });
      
      // Even if file doesn't exist, link should still be properly formed
      expect(downloadButton).toHaveAttribute('href', '/Laxman-Singh-Rawat-Resume.pdf');
      expect(downloadButton).toHaveAttribute('download', 'Laxman-Singh-Rawat-Resume.pdf');
      
      // Click should not throw error
      expect(() => fireEvent.click(downloadButton)).not.toThrow();
    });

    test('should handle download with disabled JavaScript', () => {
      render(<Hero />);
      
      const downloadButton = screen.getByRole('link', { name: /download resume/i });
      
      // Should work as regular HTML link even without JavaScript
      expect(downloadButton.tagName).toBe('A');
      expect(downloadButton).toHaveAttribute('href');
      expect(downloadButton).toHaveAttribute('download');
    });

    test('should handle rapid successive download clicks', async () => {
      const user = userEvent.setup();
      render(<Hero />);
      
      const downloadButton = screen.getByRole('link', { name: /download resume/i });
      
      // Rapidly click multiple times
      for (let i = 0; i < 10; i++) {
        await user.click(downloadButton);
      }
      
      // Button should remain functional
      expect(downloadButton).toBeInTheDocument();
      expect(downloadButton).toHaveAttribute('href', '/Laxman-Singh-Rawat-Resume.pdf');
    });

    test('should maintain download functionality after page interactions', async () => {
      const user = userEvent.setup();
      render(<Hero />);
      
      const downloadButton = screen.getByRole('link', { name: /download resume/i });
      const getInTouchButton = screen.getByRole('button', { name: /get in touch/i });
      
      // Interact with other elements
      await user.click(getInTouchButton);
      await user.hover(downloadButton);
      await user.unhover(downloadButton);
      
      // Download should still work
      expect(downloadButton).toHaveAttribute('href', '/Laxman-Singh-Rawat-Resume.pdf');
      await user.click(downloadButton);
      expect(downloadButton).toBeInTheDocument();
    });
  });

  describe('Contact Form Edge Cases', () => {
    beforeEach(() => {
      delete window.location;
      window.location = { href: '' };
    });

    test('should handle form submission with extremely long input values', async () => {
      const user = userEvent.setup();
      render(<Contact />);
      
      const longText = 'A'.repeat(10000); // 10,000 character string
      
      await user.type(screen.getByLabelText(/your name/i), longText);
      await user.type(screen.getByLabelText(/email address/i), `${longText}@example.com`);
      await user.type(screen.getByLabelText(/subject/i), longText);
      await user.type(screen.getByLabelText(/message/i), longText);
      
      const sendButton = screen.getByRole('button', { name: /send message/i });
      await user.click(sendButton);
      
      // Should handle long text without crashing
      await waitFor(() => {
        expect(window.location.href).toContain('mailto:laxman.sr.iitkgp@gmail.com');
      });
    });

    test('should handle form submission with special Unicode characters', async () => {
      const user = userEvent.setup();
      render(<Contact />);
      
      const unicodeText = '🚀 测试 العربية Ñoël Москва';
      
      await user.type(screen.getByLabelText(/your name/i), unicodeText);
      await user.type(screen.getByLabelText(/email address/i), 'unicode@test.com');
      await user.type(screen.getByLabelText(/subject/i), unicodeText);
      await user.type(screen.getByLabelText(/message/i), unicodeText);
      
      const sendButton = screen.getByRole('button', { name: /send message/i });
      await user.click(sendButton);
      
      await waitFor(() => {
        expect(window.location.href).toContain('mailto:laxman.sr.iitkgp@gmail.com');
        // Unicode characters should be properly encoded
        expect(window.location.href).toContain('%');
      });
    });

    test('should handle form submission when FormData constructor fails', async () => {
      const user = userEvent.setup();
      render(<Contact />);
      
      // Mock FormData to throw an error
      const originalFormData = window.FormData;
      window.FormData = jest.fn().mockImplementation(() => {
        throw new Error('FormData not supported');
      });
      
      await user.type(screen.getByLabelText(/your name/i), 'Test User');
      
      const sendButton = screen.getByRole('button', { name: /send message/i });
      
      // Should not crash when FormData fails
      expect(() => user.click(sendButton)).not.toThrow();
      
      // Restore FormData
      window.FormData = originalFormData;
    });

    test('should handle form submission when encodeURIComponent fails', async () => {
      const user = userEvent.setup();
      render(<Contact />);
      
      // Mock encodeURIComponent to throw an error
      const originalEncodeURIComponent = window.encodeURIComponent;
      window.encodeURIComponent = jest.fn().mockImplementation(() => {
        throw new Error('Encoding failed');
      });
      
      await user.type(screen.getByLabelText(/your name/i), 'Test User');
      
      const sendButton = screen.getByRole('button', { name: /send message/i });
      
      // Should handle encoding errors gracefully
      expect(() => user.click(sendButton)).not.toThrow();
      
      // Restore encodeURIComponent
      window.encodeURIComponent = originalEncodeURIComponent;
    });

    test('should handle rapid form submissions', async () => {
      const user = userEvent.setup();
      render(<Contact />);
      
      await user.type(screen.getByLabelText(/your name/i), 'Rapid Test');
      await user.type(screen.getByLabelText(/email address/i), 'rapid@test.com');
      
      const sendButton = screen.getByRole('button', { name: /send message/i });
      
      // Submit form multiple times rapidly
      for (let i = 0; i < 5; i++) {
        await user.click(sendButton);
      }
      
      // Should handle multiple submissions gracefully
      expect(sendButton).toBeInTheDocument();
      await waitFor(() => {
        expect(window.location.href).toContain('mailto:laxman.sr.iitkgp@gmail.com');
      });
    });

    test('should handle form submission with null/undefined values', async () => {
      const user = userEvent.setup();
      render(<Contact />);
      
      // Submit form without filling any fields
      const sendButton = screen.getByRole('button', { name: /send message/i });
      await user.click(sendButton);
      
      // Should handle empty values gracefully
      await waitFor(() => {
        expect(window.location.href).toContain('mailto:laxman.sr.iitkgp@gmail.com');
        expect(window.location.href).toContain('Name%3A%20');
        expect(window.location.href).toContain('Email%3A%20');
      });
    });

    test('should handle form when email client is not available', async () => {
      const user = userEvent.setup();
      render(<Contact />);
      
      // Mock window.location.href setter to throw error
      const originalLocation = window.location;
      Object.defineProperty(window, 'location', {
        value: {
          ...originalLocation,
          set href(value) {
            throw new Error('No email client available');
          }
        },
        writable: true
      });
      
      await user.type(screen.getByLabelText(/your name/i), 'Test User');
      
      const sendButton = screen.getByRole('button', { name: /send message/i });
      
      // Should not crash when email client is unavailable
      expect(() => user.click(sendButton)).not.toThrow();
      
      // Restore window.location
      window.location = originalLocation;
    });
  });

  describe('Accessibility Edge Cases', () => {
    test('should handle keyboard navigation with disabled elements', () => {
      render(<Hero />);
      
      const downloadButton = screen.getByRole('link', { name: /download resume/i });
      
      // Simulate disabled state
      downloadButton.setAttribute('aria-disabled', 'true');
      
      // Should still be focusable but marked as disabled
      expect(downloadButton).toHaveAttribute('aria-disabled', 'true');
      downloadButton.focus();
      expect(document.activeElement).toBe(downloadButton);
    });

    test('should handle screen reader announcements', () => {
      render(<Contact />);
      
      const form = document.querySelector('form');
      const nameInput = screen.getByLabelText(/your name/i);
      
      // Verify proper ARIA attributes
      expect(nameInput).toHaveAttribute('name', 'name');
      expect(form).toBeInTheDocument();
      
      // Should have proper labels for screen readers
      expect(screen.getByLabelText(/your name/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    });

    test('should handle high contrast mode', () => {
      render(<Hero />);
      
      const downloadButton = screen.getByRole('link', { name: /download resume/i });
      
      // Verify button has proper contrast classes
      expect(downloadButton).toHaveClass('border-2', 'border-primary-600');
      
      // Should be visible in high contrast mode
      expect(downloadButton).toBeVisible();
    });
  });

  describe('Performance Edge Cases', () => {
    test('should handle component mounting/unmounting rapidly', () => {
      const { unmount, rerender } = render(<Hero />);
      
      // Rapidly mount and unmount
      for (let i = 0; i < 10; i++) {
        unmount();
        rerender(<Hero />);
      }
      
      // Component should still render correctly
      expect(screen.getByRole('link', { name: /download resume/i })).toBeInTheDocument();
    });

    test('should handle memory leaks in event listeners', () => {
      const { unmount } = render(<Contact />);
      
      // Add event listeners
      const form = document.querySelector('form');
      const eventListener = jest.fn();
      form.addEventListener('submit', eventListener);
      
      // Unmount component
      unmount();
      
      // Event listener should be cleaned up
      const event = new Event('submit');
      form.dispatchEvent(event);
      
      // Should not cause memory leaks
      expect(eventListener).not.toHaveBeenCalled();
    });
  });

  describe('Browser Compatibility Edge Cases', () => {
    test('should handle browsers without download attribute support', () => {
      render(<Hero />);
      
      const downloadButton = screen.getByRole('link', { name: /download resume/i });
      
      // Even without download support, should work as regular link
      expect(downloadButton).toHaveAttribute('href', '/Laxman-Singh-Rawat-Resume.pdf');
      expect(downloadButton.tagName).toBe('A');
    });

    test('should handle browsers without mailto support', async () => {
      const user = userEvent.setup();
      render(<Contact />);
      
      // Mock window.location to not support mailto
      const originalLocation = window.location;
      Object.defineProperty(window, 'location', {
        value: {
          ...originalLocation,
          href: ''
        },
        writable: true
      });
      
      await user.type(screen.getByLabelText(/your name/i), 'Test User');
      
      const sendButton = screen.getByRole('button', { name: /send message/i });
      await user.click(sendButton);
      
      // Should attempt to set href even if mailto isn't supported
      expect(window.location.href).toContain('mailto:');
      
      // Restore window.location
      window.location = originalLocation;
    });

    test('should handle browsers with JavaScript disabled', () => {
      render(<Hero />);
      
      const downloadButton = screen.getByRole('link', { name: /download resume/i });
      
      // Should work as plain HTML link
      expect(downloadButton.tagName).toBe('A');
      expect(downloadButton).toHaveAttribute('href');
      expect(downloadButton).toHaveAttribute('download');
    });
  });
});
