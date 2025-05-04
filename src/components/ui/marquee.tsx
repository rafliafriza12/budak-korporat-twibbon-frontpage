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
    <Marquee direction="right" className=" flex overflow-hidden">
      {[1, 2, 3, 4, 5, 6, 7].map((data: number, index: number) => {
        return (
          <h1 key={index} className="text-black font-semibold text-2xl lg:text-5xl mr-10">
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
            <div className="hidden lg:block">
              <CardCollection width="390px" height="240px" imgURL={data.imgURL} href={data.href} />
            </div>
            <div className=" block lg:hidden">
              <CardCollection width="240px" height="140px" imgURL={data.imgURL} href={data.href} />
            </div>
          </div>
        );
      })}
    </Marquee>
  );
};
