import { Link } from "@chakra-ui/react";
import { useId } from "react";
import { PATH_RSS } from "../../../constants/paths";
import RssIcon from "./RssIcon";

export default function RssFeedLink() {
  const titleId = useId();
  return (
    <Link
      href={PATH_RSS}
      aria-labelledby={titleId}
      isExternal
      display="flex"
      gap={1}
      lineHeight={1}
      alignItems="flex-end"
    >
      RSS Feed <RssIcon titleId={titleId} size={"1.2em"} />
    </Link>
  );
}
