import type { SidebarNavItem, SiteConfig } from "@/types";
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
    contact_form_action: "https://app.lucidforms.co/s/92zSO2F2gL7S9I/",
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
};

export const footerLinks: SidebarNavItem[] = [
  {
    title: "Company",
    items: [
      { title: "About", href: "#" },
      { title: "Jobs", href: "#" },
      { title: "Privacy Policy", href: "/legal/privacy-policy" },
      { title: "Terms of Service", href: "/legal/terms-of-service" },
      { title: "Refund Policy", href: "/legal/refund" },
    ],
  },
  {
    title: "Product",
    items: [
      { title: "Pricing", href: "/pricing" },
      { title: "Blog", href: "/blog" },
      { title: "Guides", href: "/guides" },
      { title: "Change Log", href: "/releases" },
    ],
  },
  {
    title: "Docs",
    items: [
      { title: "Introduction", href: "/docs/getting-started/" },
      { title: "Installation", href: "/docs/installation/html" },
      { title: "Team Account", href: "/docs/dashboard/accounts" },
    ],
  },
  {
    title: "Locations",
    items: [
      { title: "New York", href: "#" },
      { title: "London", href: "#" },
      { title: "Tokyo", href: "#" },
    ],
  },
  {
    title: "Services",
    items: [
      { title: "Web Development", href: "#" },
      { title: "SEO", href: "#" },
      { title: "Digital Marketing", href: "#" },
    ],
  },
  {
    title: "Legal",
    items: [
      { title: "Privacy Policy", href: "/legal/privacy-policy" },
      { title: "Terms of Service", href: "/legal/terms-of-service" },
      { title: "Refund Policy", href: "/legal/refund" },
    ],
  },
];
