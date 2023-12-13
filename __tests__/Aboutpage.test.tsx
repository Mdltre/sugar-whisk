/* eslint-disable react/display-name */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import AboutPage from "@/components/AboutPage";

jest.mock('next/image', () => ({ src, alt }) => <img src={src} alt={alt} />);

describe('AboutPage', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders AboutPage component', () => {
    render(<AboutPage />);

    // Check if information about the first person is rendered
    expect(screen.getByText(/Maria Jose P. Dela Torre/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Developer/i)).toHaveLength(2);
    expect(screen.getByText(/MJ is a passionate professional procrastinator/i)).toBeInTheDocument();

    // Check if information about the second person is rendered
    expect(screen.getByText(/Jaspreet Kaur/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Developer/i)).toHaveLength(2);
    expect(screen.getByText(/Jaspreet is an experienced software engineer/i)).toBeInTheDocument();
  });
});
