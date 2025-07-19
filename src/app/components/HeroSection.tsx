import Image from 'next/image';

export default function HeroSection() {
  return (
    <section
      className="relative w-full min-h-screen flex flex-col items-center pt-[58px] overflow-hidden bg-no-repeat bg-cover font-[Rubik]"
      style={{ backgroundImage: 'url(/assets/images/background-image.png)' }}
    >
      {/* Left blocks */}
      <img
        src="/assets/svgs/left-blocks.svg"
        alt="Left Blocks"
        className="absolute left-0 bottom-0 w-24 md:w-40 lg:w-56 z-10"
        aria-hidden
      />
      {/* Right blocks */}
      <img
        src="/assets/svgs/hero-right-blocks.svg"
        alt="Right Blocks"
        className="absolute right-0 bottom-0 w-20 md:w-36 lg:w-52 z-10"
        aria-hidden
      />
      {/* V-shape lines (left and right diagonals) */}
      <img
        src="/assets/svgs/left-diagonal.svg"
        alt="Left V-shape"
        className="absolute bottom-0 left-0 w-1/2 min-w-[180px] max-w-[50vw] z-20"
        aria-hidden
      />
      <img
        src="/assets/svgs/right-diagonal.svg"
        alt="Right V-shape"
        className="absolute bottom-0 right-0 w-1/2 min-w-[180px] max-w-[50vw] z-20"
        aria-hidden
      />
      {/* Header and nav */}
      <header className="w-full max-w-7xl flex justify-between items-center md:px-8 z-30">
        <img src="/assets/svgs/logo.svg" alt="Marketthink Logo" className="h-8 md:h-10" />
        <nav className="hidden md:flex gap-8 lg:gap-12 text-white font-normal text-base">
          <a href="#features" className="hover:underline">Features</a>
          <a href="#pricing" className="hover:underline">Pricing</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact Us</a>
        </nav>
        <button
          className="hidden md:block rounded-full border border-[#EDFF8166] bg-[#FFFFFF1A] text-white font-medium text-base px-6 py-2 md:px-8 md:py-3 lg:px-10 lg:py-3 shadow-sm transition hover:scale-105"
          style={{ borderRadius: '116px', borderWidth: 1 }}
        >
          Free Trial
        </button>
      </header>
      {/* Hero content */}
      <div className="relative z-30 flex flex-col items-center justify-center text-center mt-16 md:mt-28 px-4">
        {/* Horizontal lines and subtitle */}
        <div className="flex items-center gap-3 mb-2">
          <img src="/assets/svgs/horizontal-line.svg" alt="line" className="h-1 w-6 md:w-8" />
          <span className="text-gray-200 text-lg md:text-xl font-semibold">The Best</span>
          <img src="/assets/svgs/horizontal-line.svg" alt="line" className="h-1 w-6 md:w-8" />
        </div>
        {/* Main title - single line with squiggly line centered below */}
        <div className="relative flex flex-col items-center">
          <h1 className="font-[Rubik] font-semibold text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[90px] leading-[1] tracking-[0.04em] text-white mb-2">
            Digital Marketing
          </h1>
          <img src="/assets/svgs/sqiggly-line.svg" alt="squiggly underline" className="absolute right-[0px] -translate-x-1/2 bottom-0 " />
        </div>
        {/* Description */}
        <p className="text-gray-200 text-base md:text-lg max-w-xl md:max-w-2xl mt-6 mb-8">
          Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer
        </p>
        {/* Get Started button */}
        <button
          className="rounded-full border text-white text-xl font-semibold px-8 py-4 md:px-12 md:py-5 shadow-lg transition hover:scale-105"
          style={{
            background: 'linear-gradient(328.68deg, #98AA28 13.03%, #D6FF7E 120.61%)',
            borderWidth: 1,
            borderStyle: 'solid',
            borderRadius: '192px',
            boxShadow: '0px 34px 50px 0px #073F4312',
          }}
        >
          Get Started
        </button>
      </div>
    </section>
  );
} 