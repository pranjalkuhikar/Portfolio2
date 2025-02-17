import { MoveDown } from "lucide-react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-10  ">
      <div className="h-[32em] aspect-square">
        <img
          //   src="Pranjal_Profile.jpg"
          src="pranjal.jpg"
          //   src="image1.avif"
          alt="img"
          className="object-cover rounded-4xl"
        />
      </div>
      <div className="flex flex-col items-center justify-between">
        <div className="flex flex-col text-[9em] items-center font-light mt-10 leading-[0.9em]">
          Web Designer
          <span className=" italic font-light">& Developer</span>
        </div>
        <div className="text-balance mt-10 w-[40em] text-center text-xl tracking-wider leading-9 font-light">
          Premium Web Design, Development, and SEO services to help your
          business stand out.
        </div>
        <div className="mt-10 flex items-center font-light text-xl cursor-pointer">
          <span className="rounded-full p-2 border text-[#dac5a77c] hover:text-[#DAC5A7] border-[#dac5a73b]  hover:border-[#DAC5A7] mr-3">
            <MoveDown />
          </span>
          My Services
        </div>
      </div>
    </div>
  );
};

export default Hero;
