import { motion } from "framer-motion";
import AppFooter from "../components/AppFooter";
import AppNav from "../components/AppNav";

const variants = {
  initial: { opacity: 0, transform: "translateY(5px)" },
  animate: {
    opacity: 1,
    transform: "translateY(0px)",
    transition: {
      duration: 0.15,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    transform: "translateY(5px)",
    transition: {
      duration: 0.05,
      ease: [0.4, 0, 1, 1],
    },
  },
};

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
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        layout
        style={{
          willChange: "transform, opacity",
          transform: "translateZ(0)",
        }}
      >
        {children}
      </motion.main>

      <AppFooter fullWidth={fullWidth} />
    </>
  );
}
