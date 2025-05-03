import React from 'react';

export interface CardConfig {
  image?: string;
  username: string;
  desc: string;
}

export const cardConfigData: CardConfig[] = [
  {
    username: 'Username',
    desc: '623 Product Item',
    image: '',
  },
  {
    username: 'Username',
    desc: '623 Product Item',
    image: '',
  },
  {
    username: 'Username',
    desc: '623 Product Item',
    image: '',
  },
];

export interface CardConfigProps {
  data: CardConfig;
}
