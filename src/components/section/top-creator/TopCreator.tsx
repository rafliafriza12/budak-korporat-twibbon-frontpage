import CardComponentTopCreator from '@/components/card/top-creator/card';
import { cardConfigData } from '@/configs/card.config';

const TopCreator: React.FC = () => {
  return (
    <main>
      <div className="h-screen w-screen">
        <div className="flex justify-center items-center flex-col">
          <h1 className="font-bold text-[4rem]">Top Creator</h1>
          <div className="grid grid-cols-3 grid-rows-1 gap-[4rem] mt-10 ">
            {cardConfigData.map((item, key) => (
              <CardComponentTopCreator key={key} data={item} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default TopCreator;
