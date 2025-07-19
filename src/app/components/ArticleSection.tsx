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
    description: 'Agency life. We’ve all seen the photos posted on social media – the cool...',
  },
  {
    id: 3,
    image: '/assets/images/copywriting.png',
    date: 'AUGUST 17, 2021',
    title: 'Copywriting guidelines during the coronavirus',
    description: 'Since the coronavirus hit earlier this year, it’s hard to go anywhere...',
  },
];

const tabs = [
  { label: 'Content Writing' },
  { label: 'Content Marketing' },
];

export default function ArticleSection() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedArticle, setSelectedArticle] = useState(0);

  return (
    <section className="w-full bg-white py-16 px-4 md:px-0 font-[Rubik]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#234336] leading-tight mb-4 md:mb-0">
            Read More Articles<br />From Our Blog
          </h2>
          <div className="flex gap-8 mt-2 md:mt-0 md:ml-auto">
            {tabs.map((tab, idx) => (
              <button
                key={tab.label}
                className={`text-xl font-medium pb-2 border-b-2 transition-colors duration-200 ${selectedTab === idx ? 'text-[#234336] border-[#D6FF7E]' : 'text-gray-400 border-transparent'}`}
                onClick={() => { setSelectedTab(idx); setSelectedArticle(0); }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8 items-stretch justify-center">
          {articles.map((article, idx) => {
            const isSelected = selectedArticle === idx;
            return (
              <div
                key={article.id}
                className={`transition-all duration-300 bg-white rounded-xl shadow-sm border border-[#F4F4F4] flex flex-col cursor-pointer overflow-hidden
                  ${isSelected ? 'scale-105 z-10 shadow-lg flex-[1.5]' : 'scale-95 opacity-80 flex-1'}
                `}
                style={{ minWidth: 0, maxWidth: 400 }}
                onClick={() => setSelectedArticle(idx)}
              >
                <div className="w-full aspect-[16/10] bg-gray-100 flex items-center justify-center">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="px-6 py-4 w-full flex-1 flex flex-col">
                  <div className="text-xs text-gray-400 mb-2">{article.date}</div>
                  <div className={`font-semibold text-[#234336] mb-2 ${isSelected ? 'text-xl md:text-2xl' : 'text-base md:text-lg'}`}>{article.title}</div>
                  {article.description && <div className="text-gray-500 text-sm mb-4">{article.description}</div>}
                  <div className="mt-auto flex justify-start">
                    {isSelected ? (
                      <button className="px-8 py-2 border-2 border-[#D6FF7E] rounded-full text-[#234336] font-semibold bg-white hover:bg-[#F7FFD6] transition-all text-lg">
                        Read More
                      </button>
                    ) : (
                      <span className="w-12 h-12 flex items-center justify-center border-2 border-[#D6FF7E] rounded-full bg-white hover:bg-[#F7FFD6] transition-all">
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