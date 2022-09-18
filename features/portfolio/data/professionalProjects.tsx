import { Text } from "@chakra-ui/react";

import splashLogo from "./splash/splash-logo.png";
import splashHomepageMobile from "./splash/splash-mobile.png";
import splashHomepageDesktop from "./splash/splash-desktop.png";

import alacartadigitalLogo from "./alacartadigital/alacartadigital-logo.svg";
import alacartadigitalDesktop from "./alacartadigital/alacartadigital-desktop.png";
import alacartadigitalMobile from "./alacartadigital/alacartadigital-mobile.png";
import alacartadigitalBackground from "./alacartadigital/alacartadigital-background.png";

import afterLogo from "./after/after-logo.png";
import afterDesktop from "./after/after-desktop.png";
import afterMobile from "./after/after-mobile.png";
import afterBackground from "./after/after-background.png";

const professionalProjects = [
  {
    logo: splashLogo,
    logoAlt: "Splash logo",
    name: "Splash",
    anchorId: "splash",
    subheadline:
      "Event marketing platform for virtual, in-person, and hybrid event programs",
    content: (
      <>
        <Text fontSize="sm" mb={4}>
          As an all-in-one platform, Splash has built-in website editor for
          event pages, form editor, tickets and registration platform, CRM,
          integrations, email builder and sender for transactional and
          marketing, and in-app integrations with virtual event providers.
        </Text>
        <Text fontSize="sm" mb={4}>
          During my years as software engineer, and later as an engineering
          manager, I worked in all kinds of projects and with many types of
          technologies: frontend, backend, databases, queues, platform, design
          system... Through this experience, I learned{" "}
          <strong>
            the fundamentals and pitfalls of building SaaS platforms
          </strong>{" "}
          for enterprise users, and it shaped the way I approach projects to
          this day.
        </Text>
        <Text fontSize="sm" mb={4}>
          My main contributions as an engineer were the stabilization and
          evolution of the <strong>website editor</strong>, modernization of
          frontend and backend codebases, implementation of the{" "}
          <strong>registration confirmations module</strong>, implementation of
          Splash&apos;s &quot;growth machine&quot; combining registrations and
          sign-ups, and the implementation of tooling and processes for
          improving <strong>developer-experience</strong>.
        </Text>
      </>
    ),
    technologies: [
      "React",
      "Backbone.js",
      "Vanilla JavaScript",
      "CakePHP",
      "Symfony (PHP)",
      "AWS",
      "MySQL",
    ],
    url: "https://splashthat.com",
    date: "2014 - 2022",
    colors: {
      accent: "rgb(115, 76, 218)",
      accentForeground: "white",
      accentHightlighted: "rgb(76, 64, 149)",
      accentHightlightedForeground: "white",
      subheadline: "rgb(163, 163, 163)",
      background: "white",
      mobileAppBar: "white",
    },
    mobileImage: splashHomepageMobile,
    desktopImage: splashHomepageDesktop,
    video: null,
    backgroundImage: null,
    backgroundGradient: null,
  },
  {
    logo: alacartadigitalLogo,
    logoAlt: "alacartadigital logo",
    name: "alacartadigital",
    anchorId: "alacartadigital",
    subheadline: "Online restaurant menu platform with QR code integration",
    content: (
      <>
        <Text fontSize="sm" mb={4}>
          Developed during the first weeks of the pandemic, alacartadigital
          brought a solution to restaurants that quickly needed to digitalize
          their menu and make it accessible via QR codes. The goal was to
          provide a super intuitive interface, but customizable enough to solve
          various menu use cases and capable of using the same branding as its
          restaurant.
        </Text>
        <Text fontSize="sm" mb={4}>
          Alongside Cristian C and Kelvin S, we built a Next.js application that
          optimized <strong>ease of use and page speed</strong>. It included{" "}
          <strong>
            brand customization of colors and typography with live preview
          </strong>
          , an integrated QR code generator, <strong>paid subscriptions</strong>
          , and enough admin controls so that the founders wouldn&apos;t depend
          on developers to operate the platform.
        </Text>
        <Text fontSize="sm" mb={4}>
          The project has become a successful company powering hundreds of
          thousands of menus in Spain and Latin America.
        </Text>
      </>
    ),
    technologies: [
      "React",
      "Next.js",
      "Firebase Firestore",
      "Firebase Functions",
      "ActiveCampaign",
      "Stripe",
    ],
    url: "https://www.alacartadigital.es/",
    date: "2020",
    colors: {
      accent: "#00CF6A",
      accentForeground: "white",
      accentHightlighted: "white",
      accentHightlightedForeground: "#00CF6A",
      subheadline: "#909090",
      background: "white",
      mobileAppBar: "rgb(33, 33, 33)",
    },
    mobileImage: alacartadigitalMobile,
    desktopImage: alacartadigitalDesktop,
    video: { url: "/assets/alacartadigital-demo.mp4" },
    backgroundImage: {
      src: alacartadigitalBackground,
      styles: {
        top: "20%",
        left: 0,
        width: "100%",
        height: "100%",
        opacity: 0.5,
      },
    },
    backgroundGradient:
      "linear-gradient(50deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7) 100%)",
  },
  {
    logo: afterLogo,
    logoAlt: "after logo",
    name: "After",
    anchorId: "after",
    subheadline:
      "Collaborate with family and friends to create beautiful, emotional memorials for your loved ones in minutes",
    content: (
      <>
        <Text fontSize="sm" mb={4}>
          The MVP was initially developed by an offshore agency. While they
          created very nice designs, there were a number of problems resulting
          in a poor quality product: bugs, UX issues, poor code quality, bad
          SEO, and lack of basic accessibility. Users tried it a bit, but
          didn&apos;t stick.
        </Text>
        <Text fontSize="sm" mb={4}>
          I took on the project to increase user adoption. That included{" "}
          <strong>
            fixing outstanding issues, improving the UX, and improving
            performance and SEO
          </strong>
          . As part of that, I migrated the frontend codebase to{" "}
          <strong>TypeScript</strong>, which helped reduce bugs and ship with
          continuous delivery with more confidence. With a very data-driven
          approach measuring user traffic, I continued adding features, like the{" "}
          <strong>email nurture sequence with Sendinblue</strong>, and
          simplifying the way users collaborate on memorials to increase the
          metric of new users per week.
        </Text>
      </>
    ),
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Sendinblue",
      "AWS",
      "Node.js",
      "Koa",
      "Objection.js",
    ],
    url: "https://after.io/",
    date: "2022",
    colors: {
      accent: "#657287",
      accentForeground: "white",
      accentHightlighted: "#4e5b6f",
      accentHightlightedForeground: "white",
      subheadline: "#627389",
      background: "white",
      mobileAppBar: "black",
    },
    mobileImage: afterMobile,
    desktopImage: afterDesktop,
    video: { url: "/assets/after-demo.mp4" },
    backgroundImage: {
      src: afterBackground,
      styles: {
        bottom: "12%",
        left: { base: "auto", md: "30%" },
        right: { base: "2%", md: "auto" },
        width: { base: "50%", md: "30%" },
        opacity: 0.25,
      },
    },
    backgroundGradient: null,
  },
];

export default professionalProjects;
