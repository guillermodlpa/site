import AppFooter from "../components/AppFooter";
import AppNav from "../components/AppNav";

/**
 * Using a common component as a layout for multiple NextPages enables
 * to keep the map loaded while navigating across pages that use the same layout
 */
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AppNav />

      {children}

      <AppFooter />
    </>
  );
}
