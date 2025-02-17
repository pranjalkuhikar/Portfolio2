import Button from "../components/Button";

const Navbar = () => {
  return (
    <div className="flex items-center  p-10">
      <div className="border border-[#34312C] px-5 py-3 flex items-center bg-[#191716] item-center gap-6 mx-auto uppercase">
        <div className="lowercase font-normal text-2xl tracking-wider">
          pranjal.
        </div>
        <div className="font-normal flex flex-col cursor-pointer tracking-widest text-sm group">
          services
          <span className="w-0 group-hover:w-full bg-[#DAC5A7] h-[1px] rounded-xs transition-all duration-300"></span>
        </div>
        <div className="font-normal flex flex-col cursor-pointer tracking-widest text-sm group">
          work
          <span className="w-0 group-hover:w-full bg-[#DAC5A7] h-[1px] rounded-xs transition-all duration-300"></span>
        </div>
        <div className="font-normal flex flex-col cursor-pointer tracking-widest text-sm group">
          about
          <span className="w-0 group-hover:w-full bg-[#DAC5A7] h-[1px] rounded-xs transition-all duration-300"></span>
        </div>
        <div className="font-normal flex flex-col cursor-pointer tracking-widest text-sm group">
          blog
          <span className="w-0 group-hover:w-full bg-[#DAC5A7] h-[1px] rounded-xs transition-all duration-300"></span>
        </div>
        <Button text="Let's Talk" />
      </div>
    </div>
  );
};

export default Navbar;
