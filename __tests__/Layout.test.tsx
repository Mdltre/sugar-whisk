import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Layout from '@/components/Layout';

describe('Layout', () => {
  it('renders Layout component with children and Footer', () => {
    // Mock child components
    const ChildComponent = () => <div>Child Content</div>;

    render(
      <Layout>
        <ChildComponent />
      </Layout>
    );

    // Check if the child content is rendered
    expect(screen.getByText(/Child Content/i)).toBeInTheDocument();

    // Check if the Footer component is rendered
    expect(screen.getByText(/About Us/i)).toBeInTheDocument(); // Assuming the "About Us" link from Footer is present
  });
});
