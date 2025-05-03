import LaserSVG from '@/core/svg/mail-section/laser';
const Mail: React.FC = () => {
  return (
    <div className="w-screen h-screen">
      <div className="flex justify-center items-center w-screen px-[10vw]">
        <div className="bg-[#DAC402] h-[50vh] w-full relative justify-center flex items-center">
          <div className="absolute  bg-[#FF0000] h-[30vh] w-[50vw] rounded-lg  blur-[6rem] z-1"></div>
          <div className="translate-x-[15vw] translate-y-[-7vh] absolute">
            <LaserSVG />
          </div>
          <div className="flex-col flex justify-center items-center z-2">
            <h1 className="text-center font-bold text-black text-[2rem] w-[25vw]">
              Enter your email to get the latest updates from us
            </h1>
            <div className="bg-[#FDFFA8E5] flex justify-between  h-[10vh] w-[80vh]  p-2 rounded-full mt-4">
              <input
                type="text"
                className="outline-none text-black px-4 w-full"
                placeholder="Enter your email addres"
              />
              <button className="rounded-full bg-black w-[7vw] ">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mail;
