import { As, Divider, keyframes } from "@chakra-ui/react";

const BackgroundPositionOscilation = keyframes`
  0%{background-position:85% 0%}
  50%{background-position:0% 0%}
  100%{background-position:85% 0%}
`;

export default function MagicalDivider({
  as = "hr",
  height = 1,
  mb,
}: {
  as?: As;
  height?: number | string;
  mb?: any;
}) {
  return (
    <Divider
      as={as}
      height={height}
      borderBottomWidth={0}
      mb={mb}
      sx={{
        background: `linear-gradient(90deg, #F0D690, #11c093, #4d53e0, #B161EC, #d233cf, #F0D690)`,
        backgroundSize: "600% 600%",
        animation: `${BackgroundPositionOscilation} 50s ease infinite`,
      }}
    />
  );
}
