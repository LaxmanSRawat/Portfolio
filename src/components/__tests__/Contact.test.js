import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Contact from '../Contact';

// Mock window.location for testing
delete window.location;
window.location = { href: '' };

describe('Contact Component', () => {
  beforeEach(() => {
    render(<Contact />);
    // Reset window.location.href before each test
    window.location.href = '';
  });

  describe('Contact Form Rendering', () => {
    test('should render contact form with all fields', () => {
      expect(screen.getByLabelText(/your name/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/subject/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    });

    test('should render send message button', () => {
      const sendButton = screen.getByRole('button', { name: /send message/i });
      expect(sendButton).toBeInTheDocument();
      expect(sendButton).toHaveAttribute('type', 'submit');
    });

    test('should have proper form structure', () => {
      const form = screen.getByRole('form', { name: /send a message/i }) || 
                   document.querySelector('form');
      expect(form).toBeInTheDocument();
    });
  });

  describe('Send Message Functionality', () => {
    test('should handle form submission with valid data', async () => {
      const user = userEvent.setup();
      
      // Fill out the form
      await user.type(screen.getByLabelText(/your name/i), 'John Doe');
      await user.type(screen.getByLabelText(/email address/i), 'john@example.com');
      await user.type(screen.getByLabelText(/subject/i), 'Test Subject');
      await user.type(screen.getByLabelText(/message/i), 'This is a test message');
      
      // Submit the form
      const sendButton = screen.getByRole('button', { name: /send message/i });
      await user.click(sendButton);
      
      // Check if mailto link was generated correctly
      await waitFor(() => {
        expect(window.location.href).toContain('mailto:laxman.sr.iitkgp@gmail.com');
        expect(window.location.href).toContain('subject=Test%20Subject');
        expect(window.location.href).toContain('Name%3A%20John%20Doe');
        expect(window.location.href).toContain('Email%3A%20john%40example.com');
        expect(window.location.href).toContain('This%20is%20a%20test%20message');
      });
    });

    test('should handle form submission with special characters', async () => {
      const user = userEvent.setup();
      
      await user.type(screen.getByLabelText(/your name/i), 'José García');
      await user.type(screen.getByLabelText(/email address/i), 'jose@test.com');
      await user.type(screen.getByLabelText(/subject/i), 'Test & Special Characters!');
      await user.type(screen.getByLabelText(/message/i), 'Message with special chars: @#$%');
      
      const sendButton = screen.getByRole('button', { name: /send message/i });
      await user.click(sendButton);
      
      await waitFor(() => {
        expect(window.location.href).toContain('mailto:laxman.sr.iitkgp@gmail.com');
        expect(window.location.href).toContain('Jos%C3%A9%20Garc%C3%ADa');
        expect(window.location.href).toContain('Test%20%26%20Special%20Characters!');
      });
    });

    test('should handle empty form submission', async () => {
      const user = userEvent.setup();
      
      const sendButton = screen.getByRole('button', { name: /send message/i });
      await user.click(sendButton);
      
      await waitFor(() => {
        expect(window.location.href).toContain('mailto:laxman.sr.iitkgp@gmail.com');
        expect(window.location.href).toContain('Name%3A%20');
        expect(window.location.href).toContain('Email%3A%20');
      });
    });

    test('should prevent default form submission', async () => {
      const user = userEvent.setup();
      
      const form = document.querySelector('form');
      const preventDefaultSpy = jest.fn();
      
      form.addEventListener('submit', (e) => {
        preventDefaultSpy();
        e.preventDefault();
      });
      
      const sendButton = screen.getByRole('button', { name: /send message/i });
      await user.click(sendButton);
      
      expect(preventDefaultSpy).toHaveBeenCalled();
    });

    test('should have correct email format in mailto link', async () => {
      const user = userEvent.setup();
      
      await user.type(screen.getByLabelText(/your name/i), 'Test User');
      await user.type(screen.getByLabelText(/email address/i), 'test@example.com');
      await user.type(screen.getByLabelText(/subject/i), 'Test Subject');
      await user.type(screen.getByLabelText(/message/i), 'Test Message');
      
      const sendButton = screen.getByRole('button', { name: /send message/i });
      await user.click(sendButton);
      
      await waitFor(() => {
        const href = window.location.href;
        expect(href).toMatch(/^mailto:laxman\.sr\.iitkgp@gmail\.com\?/);
        expect(href).toContain('subject=');
        expect(href).toContain('body=');
      });
    });
  });

  describe('Form Validation and UX', () => {
    test('should have proper input types', () => {
      expect(screen.getByLabelText(/your name/i)).toHaveAttribute('type', 'text');
      expect(screen.getByLabelText(/email address/i)).toHaveAttribute('type', 'email');
      expect(screen.getByLabelText(/subject/i)).toHaveAttribute('type', 'text');
    });

    test('should have proper placeholders', () => {
      expect(screen.getByLabelText(/your name/i)).toHaveAttribute('placeholder', 'John Doe');
      expect(screen.getByLabelText(/email address/i)).toHaveAttribute('placeholder', 'john@example.com');
      expect(screen.getByLabelText(/subject/i)).toHaveAttribute('placeholder', 'Project Collaboration Opportunity');
      expect(screen.getByLabelText(/message/i)).toHaveAttribute('placeholder', 'Tell me about your project or opportunity...');
    });

    test('should have proper name attributes for form data', () => {
      expect(screen.getByLabelText(/your name/i)).toHaveAttribute('name', 'name');
      expect(screen.getByLabelText(/email address/i)).toHaveAttribute('name', 'email');
      expect(screen.getByLabelText(/subject/i)).toHaveAttribute('name', 'subject');
      expect(screen.getByLabelText(/message/i)).toHaveAttribute('name', 'message');
    });

    test('should have proper styling classes', () => {
      const nameInput = screen.getByLabelText(/your name/i);
      expect(nameInput).toHaveClass('bg-github-900', 'border-github-border', 'text-github-50');
    });
  });

  describe('Contact Information Display', () => {
    test('should display profile photo', () => {
      const profileImage = screen.getByAltText(/laxman singh rawat/i);
      expect(profileImage).toBeInTheDocument();
      expect(profileImage).toHaveAttribute('src', '/laxman-photo.jpeg');
    });

    test('should display all contact methods', () => {
      expect(screen.getByText(/laxman\.sr\.iitkgp@gmail\.com/i)).toBeInTheDocument();
      expect(screen.getByText(/\+1 929-409-1436/i)).toBeInTheDocument();
      expect(screen.getByText(/laxmansrawat/i)).toBeInTheDocument();
      expect(screen.getByText(/ny, usa/i)).toBeInTheDocument();
    });

    test('should have working contact links', () => {
      const emailLink = screen.getByRole('link', { name: /laxman\.sr\.iitkgp@gmail\.com/i });
      const phoneLink = screen.getByRole('link', { name: /\+1 929-409-1436/i });
      const githubLink = screen.getByRole('link', { name: /laxmansrawat/i });
      
      expect(emailLink).toHaveAttribute('href', 'mailto:laxman.sr.iitkgp@gmail.com');
      expect(phoneLink).toHaveAttribute('href', 'tel:+19294091436');
      expect(githubLink).toHaveAttribute('href', 'https://github.com/LaxmanSRawat');
    });
  });

  describe('Accessibility', () => {
    test('should have proper form labels', () => {
      expect(screen.getByLabelText(/your name/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/subject/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    });

    test('should have proper heading structure', () => {
      const mainHeading = screen.getByRole('heading', { name: /get in touch/i });
      const formHeading = screen.getByRole('heading', { name: /send a message/i });
      
      expect(mainHeading).toBeInTheDocument();
      expect(formHeading).toBeInTheDocument();
    });

    test('should have proper alt text for images', () => {
      const profileImage = screen.getByAltText(/laxman singh rawat/i);
      expect(profileImage).toBeInTheDocument();
    });

    test('should be keyboard navigable', () => {
      const nameInput = screen.getByLabelText(/your name/i);
      const emailInput = screen.getByLabelText(/email address/i);
      const subjectInput = screen.getByLabelText(/subject/i);
      const messageInput = screen.getByLabelText(/message/i);
      const sendButton = screen.getByRole('button', { name: /send message/i });
      
      expect(nameInput).not.toHaveAttribute('tabindex', '-1');
      expect(emailInput).not.toHaveAttribute('tabindex', '-1');
      expect(subjectInput).not.toHaveAttribute('tabindex', '-1');
      expect(messageInput).not.toHaveAttribute('tabindex', '-1');
      expect(sendButton).not.toHaveAttribute('tabindex', '-1');
    });
  });

  describe('Error Handling', () => {
    test('should handle form submission when FormData is not available', async () => {
      // Mock FormData to throw an error
      const originalFormData = window.FormData;
      window.FormData = jest.fn().mockImplementation(() => {
        throw new Error('FormData not available');
      });
      
      const user = userEvent.setup();
      const sendButton = screen.getByRole('button', { name: /send message/i });
      
      // Should not crash when FormData throws error
      expect(() => user.click(sendButton)).not.toThrow();
      
      // Restore FormData
      window.FormData = originalFormData;
    });

    test('should handle missing form elements gracefully', () => {
      // Remove form from DOM temporarily
      const form = document.querySelector('form');
      const parent = form.parentNode;
      parent.removeChild(form);
      
      // Re-render component
      render(<Contact />);
      
      // Should still render without crashing
      expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
    });
  });
});
