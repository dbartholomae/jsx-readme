/* @jsx MD */
import MD, { render } from "jsx-md";
import { Badge } from "../Badge";
import { JsxReadmeBadge } from "./JsxReadmeBadge";

describe("JsxReadmeBadge", () => {
  it("shows a jsx-readme badge", () => {
    expect(render(<JsxReadmeBadge />)).toContain(
      render(
        <Badge
          imageSource="https://img.shields.io/badge/jsx--readme-lightgrey"
          link="https://dbartholomae.github.io/jsx-readme"
        >
          jsx-readme
        </Badge>
      )
    );
  });
});
