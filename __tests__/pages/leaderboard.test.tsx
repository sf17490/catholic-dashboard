import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import Leaderboard from "@/pages/leaderboard";

describe("Leaderboard page", () => {
  it("matches the snapshot", () => {
    const { asFragment } = render(<Leaderboard />);
    expect(asFragment()).toMatchSnapshot();
  });
});
