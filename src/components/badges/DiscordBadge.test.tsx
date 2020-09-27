/* @jsx MD */
import MD, { render } from "jsx-md";
import { Badge } from "../Badge";
import { DiscordBadge } from "./DiscordBadge";

describe("DiscordBadge", () => {
  it("shows a discord badge", () => {
    const pkg = {
      serverId: "750063320614174871",
      inviteLink: "https://discord.com/invite/X9HRSK5",
      name: "name",
    };

    expect(render(<DiscordBadge pkg={pkg} />)).toContain(
      render(
        <Badge
          link={pkg.inviteLink}
          imageSource={`https://img.shields.io/discord/${pkg.serverId}`}
        >
          Discord Badge
        </Badge>
      )
    );
  });
});
