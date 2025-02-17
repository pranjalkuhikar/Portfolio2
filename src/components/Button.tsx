interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  return (
    <div className="px-3 py-2 bg-[#DAC5A7] text-[#1D1E1F] font-light tracking-widest uppercase">
      {text}
    </div>
  );
};

export default Button;
