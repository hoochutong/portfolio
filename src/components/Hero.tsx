export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-[#f8fafc]">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-[#1a2b4e]">Hello, I'm [Name]</h1>
        <p className="text-xl mb-6 text-[#4a5568]">[Role] Developer</p>
        <button className="bg-[#1a2b4e] text-white px-6 py-2 rounded-full hover:bg-[#2d4270] transition-colors duration-300">
          Contact Me
        </button>
      </div>
    </section>
  );
} 