import type { NavItem, Navigation } from "@/types";
import { siteConfig } from "./site";
import { ArrowRight, LogIn } from "lucide-react";
export const navItems: NavItem[] = [
  {
    discriminant: "plainLink",
    value: {
      title: "Home",
      href: "/",
    },
  },
  {
    discriminant: "dropdown",
    value: {
      title: "Resources",
      items: [
        {
          title: "Blog",
          href: "/blog",
          description: "Exlplre our blog",
        },
        {
          title: "Guides",
          href: "/guides",
          description: "Explore our guide",
        },
      ],
    },
  },
  {
    discriminant: "plainLink",
    value: {
      title: "Features",
      href: "/features",
    },
  },
  {
    discriminant: "plainLink",
    value: {
      title: "Pricing",
      href: "/pricing",
    },
  },
];

export const nav: Navigation = {
  navItems,
  navCTA: siteConfig.mainCTA,
  navCTASecondary: siteConfig.secondaryCTA,
};
