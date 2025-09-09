import { render, screen } from '@testing-library/react';
import App from './App';

test('renders dashboard navbar', () => {
  render(<App />);
  const dashboardElement = screen.getByText(/Dashboard/i);
  expect(dashboardElement).toBeInTheDocument();
});

test('renders home page by default', () => {
  render(<App />);
  const homeElement = screen.getByText(/Welcome to the Dashboard Web Service!/i);
  expect(homeElement).toBeInTheDocument();
});

test('renders navigation links', () => {
  render(<App />);
  const homeLink = screen.getByText(/Home/);
  const registerLink = screen.getByText(/Register/);
  const aboutLink = screen.getByText(/About/);
  const versionLink = screen.getByText(/Version/);
  
  expect(homeLink).toBeInTheDocument();
  expect(registerLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
  expect(versionLink).toBeInTheDocument();
});
