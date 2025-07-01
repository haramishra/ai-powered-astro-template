import type { SidebarNavItem, SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Lucid Forms",
  description: "Build & submit forms in minutes | No backend required",
  url: "https://lucidforms.co",
  appUrl: "https://app.lucidforms.co",
  ogImage:
    "https://res.cloudinary.com/dq1btdcg9/image/upload/v1723759144/og-image_vkv36y.jpg",
  links: {
    twitter: "#",
    github: "https://github.com/kohi-labs",
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
];
