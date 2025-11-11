"use client";

interface LanguageSwitcherProps {
  locale: "en" | "hi" | "kn";
  setLocale: (locale: "en" | "hi" | "kn") => void;
}

export default function LanguageSwitcher({ locale, setLocale }: LanguageSwitcherProps) {
  const languages = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "hi", name: "हिंदी", flag: "🇮🇳" },
    { code: "kn", name: "ಕನ್ನಡ", flag: "🇮🇳" }
  ];

  return (
    <div className="flex items-center gap-2 bg-green-50 rounded-lg p-1 border-2 border-green-200">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLocale(lang.code as "en" | "hi" | "kn")}
          className={`px-3 py-2 rounded-md font-semibold transition-all text-sm sm:text-base ${
            locale === lang.code
              ? "bg-green-600 text-white shadow-md"
              : "text-green-700 hover:bg-green-100"
          }`}
        >
          <span className="mr-1">{lang.flag}</span>
          {lang.name}
        </button>
      ))}
    </div>
  );
}
