'use client';
import Marquee from 'react-fast-marquee';
import CardCollection from './card-collection';

interface MarqueeElementTextProps {
  text: string;
}

interface MarqueeElementCollectionProps {
  datas: any[];
}

export const MarqueeElementText: React.FC<MarqueeElementTextProps> = ({ text }) => {
  return (
    <Marquee direction="right" className=" flex">
      {[1, 2, 3, 4, 5, 6, 7].map((data: number, index: number) => {
        return (
          <h1 key={index} className="text-black font-semibold text-5xl mr-10">
            {text}
          </h1>
        );
      })}
    </Marquee>
  );
};

export const MarqueeElementCollection: React.FC<MarqueeElementCollectionProps> = ({ datas }) => {
  return (
    <Marquee direction="left" className=" flex">
      {datas.map((data: any, index: number) => {
        return (
          <div key={index} className=" mr-10">
            <CardCollection width="390px" height="240px" imgURL={data.imgURL} href={data.href} />
          </div>
        );
      })}
    </Marquee>
  );
};
