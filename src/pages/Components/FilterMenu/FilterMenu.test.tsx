import renderer from "react-test-renderer";
import FilterMenu from "./FilterMenu";
import { RecoilRoot } from "recoil";

test("Write a test for Header with snapshot", () => {
  const component = renderer.create(
    <RecoilRoot>
      <FilterMenu />
    </RecoilRoot>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
