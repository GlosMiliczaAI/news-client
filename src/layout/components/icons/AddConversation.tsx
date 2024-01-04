import { Icon, IconProps } from "./Icon";

export const AddConversation: React.FC<IconProps> = ({
  color,
  direction,
  size,
}) => (
  <Icon
    size={size || { width: "1.5rem", height: "1.5rem" }}
    viewBox="0 0 32 32"
    x="0px"
    y="0px"
    direction={direction}
    color={color}
  >
    <title>add conversation</title>

    <path
      d="M17.74,30,16,29l4-7h6a2,2,0,0,0,2-2V8a2,2,0,0,0-2-2H6A2,2,0,0,0,4,8V20a2,2,0,0,0,2,2h9v2H6a4,4,0,0,1-4-4V8A4,4,0,0,1,6,4H26a4,4,0,0,1,4,4V20a4,4,0,0,1-4,4H21.16Z"
      transform="translate(0 0)"
    />
    <polygon points="17 9 15 9 15 13 11 13 11 15 15 15 15 19 17 19 17 15 21 15 21 13 17 13 17 9" />
    <rect style={{ fill: "none" }} width="32" height="32" />
  </Icon>
);
