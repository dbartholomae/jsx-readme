/* @jsx MD */
import MD, { Component } from "jsx-md";
import { Badge } from "../Badge";

/** Show a discord badge  on GitHub */

interface Props {
  inviteLink: string;
  serverId: string;
}

export const DiscordBadge: Component<Props> = ({ inviteLink, serverId }) => {
  return (
    <Badge
      link={inviteLink}
      imageSource={`https://img.shields.io/discord/${serverId}`}
    >
      Discord Badge
    </Badge>
  );
};
