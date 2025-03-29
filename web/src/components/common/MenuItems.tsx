import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { about, committee } from "../../assets/data/navitems";
import React from "react";

export default function NavigationMenuLists() {
  return (
    <NavigationMenu className="text-xl">
      <NavigationMenuList>
        <NavigationMenuItem>
          <a href="/" className={navigationMenuTriggerStyle()}>
            Home
          </a>
        </NavigationMenuItem>

        <Menubar>
          <MenubarMenu>
            <MenubarTrigger
              className={navigationMenuTriggerStyle() + " text-xl"}
            >
              Executive Committee <span className="text-lg pl-3 ">▼</span>
            </MenubarTrigger>
            <MenubarContent>
              {committee.section.map((component) => (
                <a href={component.url} key={component.name}>
                  <MenubarItem className="">{component.name}</MenubarItem>
                </a>
              ))}
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger
              className={navigationMenuTriggerStyle() + " text-xl"}
            >
              About
              <span className="text-lg pl-3  ">▼</span>
            </MenubarTrigger>
            <MenubarContent>
              {about.section.map((component) => (
                <a href={component.url} key={component.name}>
                  <MenubarItem className="hover:bg-hover">
                    {component.name}
                  </MenubarItem>
                </a>
              ))}
            </MenubarContent>
          </MenubarMenu>{" "}
        </Menubar>

        <NavigationMenuItem>
          <NavigationMenuLink
            href="/events"
            className={navigationMenuTriggerStyle() + " text-xl"}
          >
            Events
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none  space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-primary focus:bg-accent focus:text-primary",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
