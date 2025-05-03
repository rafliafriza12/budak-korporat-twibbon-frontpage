'use client';
import { themeConfig } from '@/configs/theme.config';
import NavLayout from '@/core/layouts/nav.layout';
import { useTheme } from '@/core/providers/theme.provider';
import TopCreator from '@/components/section/top-creator/TopCreator';
import LetTry from '@/components/section/let’t try/Let-Try';

export default function ContainerHome() {
  const { theme } = useTheme();

  return (
    <NavLayout>
      <main className={`container mx-auto bg-[${themeConfig[theme].primary.background}]`}>
        <div className="flex flex-col items-center justify-center h-full">
          <TopCreator />
          <LetTry />
        </div>
      </main>
    </NavLayout>
  );
}
