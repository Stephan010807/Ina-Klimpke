'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Sun, Moon, Menu } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#hero', label: 'Home' },
    { href: '#feat', label: 'Leistungen' },
    { href: '#about', label: 'Vita' },
    { href: '#contact', label: 'Kontakt' },
    { href: '#download', label: 'Downloads' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const NavLink = ({ href, label }: { href: string, label: string }) => (
    <button
      onClick={() => scrollToSection(href)}
      className="px-3 py-2 text-text-light dark:text-text-dark hover:text-primary-light dark:hover:text-primary-dark transition-colors duration-300"
    >
      {label}
    </button>
  );

  if (!mounted) {
    return <header className="h-20"></header>;
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-20 ${
      isScrolled ? 'bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="container h-full flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 pt-4">
          <Image
            src={theme === 'dark' ? "/IK_W.svg" : "/IK_D.svg"}
            alt="RA Ina Klimpke Logo"
            width={190}
            height={190}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = "/IK_D.svg";
            }}
          />
        </Link>
        <nav className="hidden md:flex space-x-1 items-center">
          {navItems.map((item) => (
            <NavLink key={item.href} {...item} />
          ))}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="ml-4"
          >
            {theme === 'dark' ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
          </Button>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-[1.2rem] w-[1.2rem]" />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-white dark:bg-gray-900">
            <div className="flex flex-col space-y-4 mt-4">
              {navItems.map((item) => (
                <NavLink key={item.href} {...item} />
              ))}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                {theme === 'dark' ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
