import AppFooter from "../components/AppFooter";
import AppNav from "../components/AppNav";
import { motion } from "framer-motion";

/**
 * Using a common component as a layout for multiple NextPages enables
 * to keep the map loaded while navigating across pages that use the same layout
 */
export default function Layout({
  children,
  fullWidth = false,
}: {
  children: React.ReactNode;
  fullWidth?: boolean;
}) {
  return (
    <>
      <AppNav fullWidth={fullWidth} />

      {/* See https://blog.logrocket.com/advanced-page-transitions-next-js-framer-motion */}
      <motion.main
        initial={{ y: 15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 15, opacity: 0 }}
        transition={{
          type: "spring",
          bounce: 0,
          duration: 1,
        }}
      >
        {children}
      </motion.main>

      <AppFooter fullWidth={fullWidth} />
    </>
  );
}
