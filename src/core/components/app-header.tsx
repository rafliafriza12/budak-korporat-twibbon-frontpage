'use client';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { navigationMenuConfig } from '@/configs/app.config';
import { cn } from '@/utils/classname';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import UserDropdown from './user.dropdown';
import LanguageDropdown from './language.dropdown';
import MenuDropdown from './menu.dropdown';
import { useIsMobile } from '@/hooks/use-mobile';
export default function AppHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm p-6 border-b transition-all duration-200 w-screen',
        isScrolled ? 'border-b-border shadow-md' : 'border-b-transparent'
      )}
    >
      <div className="flex items-center justify-between w-full lg:max-w-7xl mx-auto">
        <div>
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={isMobile ? 35 : 40}
              height={isMobile ? 35 : 40}
            />
          </Link>
        </div>
        <div className="hidden lg:flex items-center gap-4">
          {/* Company Logo */}

          <NavigationMenu>
            <NavigationMenuList>
              {navigationMenuConfig?.items?.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuLink href={item.href} className={navigationMenuTriggerStyle()}>
                    {item.title}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          {/* <ThemeToggle /> */}
          <LanguageDropdown />
          <button className="block lg:hidden ">
            <MenuDropdown />
          </button>
          {/* <NotificationDropdown />
          <UserDropdown /> */}
        </div>
      </div>
    </nav>
  );
}
