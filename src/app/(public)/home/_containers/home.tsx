'use client';
import { themeConfig } from '@/configs/theme.config';
import NavLayout from '@/core/layouts/nav.layout';
import { useTheme } from '@/core/providers/theme.provider';
import HeroSection from '@/core/sections/hero-section';
import CollectionsSection from '@/core/sections/collection-section';
import TopCreator from '@/components/section/top-creator/TopCreator';
import LetTry from '@/components/section/let’t try/Let-Try';
import AttractiveTwibbon from '@/core/sections/attractive-twibbon';
import Mail from '@/components/section/mail/mail';

export default function ContainerHome() {
  const { theme } = useTheme();

  return (
    <NavLayout>
      <main className={` bg-[${themeConfig[theme].primary.background}]`}>
        <HeroSection />
        <CollectionsSection />
        <AttractiveTwibbon />
        <div className="flex flex-col items-center justify-center h-full">
          <TopCreator />
          <LetTry />
          <Mail />
        </div>
      </main>
    </NavLayout>
  );
}
