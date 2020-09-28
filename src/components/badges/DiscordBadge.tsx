/* @jsx MD */
import MD from "jsx-md";
import { Badge } from "../Badge";
import type { BadgeComponent } from "./utils/BadgeComponent";

/** Show a badge with the count of open issues on GitHub */

export const DiscordBadge: BadgeComponent = ({ inviteLink, serverId }) => {
  return (
    <Badge
      link={inviteLink}
      imageSource={`https://img.shields.io/discord/${serverId}`}
    >
      Discord Badge
    </Badge>
  );
};
