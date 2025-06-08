/**
 * This page I use to develop the Favicon using an SVG
 * This is temporary until developing a better favicon using image editing tools.
 */
export default function FaviconPage() {
  return (
    <div style={{ width: "500px", height: "500px" }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <title>White square</title>
        {/* <line x1="4" y1="6" x2="28" y2="6" stroke="#af6ae2" strokeWidth="3px" />
        <text x="16" y="22.5" textLength="30" textAnchor="middle" fontSize="18px" fill="#1c2831">
          G
        </text>
        <line x1="4" y1="26" x2="28" y2="26" stroke="#af6ae2" strokeWidth="3px" /> */}
      </svg>
    </div>
  );
}

export function getStaticProps() {
  return {
    // returns the default 404 page with a status code of 404 in production
    notFound: process.env.NODE_ENV !== "development",
    props: {},
  };
}
