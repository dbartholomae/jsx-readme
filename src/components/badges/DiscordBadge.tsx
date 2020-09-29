/* @jsx MD */
import MD, { Component } from "jsx-md";
import { Badge } from "../Badge";

/** @internal */
interface Props {
  inviteLink: string;
  serverId: string;
}

/** Show a discord badge on GitHub */
export const DiscordBadge: Component<Props> = ({ inviteLink, serverId }) => {
  return (
    <Badge
      link={inviteLink}
      imageSource={`https://img.shields.io/discord/${serverId}`}
    >
      chat
    </Badge>
  );
};
