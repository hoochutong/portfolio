import Image from "next/image";
import Hero from '@/components/Hero';
import AboutMe from '@/components/AboutMe';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Hero />
      <AboutMe />
      
      {/* Projects 섹션 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#1a2b4e]">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 프로젝트 카드 1 */}
            <div className="border border-[#e2e8f0] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <div className="p-4">
                <h3 className="font-bold mb-2 text-[#1a2b4e]">프로젝트 제목 1</h3>
                <p className="text-[#4a5568]">프로젝트 설명...</p>
              </div>
            </div>
            
            {/* 프로젝트 카드 2 */}
            <div className="border border-[#e2e8f0] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <div className="p-4">
                <h3 className="font-bold mb-2 text-[#1a2b4e]">프로젝트 제목 2</h3>
                <p className="text-[#4a5568]">프로젝트 설명...</p>
              </div>
            </div>
            
            {/* 프로젝트 카드 3 */}
            <div className="border border-[#e2e8f0] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <div className="p-4">
                <h3 className="font-bold mb-2 text-[#1a2b4e]">프로젝트 제목 3</h3>
                <p className="text-[#4a5568]">프로젝트 설명...</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills 섹션 */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#1a2b4e]">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-5 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
              <p className="font-semibold text-[#4a5568] text-lg">Frontend</p>
            </div>
            <div className="text-center p-5 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
              <p className="font-semibold text-[#4a5568] text-lg">JavaScript</p>
            </div>
            <div className="text-center p-5 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
              <p className="font-semibold text-[#4a5568] text-lg">React</p>
            </div>
            <div className="text-center p-5 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
              <p className="font-semibold text-[#4a5568] text-lg">TypeScript</p>
            </div>
            <div className="text-center p-5 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
              <p className="font-semibold text-[#4a5568] text-lg">AppSheet</p>
            </div>
            <div className="text-center p-5 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
              <p className="font-semibold text-[#4a5568] text-lg">Bubble.io</p>
            </div>
            <div className="text-center p-5 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
              <p className="font-semibold text-[#4a5568] text-lg">AI Prompting</p>
            </div>
            <div className="text-center p-5 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
              <p className="font-semibold text-[#4a5568] text-lg">UI/UX</p>
            </div>
            <div className="text-center p-5 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
              <p className="font-semibold text-[#4a5568] text-lg">Google Sheet</p>
            </div>
            <div className="text-center p-5 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
              <p className="font-semibold text-[#4a5568] text-lg">Apps Script</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact 섹션 */}
      <section className="py-20 bg-[#1a2b4e] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Contact</h2>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col space-y-4">
              <p className="hover:text-[#e2e8f0] transition-colors duration-300">
                Email: your.email@example.com
              </p>
              <p className="hover:text-[#e2e8f0] transition-colors duration-300">
                GitHub: github.com/yourusername
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
