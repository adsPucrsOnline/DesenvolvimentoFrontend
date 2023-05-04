// Counter.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Counter from "./Counter";

describe("<Counter />", () => {
  test("Counter increments and decrements correctly", () => {
    render(<Counter />);
    const incrementButton = screen.getByTestId("increment", {
      name: "Increment",
    });

    const decrementButton = screen.getByTestId("decrement", {
      name: "Decrement",
    });

    const countDisplay = screen.getByTestId("countdisplay", {
      name: "Count: 0",
    });

    expect(countDisplay).toBeInTheDocument();

    fireEvent.click(incrementButton);

    const countOne = screen.getByTestId("countdisplay", { name: "Count: 1" });

    expect(countOne).toBeInTheDocument();

    fireEvent.click(decrementButton);

    const countZero = screen.getByTestId("countdisplay", { name: "Count: 1" });

    expect(countZero).toBeInTheDocument();
  });
});
