import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "@/components/Footer"; // Update the import path based on the actual location of your Footer component

describe("Footer component", () => {
  afterEach(() => {
    cleanup();
  });

  it("should render properly", () => {
    render(<Footer />);

    const footer = screen.getByRole("contentinfo");
    const copyrightText = "© 2023 Your CompanyAbout Us";

    expect(footer).toBeInTheDocument();
    expect(footer).toHaveTextContent(copyrightText);
  });
});