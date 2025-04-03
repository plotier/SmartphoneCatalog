import { render, screen } from "@testing-library/react";
import ResultsLength from '../../components/ui/ResultsLength';
import '@testing-library/jest-dom';
describe("ResultsLength component", () => {
  it("should render singular result when results is 1", () => {
    render(<ResultsLength results={1} />);
    expect(screen.getByText("1 RESULT")).toBeInTheDocument();
  });

  it("should render plural results when results is greater than 1", () => {
    render(<ResultsLength results={5} />);
    expect(screen.getByText("5 RESULTS")).toBeInTheDocument();
  });

  it("should render zero results correctly", () => {
    render(<ResultsLength results={0} />);
    expect(screen.getByText("0 RESULTS")).toBeInTheDocument();
  });
});
