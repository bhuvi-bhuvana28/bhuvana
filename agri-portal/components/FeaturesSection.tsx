"use client";

import { translations } from "@/lib/data";

interface FeaturesSectionProps {
  locale: "en" | "hi" | "kn";
}

export default function FeaturesSection({ locale }: FeaturesSectionProps) {
  const t = translations[locale];

  const features = [
    {
      icon: "🌐",
      title: t.feature1Title,
      description: t.feature1Desc,
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: "🎤",
      title: t.feature2Title,
      description: t.feature2Desc,
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: "🎯",
      title: t.feature3Title,
      description: t.feature3Desc,
      color: "from-green-500 to-green-600"
    },
    {
      icon: "📱",
      title: t.feature4Title,
      description: t.feature4Desc,
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: "📨",
      title: t.feature5Title,
      description: t.feature5Desc,
      color: "from-red-500 to-red-600"
    },
    {
      icon: "⚡",
      title: t.feature6Title,
      description: t.feature6Desc,
      color: "from-yellow-500 to-yellow-600"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-green-800 mb-4">
          {t.features}
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Designed specifically for farmers with accessibility and ease of use in mind
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-green-300 transform hover:-translate-y-1"
          >
            <div className={`bg-gradient-to-r ${feature.color} p-6 text-center`}>
              <div className="text-6xl mb-2">{feature.icon}</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
