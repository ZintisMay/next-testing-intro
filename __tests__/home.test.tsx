import { render, screen } from "@testing-library/react";
import Home from "../app/page";

describe("Home", () => {
  // AAA pattern, arrange, action, assertion
  it("should have Docs text", () => {
    render(<Home />); // Arrange
    const target = screen.getByText("Docs"); //action
    expect(target).toBeInTheDocument(); //assertion
  });

  it("should contain text information", () => {
    render(<Home />);
    const target = screen.getByText(/information/i);
    expect(target).toBeInTheDocument();
  });

  it("should have a heading tag", () => {
    render(<Home />);
    // name is text inside?
    const target = screen.getByRole("heading", { name: "Learn" });
    expect(target).toBeInTheDocument();
  });
  it("should have a classname Home", () => {
    render(<Home />);
    // name is text inside?
    const target = screen.getByRole("heading", { name: "Learn" });
    expect(target).toBeInTheDocument();
  });
});
