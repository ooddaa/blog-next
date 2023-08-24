import "@testing-library/jest-dom";
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required
// https://github.com/testing-library/react-testing-library
import * as React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import SplitPanes from "./SplitPanes";

test("should render main container", () => {
  /**@NOTE not recommended approach */

  const { container } = render(<SplitPanes height={1000} width={1000}></SplitPanes>);
  const rv = container.getElementsByClassName('split-panes')

  expect(rv).toHaveLength(1);
});

test("should render main container 2", () => {
  render(<SplitPanes height={1000} width={1000}></SplitPanes>);
  const rv = screen.getByTestId('__split-panes')

  expect(rv).not.toBeNull()
});

test("main container should have two split panes and resizer", () => {
  const { container } = render(<SplitPanes height={1000} width={1000}></SplitPanes>);
  const left = container.querySelector('.left-pane')
  expect(left).toHaveClass('left-pane');

  const resizer = container.querySelector('.resizer')
  expect(resizer).toHaveClass('resizer');

  const right = container.querySelector('.right-pane')
  expect(right).toHaveClass('right-pane');
});

test("left pane should be 500px wide", () => {
  render(<SplitPanes height={1000} width={1000}></SplitPanes>);
  const left = screen.getByTestId('__left-pane')

  const style = window.getComputedStyle(left)
  const { _values } = style 
  expect(_values.width).toEqual('500px')
});