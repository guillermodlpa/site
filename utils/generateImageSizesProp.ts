/**
 * Generates a string to be passed to img sizes, for performance.
 * @see https://nextjs.org/docs/api-reference/next/image#sizes
 */
export default function generateImageSizesProp(responsiveValues: {
  base: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  "2xl"?: string;
}): string {
  const sizesValue = [
    responsiveValues["2xl"] && `(min-width: 1536px) ${responsiveValues["2xl"]}`,
    responsiveValues.xl && `(min-width: 1280px) ${responsiveValues.xl}`,
    responsiveValues.lg && `(min-width: 992px) ${responsiveValues.lg}`,
    responsiveValues.md && `(min-width: 768px) ${responsiveValues.md}`,
    responsiveValues.sm && `(min-width: 480px) ${responsiveValues.sm}`,
    responsiveValues.base,
  ]
    .filter(Boolean)
    .join(", ");
  return sizesValue;
}
