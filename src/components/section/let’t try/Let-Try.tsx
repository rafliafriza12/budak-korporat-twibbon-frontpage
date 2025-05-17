import { MoveRight } from 'lucide-react';
import Link from 'next/link';
const LetTry: React.FC = () => {
  return (
    <div className="min-h-screen w-screen">
      <div className=" w-full px-[10vw] grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-1 gap-4">
        <div className="flex justify-start items-center w-full">
          <div className="bg-white w-full h-[30vh] lg:h-[50vh]"></div>
        </div>
        <div className="flex justify-center items-center w-full lg:pl-8">
          <div className="flex-col flex w-full">
            <div className="mb-5 flex-col">
              <h1 className="font-semibold text-[3rem]">Let’s Try Our Attractive Piece</h1>
              <p className="font-light w-full text-[1rem]">
                You can make sales and purchases of cards here. have the opportunity to offer
                affordable prices you can make contact with buyers
              </p>
            </div>
            <div className="mt-10">
              <div className="mb-5 flex-col">
                <div className="flex justify-between mb-5 border-b-2 items-center">
                  <h1 className="font-bold text-lg lg:text-[2rem]">
                    How to Order Personal Twibbon{' '}
                  </h1>
                  <Link href="/">
                    <MoveRight />
                  </Link>
                </div>

                <div className="flex justify-between mt-5 items-center border-b-2 ">
                  <h1 className="font-bold text-lg lg:text-[2rem]">
                    How to Order Personal Twibbon{' '}
                  </h1>
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
