import * as React from "react";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { nav } from "@/config/nav-menu";
import type { NavItem } from "@/types";
import { Menu } from "lucide-react";
import { Logo } from "../logo";

interface SheetMobileProps {}

export function SheetMobileNav({}: SheetMobileProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="secondary"
          size="sm"
          className="mr-2 h-8 px-1.5 md:hidden"
        >
          <Menu className="size-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <div className="px-4">
          <a href="/" className="flex items-center">
            <Logo className="size-10" />
          </a>
        </div>
        <Separator className="my-4" />
        <ScrollArea className="h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="mb-20">
            <div className="flex flex-col space-y-3">
              {nav.navItems.map((item: NavItem) =>
                item.discriminant === "plainLink" ? (
                  <a
                    key={item.value.href}
                    href={item.value.href}
                    className="text-muted-foreground"
                    onClick={() => setOpen(false)}
                  >
                    {item.value.title}
                  </a>
                ) : (
                  <div
                    key={item.value.title}
                    className="flex flex-col space-y-3 pt-6"
                  >
                    <h4 className="font-medium">{item.value.title}</h4>
                    <div className="ml-5 flex flex-col space-y-2 border-l-2 border-l-border pl-3">
                      {item.value.items.map((subItem) => (
                        <a
                          key={subItem.href}
                          href={subItem.href}
                          className="text-muted-foreground"
                          onClick={() => setOpen(false)}
                        >
                          {subItem.title}
                        </a>
                      ))}
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
