"use client";
import React, { useState } from 'react';

const articles = [
  {
    id: 1,
    image: '/assets/images/SEO.png',
    date: 'AUGUST 17, 2021',
    title: '10 Reasons to invest in SEO copywriting services',
    description: '',
  },
  {
    id: 2,
    image: '/assets/images/digital-marketing.png',
    date: 'AUGUST 17, 2021',
    title: 'How to get hired at a top Digital Marketing',
    description: 'Agency life. We\'ve all seen the photos posted on social media – the cool...',
  },
  {
    id: 3,
    image: '/assets/images/copywriting.png',
    date: 'AUGUST 17, 2021',
    title: 'Copywriting guidelines during the coronavirus',
    description: 'Since the coronavirus hit earlier this year, it\'s hard to go anywhere...',
  },
];

const tabs = [
  { label: 'Content Writing' },
  { label: 'Content Marketing' },
];

export default function ArticleSection() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedArticle, setSelectedArticle] = useState(0);
  const [tabTransition, setTabTransition] = useState(false);

  // Animate tab switch
  const handleTabSwitch = (idx: number) => {
    if (selectedTab !== idx) {
      setTabTransition(true);
      setTimeout(() => {
        setSelectedTab(idx);
        setSelectedArticle(0);
        setTabTransition(false);
      }, 250);
    }
  };

  return (
    <section className="w-full bg-white py-16 px-4 md:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-12">
          <h2 className="text-4xl lg:text-[42px] font-bold text-[#253D32] leading-tight mb-6 lg:mb-0 max-w-md">
            Read More Articles<br />From Our Blog
          </h2>
          <div className="flex gap-8 lg:mt-2">
            {tabs.map((tab, idx) => (
              <button
                key={tab.label}
                className={`text-lg font-normal pb-2 border-b-2 transition-colors duration-200 cursor-pointer ${
                  selectedTab === idx 
                    ? 'text-[#253D32] border-[#98AA28]' 
                    : 'text-[#808371] border-transparent hover:text-gray-600'
                }`}
                onClick={() => handleTabSwitch(idx)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div 
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-300 ${
            tabTransition ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
          }`}
        >
          {articles.map((article, idx) => {
            const isSelected = selectedArticle === idx;
            return (
              <div
                key={article.id}
                className={`bg-white border border-gray-200 cursor-pointer transition-all duration-300 hover:shadow-lg flex flex-col
                  ${isSelected ? 'scale-105 shadow-xl z-10' : 'scale-100'}
                `}
                style={{ minHeight: 420 }}
                onClick={() => setSelectedArticle(idx)}
              >
                {/* Image Container */}
                <div className="w-full aspect-[16/10] bg-gray-100 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content Container */}
                <div className="p-6">
                  {/* Date */}
                  <p className={`mb-3 font-normal tracking-wide text-[#808371] ${isSelected ? 'text-lg' : 'text-sm'}`}>
                    {article.date}
                  </p>

                  {/* Title */}
                  <h3 className={`font-medium text-[#253D32] mb-3 leading-tight ${
                    isSelected ? 'text-xl' : 'text-lg'
                  }`}>
                    {article.title}
                  </h3>

                  {/* Description */}
                  {article.description && (
                    <p className="text-[#78847D] text-lg mb-6 leading-relaxed">
                      {article.description}
                    </p>
                  )}

                  {/* Action Button */}
                  <div className="flex justify-start">
                    {isSelected ? (
                      <button
                        className="px-12 py-5 border border-[#A3B938] rounded-full text-[#98AA28] font-semibold bg-white hover:bg-[#F7FFD6] transition-all text-xl shadow-[0px_34px_50px_0px_#073F4312]"
                      >
                        Read More
                      </button>
                  ) : (
                    <span className="w-12 h-12 flex items-center justify-center border border-[#A3B938] rounded-full bg-white hover:bg-[#F7FFD6] transition-all shadow-[0px_34px_50px_0px_#073F4312];
">
                      <img src="/assets/svgs/Show.svg" alt="Show" className="w-6 h-6" />
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