import renderer from "react-test-renderer";
import { cleanup, fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Beer from "./Beer";
import { RecoilRoot } from "recoil";

test("Write a test for Header with snapshot", () => {
  const beerObj = {
    id: 0,
    name: "my beer",
    description: "my beer description",
    image_url: "my beer image url",
    abv: 7,
    ibu: 30,
    food_pairing: ["fish", "chocolate"],
  };
  const component = renderer.create(
    <>
      <RecoilRoot>
        <Beer beer={beerObj} />
      </RecoilRoot>
      <Beer beer={beerObj} />
    </>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Write a test for Beer with DOM", async () => {
  // eslint-disable-next-line testing-library/render-result-naming-convention
  const beerObj = {
    id: 0,
    name: "my beer",
    description: "my beer description",
    image_url: "my beer image url",
    abv: 7,
    ibu: 30,
    food_pairing: ["fish", "chocolate"],
  };
  const view = render(
    <RecoilRoot>
      <Beer beer={beerObj} />
    </RecoilRoot>
  );
  // eslint-disable-next-line testing-library/prefer-screen-queries
  const haveAnElWithAlText = view.getByText(/Bitterness/);
  expect(haveAnElWithAlText).toBeTruthy();
});
