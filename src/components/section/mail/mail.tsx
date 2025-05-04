import LaserSVG from '@/core/svg/mail-section/laser';
import { Send } from 'lucide-react';
const Mail: React.FC = () => {
  return (
    <div className="w-screen min-h-[50vh] lg:min-h-screen">
      <div className="flex justify-center items-center w-screen px-[10vw]">
        <div className="bg-[#DAC402] h-auto lg:h-[50vh] w-full relative z-0 justify-center flex items-center overflow-hidden px-5 py-10 lg:p-5">
          <div className="absolute bg-[#FF0000]/50 h-full w-full rounded-lg blur-[6rem] z-[-5]"></div>
          <div className="right-0 top-0 absolute z-[-2]">
            <LaserSVG />
          </div>
          <div className="flex-col flex justify-center items-center z-2 gap-3 lg:gap-7">
            <h1 className="text-center font-bold text-black text-base lg:text-[2rem]">
              Enter your email to get the latest updates from us
            </h1>
            <div className="bg-[#FDFFA8E5] flex justify-between  h-[40px] lg:h-[10vh] w-full  p-2 rounded-full mt-4">
              <input
                type="text"
                className="outline-none text-black px-4 w-full"
                placeholder="Enter your email addres"
              />
              <button className="rounded-full bg-black w-[40px] lg:w-[7vw] flex justify-center items-center">
                <h1 className=" hidden lg:block">Submit</h1>
                <div>
                  <Send size={12} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mail;
