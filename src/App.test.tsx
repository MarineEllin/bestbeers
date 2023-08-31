import { cleanup, fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import Header from "components/Header/Header";

test("Write my first test", () => {
  var result = 1 + 1;
  expect(result).toBe(2);
});

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
