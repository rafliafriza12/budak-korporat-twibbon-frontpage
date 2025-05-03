import CardComponentTopCreator from '@/components/card/top-creator/card';
import { cardConfigData } from '@/configs/card.config';

const TopCreator: React.FC = () => {
  return (
    <main>
      <div className=" w-screen mb-[20vh]">
        <div className="flex w-full justify-center items-center flex-col gap-20">
          <h1 className="font-bold text-[4rem]">Top Creator</h1>
          <div className="px-[4.1vw] w-full grid grid-cols-3 grid-rows-1 gap-[4rem]  ">
            {cardConfigData.map((item: any, key: number) => {
              if (key < 3)
                return (
                  <div className=" w-full flex justify-center">
                    <CardComponentTopCreator key={key} data={item} />
                  </div>
                );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default TopCreator;
