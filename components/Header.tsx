"use client";

import { Menu, Sun, Moon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

type NavItem = {
  name: string;
  href?: string;
  exact?: boolean;
  className?: string;
  badge?: string;
  isHighlighted?: boolean;
  subMenu?: NavItem[];
};

const navigation: NavItem[] = [
  { name: "Home", href: "/", exact: true },
  {
    name: "About Festival",
    subMenu: [
      { name: "About Us", href: "/about" },
      // { name: "The Team", href: "/team" },
      { name: "Partners", href: "/partners" },
    ],
  },
  {
    name: "Program",
    subMenu: [
      { name: "2025 Schedule", href: "/schedule", badge: "New" },
      { name: "Speakers", href: "/speakers", badge: "New" },
      { name: "Photo Gallery", href: "/gallery" },
      { name: "Interviews", href: "/interviews" },
    ],
  },
  { name: "News", href: "/news" },
  {
    name: "Participate",
    subMenu: [
      { name: "Award Nominations", href: "/nomination" },
      { name: "Register Now", href: "/register", isHighlighted: true },
    ],
  },
  { name: "Contact", href: "/contact" },
];

const mobileNavigation: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About Festival", href: "/about" },

  { name: "Schedule", href: "/schedule" },
  { name: "Speakers", href: "/speakers" },
  { name: "Gallery", href: "/gallery" },
  { name: "News & Updates", href: "/news" },
  { name: "Nominate Someone", href: "/nomination" },
  { name: "Our Partners", href: "/partners" },
  {
    name: "Register Now",
    href: "/register",
    className: "bg-amber-500 text-white font-bold",
  },
  { name: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isActive = (href: string, exact = false) => {
    if (!href) return false;
    return exact ? pathname === href : pathname.startsWith(href);
  };

  const isSubmenuActive = (subMenu: NavItem[] = []) => {
    return subMenu.some((item) => isActive(item.href || ""));
  };

  return (
    <header className='sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm'>
      <div className='py-2 px-4'>
        <div className='flex justify-between items-center h-16'>
          <div className='flex items-center'>
            <Link href='/' className='flex items-center'>
              <div>
                <Image
                  alt='logo'
                  priority
                  width={45}
                  height={55}
                  src='/logo.webp'
                  className='object-cover aspect-auto shrink-0'
                />
              </div>

              <div className='ml-2 sm:ml-3'>
                <h1 className='text-2xl font-joti font-bold text-gray-800 dark:text-white'>
                  Nwanyị bụ <span className='text-amber-500'>ịfe</span>
                </h1>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden lg:flex items-center gap-4'>
            <NavigationMenu>
              <NavigationMenuList>
                {navigation.map((item) => {
                  if (item.subMenu) {
                    const submenuActive = isSubmenuActive(item.subMenu);
                    return (
                      <NavigationMenuItem key={item.name}>
                        <NavigationMenuTrigger
                          className={`${navigationMenuTriggerStyle()} ${
                            submenuActive
                              ? "text-amber-600 dark:text-amber-500"
                              : "text-gray-800 dark:text-gray-200"
                          } hover:text-amber-600 dark:hover:text-amber-500`}>
                          {item.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className='grid w-[400px] gap-3 p-4 md:w-[200px] md:grid-cols-2 lg:w-[400px]'>
                            {item.subMenu.map((subItem) => (
                              <li key={subItem.name}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={subItem.href || "#"}
                                    className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors ${
                                      isActive(subItem.href || "")
                                        ? "bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400"
                                        : "text-gray-800 dark:text-gray-200 hover:text-amber-600 dark:hover:text-amber-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                                    } ${
                                      subItem.isHighlighted
                                        ? "!bg-amber-500 !text-white hover:!bg-amber-600"
                                        : ""
                                    }`}>
                                    <div className='flex items-center justify-between'>
                                      <div className='text-sm font-medium leading-none'>
                                        {subItem.name}
                                      </div>
                                      {subItem.badge && (
                                        <span className='inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'>
                                          {subItem.badge}
                                        </span>
                                      )}
                                    </div>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    );
                  }
                  return (
                    <NavigationMenuItem key={item.name}>
                      <Link href={item.href || "#"} legacyBehavior passHref>
                        <NavigationMenuLink
                          className={`${navigationMenuTriggerStyle()} ${
                            isActive(item.href || "", item.exact)
                              ? "text-amber-600 dark:text-amber-500"
                              : "text-gray-800 dark:text-gray-200"
                          } hover:text-amber-600 dark:hover:text-amber-500`}>
                          {item.name}
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className='relative p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:ring-2 ring-amber-500/50 transition-all duration-300 ease-in-out'
              aria-label='Toggle theme'>
              <div className='absolute inset-0 rounded-lg bg-amber-400/20 dark:bg-amber-500/20 filter blur-md transition-opacity duration-300 ease-in-out' />
              <Sun className='h-5 w-5 text-amber-500 dark:text-transparent transition-colors duration-300' />
              <Moon className='absolute inset-[8px] h-5 w-5 text-transparent dark:text-amber-400 transition-colors duration-300' />
            </button>
          </div>

          {/* Mobile menu */}
          <div className='flex items-center gap-4 lg:hidden'>
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className='relative p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:ring-2 ring-amber-500/50 transition-all duration-300 ease-in-out'
              aria-label='Toggle theme'>
              <div className='absolute inset-0 rounded-lg bg-amber-400/20 dark:bg-amber-500/20 filter blur-md transition-opacity duration-300 ease-in-out' />
              <Sun className='h-5 w-5 text-amber-500 dark:text-transparent transition-colors duration-300' />
              <Moon className='absolute inset-[8px] h-5 w-5 text-transparent dark:text-amber-400 transition-colors duration-300' />
            </button>

            <Sheet>
              <SheetTrigger asChild>
                <button
                  className='text-gray-800 dark:text-gray-200 hover:text-amber-600 dark:hover:text-amber-500'
                  aria-label='Open menu'>
                  <Menu size={24} />
                </button>
              </SheetTrigger>
              <SheetContent
                side='right'
                className='px-4 w-[300px] sm:w-[400px] bg-white dark:bg-gray-900 overflow-y-auto'>
                <nav className='flex flex-col gap-2 mt-8'>
                  {mobileNavigation.map((item) => (
                    <SheetTrigger asChild key={item.name}>
                      <Link
                        href={item.href || "#"}
                        className={`px-4 py-3 rounded-md text-base font-medium ${
                          isActive(item.href || "")
                            ? "text-amber-600 dark:text-amber-500"
                            : "text-gray-800 dark:text-gray-200"
                        } hover:text-amber-600 dark:hover:text-amber-500 ${
                          item.className || ""
                        }`}>
                        {item.name}
                      </Link>
                    </SheetTrigger>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
