"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Desenvolvedor",
    href: "/docs/primitives/alert-dialog",
    description: "Você vai encontrar resolução e problemas de vários robôs",
  },
  {
    title: "Suporte",
    href: "/docs/primitives/hover-card",
    description: "Guia para o suporte, com soluções e resposta rápida.",
  },
  {
    title: "Soluções",
    href: "/docs/primitives/progress",
    description: "Soluções de problemas já identificado anteriores.",
  },
  {
    title: "Documentações",
    href: "/docs/primitives/scroll-area",
    description: "Functions e business object.",
  },
  {
    title: "Treinamento",
    href: "/docs/primitives/tabs",
    description: "GDP, Clean code e muito mais para lhe ajudar",
  },
  {
    title: "Procedimentos",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export function Header() {
  return (
    <div className="flex items-center justify-between w-full">
      <h1 className="text-xl font-medium">Melius Software</h1>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-blue-500">
              Empresas
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] text-sm">
                <ListItem href="/docs/melius" title="Melius">
                  Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
                <ListItem href="/docs/jettax" title="Jettax">
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem href="/docs/billy" title="Billy">
                  Styles for headings, paragraphs, lists...etc
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-blue-500 text-sm">
              Áreas
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-blue-500 text-sm">
                Documentation
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
