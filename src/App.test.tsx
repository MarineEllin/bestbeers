import { cleanup, fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import Header from "components/Header/Header";

test("Write my first test", () => {
  var result = 1 + 1;
  expect(result).toBe(2);
});

