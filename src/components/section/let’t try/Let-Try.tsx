import { MoveRight } from 'lucide-react';
import Link from 'next/link';
const LetTry: React.FC = () => {
  return (
    <div className="h-screen w-screen">
      <div className="grid grid-cols-2 grid-rows-1 gap-4">
        <div className="flex justify-center items-center">
          <div className="bg-white w-[30vw] h-[50vh]"></div>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex-col">
            <div className="mb-5 flex-col">
              <h1 className="font-semibold text-[3rem]">Let’t Try Our Attractive Piece</h1>
              <p className="font-light w-[40vw] text-[1rem]">
                You can make sales and purchases of cards here. have the opportunity to offer
                affordable prices you can make contact with buyers
              </p>
            </div>
            <div className="mt-10">
              <div className="mb-5 flex-col">
                <div className="flex justify-between mb-5 border-b-2 items-center">
                  <h1 className="font-bold text-[2rem]">How to Order Personal Twibbon </h1>
                  <Link href="/">
                    <MoveRight />
                  </Link>
                </div>

                <div className="flex justify-between mt-5 items-center border-b-2 ">
                  <h1 className="font-bold text-[2rem]">How to Order Personal Twibbon </h1>
                  <Link href="/">
                    <MoveRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LetTry;
