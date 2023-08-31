import renderer from "react-test-renderer";
import Homepage from "./Homepage";
import { RecoilRoot } from "recoil";

test("Write a test for Header with snapshot", () => {
  const component = renderer.create(
    <RecoilRoot>
      <Homepage />
    </RecoilRoot>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
