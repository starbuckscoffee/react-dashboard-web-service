import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';

const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

test('renders navbar with dashboard title', () => {
  renderWithRouter(<Navbar />);
  const dashboardTitle = screen.getByText('Dashboard');
  expect(dashboardTitle).toBeInTheDocument();
});

test('renders all navigation links', () => {
  renderWithRouter(<Navbar />);
  
  expect(screen.getByText('Home')).toBeInTheDocument();
  expect(screen.getByText('Register')).toBeInTheDocument();
  expect(screen.getByText('About')).toBeInTheDocument();
  expect(screen.getByText('Version')).toBeInTheDocument();
});