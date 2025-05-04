import Image from 'next/image';
import { themeConfig } from '@/configs/theme.config';
import { useTheme } from '@/core/providers/theme.provider';
import { CardConfigProps } from '@/configs/card.config';

const CardComponentTopCreator: React.FC<CardConfigProps> = ({ data }) => {
  const { theme } = useTheme();

  return (
    <main
      className={`flex border-2 w-[80vw] h-[45vh] lg:h-auto lg:w-[35vh] bg-card flex-col items-center gap-[50px]  p-5`}
    >
      <div className="bg-[#D9D9D9] w-[100%] h-[300px] relative z-0 p-5 flex justify-center">
        <div className="bg-[#D9D9D9]  w-20 h-20 scale-1.5 border-2  absolute -bottom-[40px] rounded-full border-black"></div>
      </div>
      <div className="flex flex-col w-full gap-2 text-center items-center">
        <h1 className="">{data.username}</h1>
        <h1 className="font-light">{data.desc}</h1>
        <div className="w-full border-2 flex justify-center h-[5vh]">
          <button className="">Follow</button>
        </div>
      </div>
    </main>
  );
};
export default CardComponentTopCreator;
