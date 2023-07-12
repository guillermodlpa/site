import { Project } from "../../../../types/types";
import rossaCalendarDesktopViewBooking from "./rossa-calendar-desktop-view-booking.png";
import rossaLogo from "./rossa-logo.png";
import rossaCalendarMobile from "./rossa-calendar-mobile.jpeg";

const rossaCalendar: Project = {
  name: "Rossa Booking Management Calendar",
  anchorId: "rossa-calendar",
  slug: "rossa-calendar",
  date: "2023",
  mobileAppBarColor: "white",
  mobileImage: rossaCalendarMobile,
  desktopImage: rossaCalendarDesktopViewBooking,
  logoImage: {
    src: { light: rossaLogo, dark: rossaLogo },
    alt: "Rossa",
    width: 100,
    style: { width: "auto", height: "50px", marginBottom: "0.3em" },
  },
  backgroundImage: null,
  backgroundColor: null,
};

export default rossaCalendar;
