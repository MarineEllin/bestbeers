import renderer from "react-test-renderer";
import { render } from "@testing-library/react";
import FilterMenu from "./FilterMenu";
import { RecoilRoot } from "recoil";

test("Write a test for FilterMenu with snapshot", () => {
  const component = renderer.create(
    <RecoilRoot>
      <FilterMenu />
    </RecoilRoot>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Write a test for Beer with DOM", async () => {
  const view = render(
    <RecoilRoot>
      <FilterMenu />
    </RecoilRoot>
  );
  // eslint-disable-next-line testing-library/prefer-screen-queries
  const haveAnElWithAlText = await view.findByText(/Alcohol/);
  expect(haveAnElWithAlText).toBeTruthy();
});
