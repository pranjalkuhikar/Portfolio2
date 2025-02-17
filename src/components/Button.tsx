interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  return (
    <div className="px-3 py-2 bg-[#DAC5A7] text-[#1D1E1F] font-normal text-sm tracking-widest uppercase cursor-pointer flex flex-col group">
      {text}
      <span className="w-0 group-hover:w-full bg-[#1D1E1F] h-[1px] rounded-xs transition-all duration-300"></span>
    </div>
  );
};

export default Button;
