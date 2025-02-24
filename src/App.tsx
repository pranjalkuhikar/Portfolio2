import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";

const App = () => {
  return (
    <div className="bg-[#0E0E0E] min-h-screen w-full text-[#DAC5A7] font-[Helvetica_Now_Display]">
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
