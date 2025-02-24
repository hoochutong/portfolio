import Image from 'next/image';

export default function AboutMe() {
  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-[#1a2b4e]">Introduce</h2>
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-8">
          <div className="w-[270px] flex-shrink-0">
            <div className="w-[270px] h-[270px] relative rounded-lg overflow-hidden">
              <Image
                src="/profile.png"
                alt="Profile Image"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          
          <div className="w-full">
            <p className="text-[#4a5568] leading-relaxed text-center">
              자기소개 내용을 작성해주세요...
              <br /><br />
              더 많은 내용을 추가할 수 있습니다...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 