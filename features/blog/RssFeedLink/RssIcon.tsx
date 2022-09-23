import { Icon } from "@chakra-ui/react";

export default function RssIcon({
  titleId,
  size = 22,
}: {
  titleId?: string;
  size?: number | string;
}) {
  return (
    <Icon
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <title id={titleId}>RSS Feed</title>
      <path d="M4 11a9 9 0 0 1 9 9"></path>
      <path d="M4 4a16 16 0 0 1 16 16"></path>
      <circle cx="5" cy="19" r="1"></circle>
    </Icon>
  );
}
