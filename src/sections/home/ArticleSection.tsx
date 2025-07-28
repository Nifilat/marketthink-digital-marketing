'use client';
import { useState } from 'react';
import Image from 'next/image';
import { articles, tabs, TAB_TRANSITION_DELAY_MS } from '@/app/constants';
import { show } from '../../../public/assets';

export default function ArticleSection() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedArticle, setSelectedArticle] = useState(0);
  const [tabTransition, setTabTransition] = useState(false);

  const handleTabSwitch = (idx: number) => {
    if (selectedTab !== idx) {
      setTabTransition(true);
      setTimeout(() => {
        setSelectedTab(idx);
        setSelectedArticle(0);
        setTabTransition(false);
      }, TAB_TRANSITION_DELAY_MS);
    }
  };

  return (
    <section className="w-full bg-white py-8 md:py-16 px-4 md:px-8 lg:px-16 xl:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-[42px] font-bold text-[#253D32] leading-normal mb-6 lg:mb-0 max-w-md">
            Read More Articles From Our Blog
          </h2>
          <div className="flex gap-4 md:gap-8 mt-4 lg:mt-8">
            {tabs.map((tab, idx) => (
              <button
                key={tab.label}
                className={`relative text-lg font-normal pb-2 transition-colors duration-200 cursor-pointer flex flex-col items-center ${
                  selectedTab === idx ? 'text-[#253D32]' : 'text-[#808371] hover:text-gray-600'
                }`}
                onClick={() => handleTabSwitch(idx)}
              >
                <span>{tab.label}</span>
                {selectedTab === idx && (
                  <span className="block mt-2 w-[104px] h-[3px] bg-[#98AA28] rounded-xs" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div
          className={`flex flex-wrap gap-6 items-stretch transition-all duration-300 ${
            tabTransition ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
          }`}
        >
          {articles.map((article, idx) => {
            const isSelected = selectedArticle === idx;
            return (
              <div
                key={article.id}
                className={`bg-white cursor-pointer flex flex-col overflow-hidden transition-[flex-basis] duration-300 flex-grow max-w-full ${
                  isSelected ? 'z-10 basis-[500px] min-w-[320px]' : 'basis-[280px] min-w-[200px]'
                }`}
                onClick={() => setSelectedArticle(idx)}
              >
                <div
                  data-selected={isSelected}
                  className="w-full data-[selected=true]:aspect-[540/343] aspect-[270/245] bg-white overflow-hidden flex items-center justify-start "
                >
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={200}
                    height={150}
                    className="max-h-full w-full h-full object-cover"
                  />
                </div>

                <div className="pb-6 pt-6 py-6 flex flex-col flex-1">
                  <p
                    className={`mb-3 font-normal tracking-wide text-[#808371] ${isSelected ? 'text-base' : 'text-sm'}`}
                  >
                    {article.date}
                  </p>

                  <h3
                    className={`font-medium text-[#253D32] mb-3 leading-tight ${
                      isSelected ? 'text-xl' : 'text-lg'
                    }`}
                  >
                    {article.title}
                  </h3>

                  {article.description && (
                    <p
                      className={`text-[#78847D] text-base mb-6 leading-relaxed flex-1 ${!isSelected ? 'line-clamp-2' : ''}`}
                    >
                      {article.description}
                    </p>
                  )}

                  <div className="flex justify-start mt-auto">
                    {isSelected ? (
                      <button className="px-12 py-4 border border-[#A3B938] rounded-full text-[#98AA28] font-semibold bg-white hover:bg-[#F7FFD6] transition-all text-lg shadow-[0px_4px_20px_0px_rgba(7,63,67,0.1)]">
                        Read More
                      </button>
                    ) : (
                      <span className="w-12 h-12 flex items-center justify-center border border-[#A3B938] rounded-full bg-white hover:bg-[#F7FFD6] transition-all shadow-[0px_34px_50px_0px_#073F4312]">
                        <Image src={show} alt="Show Icon" width={24} height={24} />
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
