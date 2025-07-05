import type { SiteConfig } from "@/types";
import { ArrowRight } from "lucide-react";

export const siteConfig: SiteConfig = {
  //meta config
  name: "AI Powered Astro Starter",
  description: "AI ",
  ogImage:
    "https://res.cloudinary.com/dq1btdcg9/image/upload/v1723759144/og-image_vkv36y.jpg",
  socialLinks: [
    {
      type: "Github",
      link: "https://github.com",
      //icon name using astro-icon
      Icon: "ri:github-fill",
    },
  ],
  analytics: {
    googleAnalyticsId: "G-XXXXXXXXXX", // Replace with your GA ID
  },
  //logo should be stored on assets folder to enable image optimization
  Logo: {
    path: "",
    alt: "",
    width: 150,
    height: 80,
  },
  settings: {
    search: true,
    sticky_header: true,
    // theme_switcher: true,
    // default_theme: "system",
    pagination: 10,
    summary_length: 200,
  },
  params: {
    contact_form_action: "",
    copyright: "Designed And Developed by [Kohi Studio](https://kohi.studio)",
  },

  mainCTA: {
    title: "Contact Us",
    href: `/contact`,
    icon: ArrowRight,
  },
  secondaryCTA: {
    title: "Get Quote",
    href: `/get-quote`,
  },
  contact: {
    email: [
      { link: "mailto:example@example.com", title: "example@example.com" },
    ],
    phone: [{ link: "tel:+1234567890", title: "+1 (234) 567-890" }],
    address: [
      {
        link: "https://maps.google.com/?q=123+Main+St",
        title: "123 Main St, Anytown, USA",
      },
    ],
  },
};
