import React from "react";
import { Link, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import SecondarySectionHeader from "./SecondarySectionHeader";

export default function OpenSourceSection() {
  return (
    <>
      <SecondarySectionHeader>
        {`Open Source Contributions`}
      </SecondarySectionHeader>

      <Text mb={2}>
        {`I admit I haven't contributed as much as I would like to open source projects. I'm working on it! Here are some contributions:`}
      </Text>

      <UnorderedList spacing={1} fontSize="md">
        <ListItem>
          <Link
            isExternal
            href={`https://github.com/Couchers-org/couchers/pull/2843`}
          >
            Couchers-org/couchers: Reimplement dashboard with new design
          </Link>
        </ListItem>
        <ListItem>
          <Link
            isExternal
            href={`https://github.com/Couchers-org/couchers/pull/2918`}
          >
            Couchers-org/couchers: Implement hero section in dashboard with
            search
          </Link>
        </ListItem>
        <ListItem>
          <Link
            isExternal
            href={`https://github.com/tadashi-yama1012/next-rss/issues/5`}
          >
            Issue in tadashi-yama1012/next-rss with a lot of detail.
          </Link>
          {` Unfortunately the package isn't maintained so I `}
          <Link isExternal href={`https://github.com/guillermodlpa/next-rss`}>
            made a fork to fix the issue.
          </Link>
        </ListItem>
        <ListItem>
          {`All side projects I do for learning are open sourced, like `}
          <Link isExternal href={`https://github.com/guillermodlpa/travelmap`}>
            Travelmap
          </Link>
          {` or the `}
          <Link
            isExternal
            href={`https://github.com/guillermodlpa/deportravel-rip-page`}
          >
            depor.travel static pages.
          </Link>
        </ListItem>
        <ListItem>
          {`While I work on customer projects, I always report or try to fix issues I find in open source libraries. A few examples: `}
          <Link
            isExternal
            href={`https://github.com/tadashi-yama1012/next-rss/issues/5`}
          >
            this issue in tadashi-yama1012/next-rss
          </Link>
          {`, `}
          <Link
            isExternal
            href={`https://github.com/nolimits4web/swiper/issues/6414#issuecomment-1440020817`}
          >
            this one in nolimits4web/swiper
          </Link>
          {`, `}
          <Link
            isExternal
            href={`https://github.com/mapbox/mapbox-gl-vintage-style/pull/3`}
          >
            this one in a Mapbox preset
          </Link>
          {`, `}
          <Link
            isExternal
            href={`https://github.com/coston/react-obfuscate/issues/302`}
          >
            this one in coston/react-obfuscate
          </Link>
          {` and `}
          <Link
            isExternal
            href={`https://github.com/uploadcare/uploadcare-widget/issues/925`}
          >
            this one in uploadcare/uploadcare-widget
          </Link>
          {"."}
        </ListItem>
      </UnorderedList>
    </>
  );
}
