import type { NavMenuConfig } from "@/types";

export const navMenuConfig: NavMenuConfig = {
  pagesNav: [
    {
      title: "Resources",
      items: [
        {
          title: "Platform guides",
          href: "/guides",
          description: "Guides that help you get started with Lucid forms.",
          image: "/images/examples/changelog.jpg",
        },

        {
          title: "Blogs",
          href: "/blog",
          description: "Blogs with the latest news and tutorials.",
          image: "/images/examples/static-blog.jpg",
        },
        {
          title: "Docs",
          href: "/docs/getting-started",
          description:
            "A Markdown/MDX docs site built using Content Collections.",
          image: "/images/examples/documentation.jpg",
        },
      ],
    },
  ],

  links: [
    {
      title: "Pricing",
      href: "/pricing",
      description: "Lucid forms pricing page",
    },
    {
      title: "Contact us",
      href: "/contact",
      description: "Lucid forms pricing page",
    },
  ],
};
