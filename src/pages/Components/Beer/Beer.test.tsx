import renderer from "react-test-renderer";
import Beer from "./Beer";

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
  const component = renderer.create(<Beer beer={beerObj} />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
