'use client';

import Image from 'next/image';
import testImage from '../../../public/images/test.png';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

interface CardCollectionProps {
  width: string;
  height: string;
  imgURL: string;
  href: string;
}

const CardCollection: React.FC<CardCollectionProps> = ({ width, height, imgURL, href }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <div
      style={{ width, height }}
      className="overflow-hidden relative z-0 flex items-end justify-end"
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image src={testImage} alt="Testing" className="object-cover w-full h-full absolute z-[-1]" />
      {isHovered && (
        <Link href={href} className=" flex items-center px-7 py-3 bg-[#FF0000] gap-2">
          <span className=" font-bold text-black">TRY NOW</span>
          <ArrowRight color="black" />
        </Link>
      )}
    </div>
  );
};

export default CardCollection;
