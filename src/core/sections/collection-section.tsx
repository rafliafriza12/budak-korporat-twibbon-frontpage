'use client';

import React from 'react';
import { MarqueeElementText, MarqueeElementCollection } from '@/components/ui/marquee';
import CardCollection from '@/components/ui/card-collection';
import Link from 'next/link';
import Letter from '../svg/collection-section/letter';
import GlowingNeonLines from '../svg/collection-section/curve';

const datas: any[] = [
  {
    imgURL: '../../../public/images/test.png',
    href: '#',
  },
  {
    imgURL: '../../../public/images/test.png',
    href: '#',
  },
  {
    imgURL: '../../../public/images/test.png',
    href: '#',
  },
  {
    imgURL: '../../../public/images/test.png',
    href: '#',
  },
  {
    imgURL: '../../../public/images/test.png',
    href: '#',
  },
  {
    imgURL: '../../../public/images/test.png',
    href: '#',
  },
];

const CollectionsSection: React.FC = () => {
  return (
    <div className=" w-full min-h-screen flex flex-col justify-center items-center relative z-0 gap-7 lg:gap-10 lg:py-[16vh]">
      <h1 className=" font-semibold text-2xl w-[220px] lg:text-5xl lg:min-w-[450px] lg:max-w-[500px] text-center lg:leading-16">
        Check Out Some of Our Image Qualities
      </h1>

      <p className="text-center w-[320px] lg:min-w-[500px] lg:max-w-[550px] text-xs lg:text-lg text-[#8C8C8C]">
        A wide variety of Twibbon from our creators with the best quality, we always help you find
        what you want, let's get your best NFTs now
      </p>

      <div className="w-screen  items-center justify-between hidden lg:flex">
        <CardCollection width="49%" height="400px" imgURL={datas[0].imgURL} href={datas[0].href} />
        <CardCollection width="49%" height="400px" imgURL={datas[0].imgURL} href={datas[0].href} />
      </div>

      <div className="w-screen items-center justify-between flex lg:hidden">
        <CardCollection width="49%" height="300px" imgURL={datas[0].imgURL} href={datas[0].href} />
        <CardCollection width="49%" height="300px" imgURL={datas[0].imgURL} href={datas[0].href} />
      </div>
      <div className=" w-screen ">
        <MarqueeElementCollection datas={datas} />
      </div>

      <h1 className=" text-3xl lg:text-[9rem] font-bold text-center max-w-[290px] lg:max-w-[1500px] mt-20 lg:mt-36">
        FIND AND COLLECT POPULAR STYLE
      </h1>

      <div className=" w-screen py-8 lg:py-14 bg-[#FF0000] ">
        <MarqueeElementText text="SELECT YOUR FAVORITE TWIBBON" />
      </div>

      <div className=" w-screen px-[10vw] grid grid-cols-1 lg:grid-cols-3 mt-20 ">
        {/* <div className="w-full rotate-x-[180deg] absolute z-[-5] scale-[2] top-[130px] block lg:hidden">
          <GlowingNeonLines />
        </div> */}

        <div className=" w-full flex flex-col justify-center items-start gap-5">
          <h1 className=" text-5xl font-semibold max-w-[400px] leading-14 text-left">
            Discovery Twibbon From Each of Our Creators
          </h1>

          <p className=" w-full text-left text-[#8C8C8C]">
            You stand a chance to get the best Twibbon which is amazing. You can collect some item
            from all content creators from our marketplace
          </p>

          <Link href={'#'} className="px-7 py-3 bg-[#FF0000] inline-block text-black font-semibold">
            Learn More
          </Link>
        </div>
        <div className=" w-full justify-center items-center relative z-[-4] lg:z-0 group ">
          <div className="w-full rotate-x-[180deg] absolute z-[-5] scale-[2] top-[-330px] left-[30px] lg:left-0 lg:top-[100px] hidden lg:block h-[400px] lg:h-auto">
            <GlowingNeonLines />
          </div>
          <div className="hidden lg:block">
            <Letter />
          </div>
          <div className="absolute z-[5] group-hover:translate-x-[100px] group-hover:-translate-y-[100px] duration-500 hidden ">
            <Letter />
          </div>
          <div className=" w-[340px] h-[340px] rounded-full bg-[#8e5cd9]/40 absolute z-[-2] top-5 left-7 blur-[120px] hidden lg:block  "></div>
          <div className=" w-[340px] h-[340px] rounded-full bg-[#6b9ff2]/40 absolute z-[-2] bottom-1 right-0 blur-[120px] hidden lg:block "></div>
        </div>
        <div className="w-full flex lg:flex-col justify-between lg:justify-center items-center lg:items-end gap-5 py-10 lg:py-0">
          <div className=" flex flex-col items-center gap-3">
            <h1 className="text-2xl lg:text-5xl font-bold">2485+</h1>
            <h1 className="text-sm lg:text-lg text-[#8C8C8C]">Available Twibbon</h1>
          </div>
          <div className=" flex flex-col items-center gap-3">
            <h1 className="text-2xl lg:text-5xl font-bold">9785+</h1>
            <h1 className="text-sm lg:text-lg text-[#8C8C8C]">Twibbon Use</h1>
          </div>
          <div className=" flex flex-col items-center gap-3">
            <h1 className="text-2xl lg:text-5xl font-bold">14+</h1>
            <h1 className="text-sm lg:text-lg text-[#8C8C8C]">Creator</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionsSection;
