/* @jsx MD */
import MD, { render } from "jsx-md";
import { Badge } from "../Badge";
import { DiscordBadge } from "./DiscordBadge";

describe("DiscordBadge", () => {
  it("shows a discord badge", () => {
    expect(
      render(
        <DiscordBadge
          serverId="750063320614174871"
          inviteLink="https://discord.com/invite/X9HRSK5"
        />
      )
    ).toContain(
      render(
        <Badge
          link="https://discord.com/invite/X9HRSK5"
          imageSource={`https://img.shields.io/discord/750063320614174871`}
        >
          chat
        </Badge>
      )
    );
  });
});
