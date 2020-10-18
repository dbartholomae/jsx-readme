/* @jsx MD */
import MD, { render } from "jsx-md";
import { HitsBadge } from "./HitsBadge";
import { Badge } from "../Badge";

describe("HitsBadge", () => {
  it("shows a hits badge", async () => {
    const pkg = {
      name: "package-name",
      repository: "github:dbartholomae/jsx-readme",
    };

    expect(await render(<HitsBadge pkg={pkg} />)).toContain(
      await render(
        <Badge
          imageSource="http://hits.dwyl.com/dbartholomae/jsx-readme.svg"
          link="http://hits.dwyl.com/dbartholomae/jsx-readme"
        >
          hits
        </Badge>
      )
    );
  });

  it("shows nothing if no repository", async () => {
    const pkg = {
      name: "package-name",
    };

    expect(await render(<HitsBadge pkg={pkg} />)).toBe("");
  });
});
