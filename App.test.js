import { render, screen } from "@testing-library/react-native";
import { Image } from "expo-image";

import backgroundImage from "./assets/icon.png";

it("renders", () => {
  render(<Image source={backgroundImage} />);

  expect(screen).toMatchSnapshot();
});
