"use client";

import { useState } from "react";
import { Scheme, translations } from "@/lib/data";

interface SchemeCardProps {
  scheme: Scheme;
  locale: "en" | "hi" | "kn";
}

export default function SchemeCard({ scheme, locale }: SchemeCardProps) {
  const [showDetails, setShowDetails] = useState(false);
  const t = translations[locale];

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-amber-100 hover:border-amber-300">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-4">
        <h3 className="text-xl font-bold mb-2">{scheme.title}</h3>
        <div className="flex flex-wrap gap-2">
          {scheme.tags.slice(0, 3).map(tag => (
            <span
              key={tag}
              className="px-2 py-1 bg-white/20 rounded-full text-xs font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      <div className="p-6">
        {/* Description */}
        <p className="text-gray-700 mb-4 text-lg">
          {scheme.description}
        </p>

        {/* Quick Info */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-green-50 p-3 rounded-lg border border-green-200">
            <p className="text-xs text-green-600 font-semibold mb-1">Land Size</p>
            <p className="text-sm text-gray-800">
              {scheme.eligibility.min_land_hectares} - {scheme.eligibility.max_land_hectares} hectares
            </p>
          </div>
          <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
            <p className="text-xs text-blue-600 font-semibold mb-1">{t.deadline}</p>
            <p className="text-sm text-gray-800">
              {scheme.deadline || "Ongoing"}
            </p>
          </div>
        </div>

        {/* Expanded Details */}
        {showDetails && (
          <div className="space-y-4 mb-4">
            {/* Benefits */}
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="font-bold text-green-800 mb-2 flex items-center gap-2">
                <span className="text-xl">✅</span> {t.benefits}
              </h4>
              <ul className="space-y-2">
                {scheme.benefits.map((benefit, index) => (
                  <li key={index} className="text-gray-700 flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Eligibility */}
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-bold text-blue-800 mb-2 flex items-center gap-2">
                <span className="text-xl">📋</span> {t.eligibility}
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Land: {scheme.eligibility.min_land_hectares} - {scheme.eligibility.max_land_hectares} hectares</li>
                <li>• Ownership: {scheme.eligibility.ownership_required ? "Required" : "Not Required"}</li>
              </ul>
            </div>

            {/* Documents */}
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h4 className="font-bold text-purple-800 mb-2 flex items-center gap-2">
                <span className="text-xl">📄</span> {t.documents}
              </h4>
              <div className="flex flex-wrap gap-2">
                {scheme.eligibility.documents.map((doc, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
                  >
                    {doc}
                  </span>
                ))}
              </div>
            </div>

            {/* Regions */}
            <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
              <h4 className="font-bold text-orange-800 mb-2 flex items-center gap-2">
                <span className="text-xl">📍</span> {t.regions}
              </h4>
              <p className="text-gray-700">{scheme.regions.join(", ")}</p>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-all"
          >
            {showDetails ? "Hide Details" : "View Details"}
          </button>
          
          <a
            href={scheme.apply_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all text-center transform hover:scale-105"
          >
            {t.apply} →
          </a>
        </div>
      </div>
    </div>
  );
}
