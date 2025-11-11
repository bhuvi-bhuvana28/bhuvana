"use client";

import { useState, useEffect } from "react";
import { newsData, schemesData, translations } from "@/lib/data";
import NewsCard from "@/components/NewsCard";
import SchemeCard from "@/components/SchemeCard";
import VoiceAssistant from "@/components/VoiceAssistant";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import FeaturesSection from "@/components/FeaturesSection";

export default function Home() {
  const [locale, setLocale] = useState<"en" | "hi" | "kn">("en");
  const [selectedRegion, setSelectedRegion] = useState<string>("All");
  const [showVoiceAssistant, setShowVoiceAssistant] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const t = translations[locale];

  // Get unique regions
  const regions = ["All", ...Array.from(new Set(newsData.map(news => news.region)))];

  // Filter news by region and search
  const filteredNews = newsData.filter(news => {
    const matchesRegion = selectedRegion === "All" || news.region === selectedRegion;
    const matchesSearch = searchQuery === "" || 
      news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      news.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      news.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesRegion && matchesSearch;
  });

  // Filter schemes by search
  const filteredSchemes = schemesData.filter(scheme => {
    if (searchQuery === "") return true;
    return scheme.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scheme.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scheme.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-amber-50 to-green-50">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-green-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="text-4xl">🌾</div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-green-800">
                  {t.siteName}
                </h1>
                <p className="text-xs text-green-600 hidden sm:block">{t.tagline}</p>
              </div>
            </div>
            <LanguageSwitcher locale={locale} setLocale={setLocale} />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-600 via-green-700 to-green-800 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-bold mb-6 leading-tight">
              {t.tagline}
            </h2>
            <p className="text-lg sm:text-xl mb-8 text-green-100">
              {t.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => document.getElementById('news-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-8 py-4 bg-white text-green-700 rounded-lg font-semibold text-lg hover:bg-green-50 transition-all transform hover:scale-105 shadow-lg"
              >
                {t.getLocalNews}
              </button>
              <button
                onClick={() => setShowVoiceAssistant(true)}
                className="w-full sm:w-auto px-8 py-4 bg-green-500 text-white rounded-lg font-semibold text-lg hover:bg-green-400 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                <span className="text-2xl">🎤</span>
                {t.talkToAssistant}
              </button>
            </div>
            <p className="mt-6 text-sm text-green-200">
              {t.availableIn}
            </p>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="bg-white rounded-xl shadow-xl p-4 border-2 border-green-200">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl">🔍</span>
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-4 py-3 border-2 border-green-300 rounded-lg focus:outline-none focus:border-green-500 text-lg"
              />
            </div>
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="px-6 py-3 border-2 border-green-300 rounded-lg focus:outline-none focus:border-green-500 text-lg bg-white"
            >
              {regions.map(region => (
                <option key={region} value={region}>
                  {region === "All" ? t.allRegions : region}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FeaturesSection locale={locale} />

      {/* Latest News Section */}
      <section id="news-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-4xl">📰</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-green-800">
            {t.latestNews}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.map(news => (
            <NewsCard key={news.id} news={news} locale={locale} />
          ))}
        </div>
        {filteredNews.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500">No news found matching your criteria.</p>
          </div>
        )}
      </section>

      {/* Government Schemes Section */}
      <section className="bg-white/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-4xl">🏛️</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-green-800">
              {t.governmentSchemes}
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredSchemes.map(scheme => (
              <SchemeCard key={scheme.id} scheme={scheme} locale={locale} />
            ))}
          </div>
          {filteredSchemes.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-500">No schemes found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl">🌾</span>
                <h3 className="text-xl font-bold">{t.siteName}</h3>
              </div>
              <p className="text-green-200">
                Empowering farmers with timely information and government support.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">{t.features}</h4>
              <ul className="space-y-2 text-green-200">
                <li>• {t.feature1Title}</li>
                <li>• {t.feature2Title}</li>
                <li>• {t.feature3Title}</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">{t.contact}</h4>
              <p className="text-green-200 mb-2">📞 Toll-Free: 1800-XXX-XXXX</p>
              <p className="text-green-200 mb-2">📧 support@agriportal.gov.in</p>
              <p className="text-green-200">🕒 24/7 Support Available</p>
            </div>
          </div>
          <div className="border-t border-green-800 mt-8 pt-8 text-center text-green-300">
            <p>© 2025 Agricultural News & Scheme Portal. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Voice Assistant Modal */}
      {showVoiceAssistant && (
        <VoiceAssistant
          locale={locale}
          onClose={() => setShowVoiceAssistant(false)}
        />
      )}

      {/* Floating Voice Button */}
      <button
        onClick={() => setShowVoiceAssistant(true)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-green-600 text-white rounded-full shadow-2xl hover:bg-green-500 transition-all transform hover:scale-110 flex items-center justify-center text-3xl z-50"
        aria-label={t.voiceAssistant}
      >
        🎤
      </button>
    </div>
  );
}
