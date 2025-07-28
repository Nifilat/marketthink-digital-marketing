import Image from 'next/image';
import { Logo } from '@/app/icons';
import { contactBlock, bgImage, right } from '@/assets';

export default function ContactSection() {
  return (
    <section className="w-full bg-white py-16 md:py-20 px-4 md:px-8 relative">
      <div className="hidden md:block absolute right-[4%] bottom-[11%] z-30">
        <Image
          src={contactBlock}
          alt="decorative right"
          width={250}
          height={250}
          className="w-[120px] md:w-[180px] lg:w-[250px] xl:w-[21vw] min-w-[100px]"
        />
      </div>
      <div className="relative w-full max-w-6xl mx-auto min-h-[400px] overflow-hidden">
        <Image
          src={bgImage}
          alt="background"
          fill
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        />

        <div className="absolute -top-[2%] left-0 -translate-x-1/2 z-10">
          <Image src={right} alt="decorative top" width={120} height={120} className="rotate-180" />
        </div>

        {/* Main content */}
        <div className="relative z-20 w-full max-w-3xl md:mx-0 mx-auto flex flex-col items-start justify-center text-white py-12 px-12 md:px-20">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-left mb-6 pt-4">
            Subscribe to get information, latest
            <br />
            news and other interesting offers about
          </h2>
          <div className="flex items-center gap-2 md:gap-3 mb-8">
            <Logo className="h-6 w-6 md:h-10 md:w-8" />
            <span className="text-white text-lg md:text-2xl font-bold tracking-[0.02em]">
              markethink
            </span>
          </div>
          <form className="w-full flex flex-col sm:flex-row items-start justify-start gap-4">
            <input
              type="email"
              placeholder="Your email"
              className="rounded-full px-6 py-4 text-[#14183E] text-lg bg-white placeholder-[#14183E] placeholder:font-medium w-full max-w-[280px] sm:w-[320px] focus:outline-none shadow-md"
            />
            <button
              type="submit"
              className="rounded-full text-white text-xl font-semibold px-8 py-4 md:px-12 md:py-3 shadow-[0px_34px_50px_0px_#073F4312] transition hover:scale-105 bg-gradient-to-r from-[#98AA28] to-[#D6FF7E] border border-transparent cursor-pointer w-full max-w-[280px] sm:w-[320px]"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
