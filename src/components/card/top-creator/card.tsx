import Image from 'next/image';
import { themeConfig } from '@/configs/theme.config';
import { useTheme } from '@/core/providers/theme.provider';
import { CardConfigProps } from '@/configs/card.config';

const CardComponentTopCreator: React.FC<CardConfigProps> = ({ data }) => {
  const { theme } = useTheme();

  return (
    <main className={`flex border-2 h-[40vh] w-[35vh] bg-card flex-col items-center relative`}>
      <div className="bg-[#D9D9D9] w-[15vw] h-[20vh] mt-4"></div>
      <div className="bg-[#D9D9D9]  w-20 h-20 scale-1.5 border-2  absolute top-40 rounded-full border-black"></div>
      <div className="flex-col items-start w-[15vw] h-[15vh] mt-10 text-center">
        <h1 className="">{data.username}</h1>
        <h1 className="font-light">{data.desc}</h1>

        <div className="w-full border-2 flex justify-center mt-4 h-[5vh]">
          <button className="">Follow</button>
        </div>
      </div>
    </main>
  );
};
export default CardComponentTopCreator;
