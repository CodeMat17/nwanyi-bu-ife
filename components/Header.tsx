"use client";

import { Menu, Sun, Moon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Program", href: "/program" },
  { name: "Gallery", href: "/gallery" },
  { name: "Partners", href: "/partners" },
  { name: "News", href: "/news" },
  { name: "Contact", href: "/contact" },
  { name: "Register", href: "/register", isHighlighted: true },
];

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className='sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm'>
      <div className='max-w-7xl mx-auto py-2 px-4'>
        <div className='flex justify-between items-center h-16'>
          <div className='flex items-center'>
            <Link href='/' className='flex items-center'>
              <div>
                <Image
                  alt='logo'
                  priority
                  width={50}
                  height={60}
                  src='/logo.webp'
                  className='object-cover aspect-auto shrink-0'
                />
              </div>

              <div className='ml-2 sm:ml-3'>
                <h1 className='text-2xl font-joti font-bold text-gray-900 dark:text-white'>
                  Nwanyị bụ <span className='text-amber-600 dark:text-amber-500'>Ife</span>
                </h1>
                <p className='text-xs text-gray-500 dark:text-gray-400 -mt-1'>
                  Women Empowerment Festival
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className='hidden lg:flex lg:items-center lg:gap-6'>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium ${item.href === pathname
                  ? "text-amber-500 hover:text-amber-700 transition-colors"
                  : "text-gray-700 dark:text-gray-200 hover:text-amber-600 dark:hover:text-amber-500 transition-colors"
                  }`}>
                {item.name}
              </Link>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="relative p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:ring-2 ring-amber-500/50 transition-all duration-300 ease-in-out"
            >
              <div className="absolute inset-0 rounded-lg bg-amber-400/20 dark:bg-amber-500/20 filter blur-md transition-opacity duration-300 ease-in-out" />
              <Sun className="h-5 w-5 text-amber-500 dark:text-transparent transition-colors duration-300" />
              <Moon className="absolute inset-[8px] h-5 w-5 text-transparent dark:text-amber-400 transition-colors duration-300" />
            </button>
          </nav>

          {/* Mobile menu */}
          <div className="flex items-center gap-4 lg:hidden">
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="relative p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:ring-2 ring-amber-500/50 transition-all duration-300 ease-in-out"
            >
              <div className="absolute inset-0 rounded-lg bg-amber-400/20 dark:bg-amber-500/20 filter blur-md transition-opacity duration-300 ease-in-out" />
              <Sun className="h-5 w-5 text-amber-500 dark:text-transparent transition-colors duration-300" />
              <Moon className="absolute inset-[8px] h-5 w-5 text-transparent dark:text-amber-400 transition-colors duration-300" />
            </button>

            <Sheet>
              <SheetTrigger asChild>
                <button className='text-gray-700 dark:text-gray-200 hover:text-amber-600 dark:hover:text-amber-500'>
                  <Menu size={24} />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className='px-4 w-[300px] sm:w-[400px] bg-white dark:bg-gray-900'>
                <nav className='flex flex-col gap-4 mt-8'>
                  {navigation.map((item) => (
                    <SheetTrigger asChild key={item.name}>
                      <Link
                        href={item.href}
                        className={`px-4 py-2 rounded-md text-base font-medium ${item.isHighlighted
                          ? "bg-amber-500 text-white hover:bg-amber-600"
                          : "text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
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
