import * as React from "react";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Badge } from "@/components/ui/badge";
import { navMenuConfig } from "@/config/nav-menu";
import type { MenuItem } from "@/types";

import { Logo } from "../logo";

const links = navMenuConfig.links;
const pages = navMenuConfig.pagesNav[0];

export function MainNavigationMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {links ? (
          <NavigationMenuItem>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={navigationMenuTriggerStyle()}
                {...(link.forceReload ? { "data-astro-reload": true } : {})}
              >
                {link.title}
              </a>
            ))}
          </NavigationMenuItem>
        ) : null}
        <NavigationMenuItem>
          <NavigationMenuTrigger>{pages.title}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <a
                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  href="/"
                >
                  <Logo className="size-8" />
                  <div className="mb-2 mt-3 text-lg font-medium">
                    Lucid forms
                  </div>
                  <p className="text-sm leading-tight text-muted-foreground">
                    Effort less form submissions.
                  </p>
                </a>
              </li>

              {pages.items?.map((page) => (
                <ListItem key={page.title} {...page} />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuIndicator />
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem: React.FC<MenuItem> = ({
  title,
  href,
  description,
  launched,
  disabled,
  external,
  forceReload,
}) => {
  const target = external ? "_blank" : undefined;

  return (
    <li>
      <a
        target={target}
        href={disabled ? undefined : href}
        {...(forceReload ? { "data-astro-reload": true } : {})}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          disabled
            ? "text-muted-foreground hover:bg-transparent hover:text-muted-foreground"
            : "",
        )}
      >
        <div className="flex items-center text-sm font-medium leading-none">
          <span className="mr-2">{title}</span>
          {disabled ? (
            <Badge
              variant="secondary"
              className="h-5 px-1.5 text-xs font-medium"
            >
              SOON
            </Badge>
          ) : null}
          {launched ? (
            <Badge className="h-5 px-1.5 text-xs font-medium bg-[#ebf5ff] hover:bg-[#ebf5ff] text-[#0068d6]">
              NEW
            </Badge>
          ) : null}
        </div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {description}
        </p>
      </a>
    </li>
  );
};
ListItem.displayName = "ListItem";
