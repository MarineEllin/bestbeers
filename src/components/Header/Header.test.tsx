import renderer from "react-test-renderer";
import { cleanup, fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";

test("Write a test for Header with snapshot", () => {
  const component = renderer.create(<Header />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Write a test for Header with DOM", async () => {
  const screen = render(<Header />);
  const haveAnElWithAlText = await screen.findAllByAltText(/logo/i);
  expect(haveAnElWithAlText).toBeTruthy();
});