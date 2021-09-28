/* @jsx Md */
import Md, { render } from "jsx-md";
import {ContributingFile} from "./ContributingFile";

describe("ContributingFile", () => {
  it("renders the Introduction section", async () => {
    expect(
      await render(<ContributingFile />)
    ).toContain("# Introduction\n" +
      "\n" +
      "Thanks for your interest in contributing! This repository is free open\n" +
      "source and as such dependent on your contributions. These guidelines should help\n" +
      "you get started more quickly and should ensure a smooth contribution process for\n" +
      "both those contributing and those reviewing contributions. Please read them\n" +
      "thoroughly before contributing with a Pull Request, and at least skim them before adding an issue.");
  });

  describe("The code of conduct paragraph", () => {
    it("renders the paragraph when the path is set", async () => {
      expect(
        await render(<ContributingFile codeOfConductFilePath={"./CODE_OF_CONDUCT.md"}/>)
      ).toContain("We are open to all kinds of contributions as long as you follow our\n" +
        "[Code of Conduct](./CODE_OF_CONDUCT.md). For very specific use case it might make more sense\n" +
        "though to create your own repository instead of adding to this one.");
    });

    it("uses the code of conduct path in the paragraph", async () => {
      expect(
        await render(<ContributingFile codeOfConductFilePath={"./SOMETHING_ABOUT_CONTRIBUTING.md"}/>)
      ).toContain("./SOMETHING_ABOUT_CONTRIBUTING.md");
    });

    it("does not render the link when the path is not set", async () => {
      expect(
        await render(<ContributingFile />)
      ).toContain("We are open to all kinds of contributions.\n" +
        "For very specific use case it might make more sense\n" +
        "though to create your own repository instead of adding to this one.");
    })
  })
});
