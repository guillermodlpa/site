import { As, Box, Divider, keyframes } from "@chakra-ui/react";

const BackgroundPositionOscilation = keyframes`
  0%{background-position:0% 0%}
  50%{background-position:85% 0%}
  100%{background-position:0% 0%}
`;

export default function MagicalDivider({
  as = "hr",
  height = 1,
  mt,
  mb,
  mx = "auto",
  width = "100%",
}: {
  as?: As;
  height?: number | string;
  mt?: any;
  mb?: any;
  mx?: any;
  width?: any;
}) {
  const Component = as === "hr" ? Divider : Box;
  return (
    <Component
      as={as}
      height={height}
      borderBottomWidth={0}
      mt={mt}
      width={width}
      mx={mx}
      mb={mb}
      flexShrink={0}
      sx={{
        background: `linear-gradient(90deg, #af6ae2, #B161EC, #d233cf, #F0D690, #11c093, #af6ae2)`,
        backgroundSize: "600% 600%",
        animation: `${BackgroundPositionOscilation} 40s ease infinite 0.5s`,
      }}
    />
  );
}
