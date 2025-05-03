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
    <div className=" w-full min-h-screen flex flex-col justify-center items-center relative z-0 gap-10 py-[16vh]">
      <h1 className=" font-semibold text-5xl min-w-[450px] max-w-[500px] text-center leading-16">
        Check Out Some of Our Image Qualities
      </h1>

      <p className="text-center min-w-[500px] max-w-[550px] text-lg text-[#8C8C8C]">
        A wide variety of Twibbon from our creators with the best quality, we always help you find
        what you want, let's get your best NFTs now
      </p>

      <div className="w-screen  flex items-center justify-between">
        <CardCollection width="49%" height="400px" imgURL={datas[0].imgURL} href={datas[0].href} />
        <CardCollection width="49%" height="400px" imgURL={datas[0].imgURL} href={datas[0].href} />
      </div>
      <div className=" w-screen ">
        <MarqueeElementCollection datas={datas} />
      </div>

      <h1 className=" text-[9rem] font-bold text-center max-w-[1500px] mt-36">
        FIND AND COLLECT POPULAR STYLE
      </h1>

      <div className=" w-screen py-14 bg-[#FF0000] ">
        <MarqueeElementText text="SELECT YOUR FAVORITE TWIBBON" />
      </div>

      <div className=" w-screen px-[10vw] grid grid-cols-3 mt-20 relative z-0 ">
        <div className=" w-full flex flex-col justify-center items-start gap-5">
          <h1 className=" text-5xl font-semibold max-w-[400px] leading-14 text-left">
            Discovery Twibbon From Each of Our Creators
          </h1>

          <p className=" w-full text-left text-[#8C8C8C]">
            You stand a chance to get the best Twibbon which is amazing. You can collect some items
            from all content creators from our marketplace
          </p>

          <Link href={'#'} className="px-7 py-3 bg-[#FF0000] inline-block text-black font-semibold">
            Learn More
          </Link>
        </div>
        <div className=" w-full flex justify-start items-end relative z-0 group">
          <div className="w-full rotate-x-[180deg] absolute z-[-5] scale-[2] top-[130px]">
            <GlowingNeonLines />
          </div>
          <div className="">
            <Letter />
          </div>
          <div className="absolute z-[5] group-hover:translate-x-[100px] group-hover:-translate-y-[100px] duration-500">
            <Letter />
          </div>
          <div className=" w-[440px] h-[440px] rounded-full bg-[#01A959]/40 absolute z-[-2] top-0 blur-3xl opacity-0 group-hover:opacity-[1] duration-500"></div>
        </div>
        <div className="w-full flex flex-col justify-center items-end gap-5">
          <div className=" flex flex-col items-center gap-3">
            <h1 className="text-5xl font-bold">2485+</h1>
            <h1 className="text-lg text-[#8C8C8C]">Available Twibbon</h1>
          </div>
          <div className=" flex flex-col items-center gap-3">
            <h1 className="text-5xl font-bold">9785+</h1>
            <h1 className="text-lg text-[#8C8C8C]">Twibbon Use</h1>
          </div>
          <div className=" flex flex-col items-center gap-3">
            <h1 className="text-5xl font-bold">14+</h1>
            <h1 className="text-lg text-[#8C8C8C]">Creator</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionsSection;
