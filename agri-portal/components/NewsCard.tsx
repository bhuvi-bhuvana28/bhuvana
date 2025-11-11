"use client";

import { useState } from "react";
import { NewsItem, translations } from "@/lib/data";

interface NewsCardProps {
  news: NewsItem;
  locale: "en" | "hi" | "kn";
}

export default function NewsCard({ news, locale }: NewsCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const t = translations[locale];

  const handlePlayAudio = () => {
    if ('speechSynthesis' in window) {
      if (isPlayingAudio) {
        window.speechSynthesis.cancel();
        setIsPlayingAudio(false);
      } else {
        const utterance = new SpeechSynthesisUtterance(news.audioScript);
        utterance.lang = locale === 'en' ? 'en-IN' : locale === 'hi' ? 'hi-IN' : 'kn-IN';
        utterance.rate = 0.9;
        utterance.onend = () => setIsPlayingAudio(false);
        window.speechSynthesis.speak(utterance);
        setIsPlayingAudio(true);
      }
    }
  };

  const getActionButton = () => {
    const baseClasses = "px-4 py-2 rounded-lg font-semibold transition-all transform hover:scale-105";
    switch (news.action) {
      case "Apply":
        return (
          <button className={`${baseClasses} bg-green-600 text-white hover:bg-green-700`}>
            {t.apply}
          </button>
        );
      case "Save":
        return (
          <button className={`${baseClasses} bg-blue-600 text-white hover:bg-blue-700`}>
            {t.save}
          </button>
        );
      case "Call":
        return (
          <button className={`${baseClasses} bg-orange-600 text-white hover:bg-orange-700`}>
            {t.call}
          </button>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-green-100 hover:border-green-300">
      {/* Header with date and region */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-3">
        <div className="flex justify-between items-center text-sm">
          <span className="flex items-center gap-1">
            📍 {news.region}
          </span>
          <span className="flex items-center gap-1">
            📅 {new Date(news.date).toLocaleDateString(locale === 'en' ? 'en-IN' : locale === 'hi' ? 'hi-IN' : 'kn-IN')}
          </span>
        </div>
      </div>

      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
          {news.title}
        </h3>

        {/* Summary */}
        <p className="text-gray-600 mb-4 line-clamp-3">
          {news.summary}
        </p>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="mb-4 p-4 bg-green-50 rounded-lg border border-green-200">
            <p className="text-gray-700">{news.content}</p>
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {news.tags.map(tag => (
            <span
              key={tag}
              className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-all"
          >
            {isExpanded ? "Show Less" : t.readMore}
          </button>
          
          <button
            onClick={handlePlayAudio}
            className={`px-4 py-2 rounded-lg font-semibold transition-all flex items-center gap-2 ${
              isPlayingAudio 
                ? 'bg-red-100 text-red-700 hover:bg-red-200' 
                : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
            }`}
          >
            <span className="text-xl">{isPlayingAudio ? '⏸️' : '🔊'}</span>
            {isPlayingAudio ? t.stopAudio : t.playAudio}
          </button>

          {getActionButton()}
        </div>
      </div>
    </div>
  );
}
