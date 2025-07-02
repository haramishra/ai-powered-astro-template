export type BaseNavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};
export type MenuItem = BaseNavItem & {
  image?: string;
  description?: string;
  launched?: boolean;
  external?: boolean;
  forceReload?: boolean;
};

export type MainNavItem = BaseNavItem;

export type SidebarNavItem = {
  title: string;
  disabled?: boolean;
  external?: boolean;
} & (
  | {
      href: string;
      items?: never;
    }
  | {
      href?: string;
      items: MenuItem[];
    }
);

export type SiteConfig = {
  name: string;
  description: string;
  ogImage: string;
  socialLinks: {
    type: string;
    link: string;
    Icon: string;
  }[];
  analytics?: {
    googleAnalyticsId: string;
  };
  Logo?: {
    path: string;
    alt: string;
    width: number;
    height: number;
  };
  settings?: {
    search: boolean;
    sticky_header: boolean;
    pagination: number;
    summary_length: number;
  };
  params?: {
    contact_form_action: string;
    copyright: string;
  };
  mainCTA: {
    title: string;
    href: string;
    icon?: React.ElementType;
  };
  secondaryCTA?: {
    title: string;
    href: string;
  };
};

export type DocsConfig = {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
};

export type MarketingConfig = {
  mainNav: MainNavItem[];
};

export type PlainLink = {
  discriminant: "plainLink";
  value: {
    title: string;
    href: string;
  };
};

export type DropdownItem = {
  title: string;
  href: string;
  description: string;
};

export type Dropdown = {
  discriminant: "dropdown";
  value: {
    title: string;
    items: DropdownItem[];
  };
};

export type NavItem = PlainLink | Dropdown;

export type NavCTA = {
  title: string;
  href: string;
  icon?: React.ElementType;
};

export type Navigation = {
  navItems: NavItem[];
  navCTA: NavCTA;
  navCTASecondary?: NavCTA;
};

export type SidebarItem = {
  title: string;
  href?: string;
  icon?: React.ReactNode;
  items?: {
    title: string;
    href: string;
    description?: string;
  }[];
};

export type DashboardConfig = {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
};

export type SubscriptionPlan = {
  name: string;
  description: string;
  stripePriceId: string;
};

// Animes types
export type Airing = {
  id: number;
  episode: number;
  airingAt: number;
  media: Media;
};

export type Media = {
  id: number;
  title: Title;
  coverImage: CoverImage;
  isAdult: boolean;
};

type Title = {
  userPreferred: string;
};

type CoverImage = {
  extraLarge: string;
  large: string;
};

export type InfoList = {
  icon: string;
  title: string;
  description: string;
};

export type InfoLdg = {
  title: string;
  image: string;
  description: string;
  list: InfoList[];
};

export type FeaturesLdg = {
  title: string;
  description: string;
  icon?: string;
  link?: string;
};
