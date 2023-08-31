import renderer from "react-test-renderer";
import Header from "./Header";

test("Write a test for Header with snapshot", () => {
  const component = renderer.create(<Header />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
