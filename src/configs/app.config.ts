import React from 'react';

interface AppConfig {
  name: string;
  description: string;
  logo: string;
  items: {
    addres: string;
    email: string;
    phone: string;
  }[];
  company: {
    title: string;
    href: string;
  }[];
  resource: {
    title: string;
    href: string;
  }[];
  sosial: {
    title: string;
    href: string;
  }[];
}

export const appConfig: AppConfig = {
  name: 'Bodak Korporat',
  description: 'Build your Twibbon with Budak Korporat',
  logo: '/images/logo.png',
  items: [
    {
      addres: 'Number 3891 Jhosep Marlong, Lambhuk ujong 62639, Indonesia Country',
      email: 'budakkorprat@gmail.com',
      phone: '08123456789',
    },
  ],
  company: [
    {
      title: 'collection',
      href: '/',
    },
    {
      title: 'comunity',
      href: '/',
    },
    {
      title: 'contact',
      href: '/',
    },
    {
      title: 'about',
      href: '/',
    },
  ],

  resource: [
    {
      title: 'help center',
      href: '/',
    },
    {
      title: 'platfrom status',
      href: '/',
    },
    {
      title: 'partners',
      href: '/',
    },
    {
      title: 'blog',
      href: '/',
    },
  ],

  sosial: [
    {
      title: 'instagram',
      href: '/',
    },
    {
      title: 'bribble',
      href: '/',
    },
    {
      title: 'behance',
      href: '/',
    },
    {
      title: 'facebook',
      href: '/',
    },
    {
      title: 'twitter',
      href: '/',
    },
  ],
};

interface NavigationMenuConfig {
  items: {
    title: string;
    href: string;
    icon?: React.ReactNode;
    description?: string;
    children?: NavigationMenuConfig['items'];
  }[];
}

export const navigationMenuConfig: NavigationMenuConfig = {
  items: [
    {
      title: 'COLLECTIONS',
      href: '/',
      description: 'Home',
    },
    {
      title: 'SHOP',
      href: '/',
      description: 'Shop',
    },
    {
      title: 'COMMUNITY',
      href: '/',
      description: 'Community',
    },
    {
      title: 'ABOUT',
      href: '/',
      description: 'About',
    },
    {
      title: 'CONTACT',
      href: '/',
      description: 'contact',
    },
  ],
};
