import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer Component", () => {
  it("renders the footer content correctly", () => {
    render(<Footer />);

    const footerContent = screen.getByText("This is the footer content");
    expect(footerContent).toBeInTheDocument();
  });
});