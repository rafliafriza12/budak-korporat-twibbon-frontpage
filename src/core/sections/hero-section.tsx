'use client';
import ComponentHeroOne from '../svg/hero-section/component-hero-one';
import ComponentHeroTwo from '../svg/hero-section/component-hero-two';
import { appConfig } from '@/configs/app.config';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from '../providers/theme.provider';
import { MarqueeElementText } from '@/components/ui/marquee';
const HeroSection: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className=" w-screen lg:w-full min-h-screen flex flex-col justify-center items-center relative z-0 gap-20 lg:gap-24 py-[16vh]">
      <div className=" absolute z-[9] left-0 hidden lg:block">
        <ComponentHeroOne />
      </div>
      <div className=" absolute z-[9] right-0 hidden lg:block">
        <ComponentHeroTwo />
      </div>

      <div className="hidden lg:block">
        <Image src={appConfig.logo} alt="Budak Korporat" width={150} height={150} />
      </div>
      <div className="block lg:hidden">
        <Image src={appConfig.logo} alt="Budak Korporat" width={80} height={80} />
      </div>

      <div className=" flex flex-col items-end text-5xl lg:text-8xl font-bold lg:mr-[13vw] gap-2">
        <h1 className="">SELECT YOUR</h1>
        <div className=" flex items-center gap-6 mr-[2vw]">
          <h1 className=" font-extralight tracking-[-6px] lg:tracking-[-15px]">----</h1>
          <h1>TWIBBON</h1>
        </div>
      </div>

      <div className="flex flex-col items-start text-sm lg:text-lg min-w-[230px] max-w-[240px] lg:min-w-[280px] lg:max-w-[290px] lg:gap-5 ml-[20vw] lg:ml-0 lg:mr-[15vw]">
        <p className=" w-full">
          Combine various Style that have been obtained one free from every creator who is your
          subscription
        </p>

        <Link
          href={'#'}
          className={`${theme === 'dark' ? 'text-[#FF0000]' : 'text-foreground'} font-bold text-xs lg:text-base`}
        >
          Learn More
        </Link>
      </div>

      <div className=" w-[110vw] py-8 lg:py-14 bg-[#FF0000] -rotate-5 overflow-hidden">
        <MarqueeElementText text="SELECT YOUR FAVORITE TWIBBON" />
      </div>
    </div>
  );
};

export default HeroSection;
