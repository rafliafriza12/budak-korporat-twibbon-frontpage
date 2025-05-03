'use client';
import { themeConfig } from '@/configs/theme.config';
import NavLayout from '@/core/layouts/nav.layout';
import { useTheme } from '@/core/providers/theme.provider';
import HeroSection from '@/core/sections/hero-section';
import CollectionsSection from '@/core/sections/collection-section';

export default function ContainerHome() {
  const { theme } = useTheme();

  return (
    <NavLayout>
      <main className={` bg-[${themeConfig[theme].primary.background}]`}>
        <HeroSection />
        <CollectionsSection />
      </main>
    </NavLayout>
  );
}
