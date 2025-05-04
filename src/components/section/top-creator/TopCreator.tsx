import CardComponentTopCreator from '@/components/card/top-creator/card';
import { cardConfigData } from '@/configs/card.config';

const TopCreator: React.FC = () => {
  return (
    <main>
      <div className=" w-screen lg:mt-[5vh] mb-[20vh]">
        <div className="flex w-full justify-center items-center flex-col gap-10 lg:gap-20">
          <h1 className="font-bold text-4xl lg:text-[4rem] text-center">Top Creator</h1>
          <div className="px-[7vw] lg:px-[4.1vw] w-full gap-10 flex pb-5 lg:pb-0 lg:grid lg:grid-cols-3 lg:grid-rows-1 lg:gap-[4rem] overflow-y-hidden ">
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
