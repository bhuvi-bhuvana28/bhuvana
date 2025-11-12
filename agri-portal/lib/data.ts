export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  content: string;
  tags: string[];
  region: string;
  date: string;
  audioScript: string;
  action: string;
  imageUrl?: string;
}

export interface Scheme {
  id: string;
  title: string;
  description: string;
  eligibility: {
    min_land_hectares: number;
    max_land_hectares: number;
    ownership_required: boolean;
    documents: string[];
  };
  apply_url: string;
  regions: string[];
  languages: string[];
  tags: string[];
  benefits: string[];
  deadline?: string;
}

export const newsData: NewsItem[] = [
  {
    id: "news_001",
    title: "New Drip Irrigation Subsidy Announced for Small Farmers",
    summary: "Government launches 50% subsidy scheme for drip irrigation systems to help small farmers save water and increase crop yield.",
    content: "The Ministry of Agriculture has announced a new subsidy program offering 50% financial assistance to small and marginal farmers for installing drip irrigation systems. This initiative aims to promote water conservation and improve agricultural productivity across drought-prone regions.",
    tags: ["irrigation", "subsidy", "water-conservation"],
    region: "Karnataka",
    date: "2025-11-10",
    audioScript: "Good news for small farmers! The government is now giving 50 percent subsidy for drip irrigation. This will help you save water and grow more crops. Apply now through your local agriculture office.",
    action: "Apply",
    imageUrl: "/images/irrigation.jpg"
  },
  {
    id: "news_002",
    title: "Organic Farming Training Program Starts Next Week",
    summary: "Free 5-day training on organic farming methods, pest control, and certification process for interested farmers.",
    content: "The Agricultural Extension Department is organizing a comprehensive training program on organic farming practices. Topics include natural pest control, composting, soil health management, and organic certification procedures.",
    tags: ["organic", "training", "certification"],
    region: "Tamil Nadu",
    date: "2025-11-09",
    audioScript: "Free training on organic farming starting next week. Learn about natural pest control and how to get organic certificate. Register at your nearest Krishi Vigyan Kendra.",
    action: "Save",
    imageUrl: "/images/organic.jpg"
  },
  {
    id: "news_003",
    title: "Weather Alert: Heavy Rains Expected in Coastal Areas",
    summary: "Meteorological department warns of heavy rainfall in coastal regions. Farmers advised to protect standing crops.",
    content: "The India Meteorological Department has issued a weather warning for coastal areas predicting heavy to very heavy rainfall over the next 48 hours. Farmers are advised to take necessary precautions to protect their standing crops and livestock.",
    tags: ["weather", "alert", "rainfall"],
    region: "Andhra Pradesh",
    date: "2025-11-11",
    audioScript: "Important weather alert! Heavy rains coming in next two days in coastal areas. Please protect your crops and move animals to safe place. Stay safe!",
    action: "Call",
    imageUrl: "/images/weather.jpg"
  },
  {
    id: "news_004",
    title: "Minimum Support Price Increased for Wheat and Rice",
    summary: "Government raises MSP for wheat by ₹150 and rice by ₹200 per quintal for the upcoming season.",
    content: "In a major relief to farmers, the government has announced an increase in Minimum Support Prices for major crops. Wheat MSP has been raised to ₹2,275 per quintal and paddy to ₹2,300 per quintal, ensuring better returns for farmers.",
    tags: ["MSP", "wheat", "rice", "pricing"],
    region: "Punjab",
    date: "2025-11-08",
    audioScript: "Good news! Government has increased minimum support price for wheat and rice. You will get more money for your crops this season. Sell at government procurement centers.",
    action: "Save",
    imageUrl: "/images/msp.jpg"
  },
  {
    id: "news_005",
    title: "Soil Health Card Distribution Begins in Rural Areas",
    summary: "Free soil testing and health cards being distributed to help farmers choose right fertilizers and crops.",
    content: "The Soil Health Card scheme has been expanded to cover more villages. Farmers can get their soil tested for free and receive personalized recommendations on fertilizer use, crop selection, and soil improvement measures.",
    tags: ["soil-health", "testing", "fertilizer"],
    region: "Madhya Pradesh",
    date: "2025-11-07",
    audioScript: "Get your soil tested for free! Soil health cards will tell you which fertilizer to use and which crops grow best in your land. Visit your village agriculture center.",
    action: "Apply",
    imageUrl: "/images/soil.jpg"
  }
];

export const schemesData: Scheme[] = [
  {
    id: "scheme_kt_2025_001",
    title: "Small Farmer Drip Irrigation Subsidy 2025",
    description: "Financial assistance up to 50% for small farmers to install drip irrigation systems and save water.",
    eligibility: {
      min_land_hectares: 0.01,
      max_land_hectares: 2,
      ownership_required: true,
      documents: ["Aadhar Card", "Land Ownership Record", "Bank Account Details"]
    },
    apply_url: "https://agricoop.gov.in/schemes",
    regions: ["Karnataka", "Tamil Nadu", "Andhra Pradesh"],
    languages: ["en", "kn", "ta", "te"],
    tags: ["irrigation", "subsidy", "small-farmer", "water-conservation"],
    benefits: [
      "50% subsidy on drip irrigation equipment",
      "Free installation guidance",
      "Water savings up to 60%",
      "Increased crop yield by 30-40%"
    ],
    deadline: "2025-12-31"
  },
  {
    id: "scheme_mh_2025_002",
    title: "Organic Farming Certification Support",
    description: "Financial support for organic certification and transition period assistance for farmers switching to organic methods.",
    eligibility: {
      min_land_hectares: 0.5,
      max_land_hectares: 10,
      ownership_required: false,
      documents: ["Aadhar Card", "Land Records", "Previous Crop Details"]
    },
    apply_url: "https://agricoop.gov.in/organic",
    regions: ["Maharashtra", "Gujarat", "Rajasthan"],
    languages: ["en", "hi", "mr", "gu"],
    tags: ["organic", "certification", "sustainable"],
    benefits: [
      "₹10,000 per hectare for 3 years during transition",
      "Free certification cost coverage",
      "Training and technical support",
      "Market linkage assistance"
    ],
    deadline: "2025-11-30"
  },
  {
    id: "scheme_pb_2025_003",
    title: "Farm Mechanization Scheme",
    description: "Subsidy on purchase of tractors, harvesters, and other farm equipment for small and marginal farmers.",
    eligibility: {
      min_land_hectares: 1,
      max_land_hectares: 5,
      ownership_required: true,
      documents: ["Aadhar Card", "Land Records", "Income Certificate", "Bank Account"]
    },
    apply_url: "https://agricoop.gov.in/mechanization",
    regions: ["Punjab", "Haryana", "Uttar Pradesh"],
    languages: ["en", "hi", "pa"],
    tags: ["mechanization", "equipment", "subsidy"],
    benefits: [
      "40% subsidy on tractors and equipment",
      "Easy loan facility at 4% interest",
      "Free training on equipment operation",
      "5-year warranty support"
    ],
    deadline: "2026-03-31"
  },
  {
    id: "scheme_all_2025_004",
    title: "Pradhan Mantri Fasal Bima Yojana (Crop Insurance)",
    description: "Comprehensive crop insurance scheme protecting farmers against crop loss due to natural calamities.",
    eligibility: {
      min_land_hectares: 0.01,
      max_land_hectares: 100,
      ownership_required: false,
      documents: ["Aadhar Card", "Land Records", "Crop Sowing Details", "Bank Account"]
    },
    apply_url: "https://pmfby.gov.in",
    regions: ["All India"],
    languages: ["en", "hi", "kn", "ta", "te", "mr", "gu", "pa", "bn"],
    tags: ["insurance", "crop-protection", "risk-management"],
    benefits: [
      "Premium: 2% for Kharif, 1.5% for Rabi crops",
      "Coverage against drought, flood, pest attacks",
      "Quick claim settlement within 2 months",
      "Technology-based loss assessment"
    ],
    deadline: "Ongoing"
  },
  {
    id: "scheme_tn_2025_005",
    title: "Solar Pump Installation Subsidy",
    description: "Subsidy for installing solar-powered water pumps to reduce electricity costs and ensure reliable irrigation.",
    eligibility: {
      min_land_hectares: 0.5,
      max_land_hectares: 5,
      ownership_required: true,
      documents: ["Aadhar Card", "Land Records", "Electricity Bill", "Bank Account"]
    },
    apply_url: "https://mnre.gov.in/solar-pump",
    regions: ["Tamil Nadu", "Karnataka", "Telangana", "Maharashtra"],
    languages: ["en", "ta", "kn", "te", "mr"],
    tags: ["solar", "irrigation", "renewable-energy", "subsidy"],
    benefits: [
      "60% subsidy on solar pump installation",
      "Zero electricity cost for irrigation",
      "25-year pump lifespan",
      "Free maintenance for 5 years"
    ],
    deadline: "2026-01-31"
  }
];

export const translations = {
  en: {
    siteName: "Agricultural News & Scheme Portal",
    tagline: "News, Schemes, Advice — In Your Language",
    subtitle: "Get local agriculture news, scheme alerts, and voice help — tailored to your crop and location.",
    getLocalNews: "Get Local News",
    talkToAssistant: "Talk to Voice Assistant",
    availableIn: "Available in English, Hindi, Kannada. SMS fallback for feature phones.",
    latestNews: "Latest Agriculture News",
    governmentSchemes: "Government Schemes for Farmers",
    features: "Key Features",
    aboutUs: "About Us",
    contact: "Contact",
    readMore: "Read More",
    apply: "Apply Now",
    save: "Save",
    call: "Call Advisor",
    eligibility: "Check Eligibility",
    benefits: "Benefits",
    documents: "Required Documents",
    deadline: "Application Deadline",
    regions: "Available Regions",
    playAudio: "Play Audio",
    stopAudio: "Stop Audio",
    searchPlaceholder: "Search news, schemes, or ask a question...",
    filterByRegion: "Filter by Region",
    allRegions: "All Regions",
    voiceAssistant: "Voice Assistant",
    startListening: "Start Listening",
    stopListening: "Stop Listening",
    typeMessage: "Type your message...",
    send: "Send",
    close: "Close",
    loading: "Loading...",
    feature1Title: "Regional Language Support",
    feature1Desc: "Auto-detect and switch between languages with audio narration",
    feature2Title: "Voice-Enabled Chatbot",
    feature2Desc: "Ask questions using voice and get spoken answers instantly",
    feature3Title: "Personalized Recommendations",
    feature3Desc: "Get scheme suggestions based on your location, crop, and land size",
    feature4Title: "Offline Access",
    feature4Desc: "Save articles and schemes for offline reading",
    feature5Title: "SMS Alerts",
    feature5Desc: "Receive critical updates via SMS on feature phones",
    feature6Title: "Low Bandwidth Mode",
    feature6Desc: "Text-only mode for areas with poor internet connectivity"
  },
  hi: {
    siteName: "कृषि समाचार और योजना पोर्टल",
    tagline: "समाचार, योजनाएं, सलाह — आपकी भाषा में",
    subtitle: "अपनी फसल और स्थान के अनुसार स्थानीय कृषि समाचार, योजना अलर्ट और आवाज सहायता प्राप्त करें।",
    getLocalNews: "स्थानीय समाचार प्राप्त करें",
    talkToAssistant: "आवाज सहायक से बात करें",
    availableIn: "अंग्रेजी, हिंदी, कन्नड़ में उपलब्ध। फीचर फोन के लिए एसएमएस सुविधा।",
    latestNews: "नवीनतम कृषि समाचार",
    governmentSchemes: "किसानों के लिए सरकारी योजनाएं",
    features: "मुख्य विशेषताएं",
    aboutUs: "हमारे बारे में",
    contact: "संपर्क करें",
    readMore: "और पढ़ें",
    apply: "अभी आवेदन करें",
    save: "सहेजें",
    call: "सलाहकार को कॉल करें",
    eligibility: "पात्रता जांचें",
    benefits: "लाभ",
    documents: "आवश्यक दस्तावेज",
    deadline: "आवेदन की अंतिम तिथि",
    regions: "उपलब्ध क्षेत्र",
    playAudio: "ऑडियो चलाएं",
    stopAudio: "ऑडियो बंद करें",
    searchPlaceholder: "समाचार, योजनाएं खोजें या प्रश्न पूछें...",
    filterByRegion: "क्षेत्र के अनुसार फ़िल्टर करें",
    allRegions: "सभी क्षेत्र",
    voiceAssistant: "आवाज सहायक",
    startListening: "सुनना शुरू करें",
    stopListening: "सुनना बंद करें",
    typeMessage: "अपना संदेश टाइप करें...",
    send: "भेजें",
    close: "बंद करें",
    loading: "लोड हो रहा है...",
    feature1Title: "क्षेत्रीय भाषा समर्थन",
    feature1Desc: "ऑडियो वर्णन के साथ भाषाओं के बीच स्वचालित पहचान और स्विच",
    feature2Title: "आवाज-सक्षम चैटबॉट",
    feature2Desc: "आवाज का उपयोग करके प्रश्न पूछें और तुरंत बोले गए उत्तर प्राप्त करें",
    feature3Title: "व्यक्तिगत सिफारिशें",
    feature3Desc: "अपने स्थान, फसल और भूमि के आकार के आधार पर योजना सुझाव प्राप्त करें",
    feature4Title: "ऑफ़लाइन पहुंच",
    feature4Desc: "ऑफ़लाइन पढ़ने के लिए लेख और योजनाएं सहेजें",
    feature5Title: "एसएमएस अलर्ट",
    feature5Desc: "फीचर फोन पर एसएमएस के माध्यम से महत्वपूर्ण अपडेट प्राप्त करें",
    feature6Title: "कम बैंडविड्थ मोड",
    feature6Desc: "खराब इंटरनेट कनेक्टिविटी वाले क्षेत्रों के लिए केवल टेक्स्ट मोड"
  },
  kn: {
    siteName: "ಕೃಷಿ ಸುದ್ದಿ ಮತ್ತು ಯೋಜನೆ ಪೋರ್ಟಲ್",
    tagline: "ಸುದ್ದಿ, ಯೋಜನೆಗಳು, ಸಲಹೆ — ನಿಮ್ಮ ಭಾಷೆಯಲ್ಲಿ",
    subtitle: "ನಿಮ್ಮ ಬೆಳೆ ಮತ್ತು ಸ್ಥಳಕ್ಕೆ ಅನುಗುಣವಾಗಿ ಸ್ಥಳೀಯ ಕೃಷಿ ಸುದ್ದಿ, ಯೋಜನೆ ಎಚ್ಚರಿಕೆಗಳು ಮತ್ತು ಧ್ವನಿ ಸಹಾಯ ಪಡೆಯಿರಿ.",
    getLocalNews: "ಸ್ಥಳೀಯ ಸುದ್ದಿ ಪಡೆಯಿರಿ",
    talkToAssistant: "ಧ್ವನಿ ಸಹಾಯಕರೊಂದಿಗೆ ಮಾತನಾಡಿ",
    availableIn: "ಇಂಗ್ಲಿಷ್, ಹಿಂದಿ, ಕನ್ನಡದಲ್ಲಿ ಲಭ್ಯವಿದೆ. ಫೀಚರ್ ಫೋನ್‌ಗಳಿಗೆ SMS ಸೌಲಭ್ಯ.",
    latestNews: "ಇತ್ತೀಚಿನ ಕೃಷಿ ಸುದ್ದಿ",
    governmentSchemes: "ರೈತರಿಗಾಗಿ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು",
    features: "ಪ್ರಮುಖ ವೈಶಿಷ್ಟ್ಯಗಳು",
    aboutUs: "ನಮ್ಮ ಬಗ್ಗೆ",
    contact: "ಸಂಪರ್ಕಿಸಿ",
    readMore: "ಇನ್ನಷ್ಟು ಓದಿ",
    apply: "ಈಗ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ",
    save: "ಉಳಿಸಿ",
    call: "ಸಲಹೆಗಾರರನ್ನು ಕರೆ ಮಾಡಿ",
    eligibility: "ಅರ್ಹತೆ ಪರಿಶೀಲಿಸಿ",
    benefits: "ಪ್ರಯೋಜನಗಳು",
    documents: "ಅಗತ್ಯ ದಾಖಲೆಗಳು",
    deadline: "ಅರ್ಜಿ ಕೊನೆಯ ದಿನಾಂಕ",
    regions: "ಲಭ್ಯವಿರುವ ಪ್ರದೇಶಗಳು",
    playAudio: "ಆಡಿಯೋ ಪ್ಲೇ ಮಾಡಿ",
    stopAudio: "ಆಡಿಯೋ ನಿಲ್ಲಿಸಿ",
    searchPlaceholder: "ಸುದ್ದಿ, ಯೋಜನೆಗಳನ್ನು ಹುಡುಕಿ ಅಥವಾ ಪ್ರಶ್ನೆ ಕೇಳಿ...",
    filterByRegion: "ಪ್ರದೇಶದ ಮೂಲಕ ಫಿಲ್ಟರ್ ಮಾಡಿ",
    allRegions: "ಎಲ್ಲಾ ಪ್ರದೇಶಗಳು",
    voiceAssistant: "ಧ್ವನಿ ಸಹಾಯಕ",
    startListening: "ಕೇಳಲು ಪ್ರಾರಂಭಿಸಿ",
    stopListening: "ಕೇಳುವುದನ್ನು ನಿಲ್ಲಿಸಿ",
    typeMessage: "ನಿಮ್ಮ ಸಂದೇಶವನ್ನು ಟೈಪ್ ಮಾಡಿ...",
    send: "ಕಳುಹಿಸಿ",
    close: "ಮುಚ್ಚಿ",
    loading: "ಲೋಡ್ ಆಗುತ್ತಿದೆ...",
    feature1Title: "ಪ್ರಾದೇಶಿಕ ಭಾಷಾ ಬೆಂಬಲ",
    feature1Desc: "ಆಡಿಯೋ ನಿರೂಪಣೆಯೊಂದಿಗೆ ಭಾಷೆಗಳ ನಡುವೆ ಸ್ವಯಂ-ಪತ್ತೆ ಮತ್ತು ಬದಲಾಯಿಸಿ",
    feature2Title: "ಧ್ವನಿ-ಸಕ್ರಿಯ ಚಾಟ್‌ಬಾಟ್",
    feature2Desc: "ಧ್ವನಿ ಬಳಸಿ ಪ್ರಶ್ನೆಗಳನ್ನು ಕೇಳಿ ಮತ್ತು ತಕ್ಷಣ ಮಾತನಾಡುವ ಉತ್ತರಗಳನ್ನು ಪಡೆಯಿರಿ",
    feature3Title: "ವೈಯಕ್ತಿಕ ಶಿಫಾರಸುಗಳು",
    feature3Desc: "ನಿಮ್ಮ ಸ್ಥಳ, ಬೆಳೆ ಮತ್ತು ಭೂಮಿ ಗಾತ್ರದ ಆಧಾರದ ಮೇಲೆ ಯೋಜನೆ ಸಲಹೆಗಳನ್ನು ಪಡೆಯಿರಿ",
    feature4Title: "ಆಫ್‌ಲೈನ್ ಪ್ರವೇಶ",
    feature4Desc: "ಆಫ್‌ಲೈನ್ ಓದುವಿಕೆಗಾಗಿ ಲೇಖನಗಳು ಮತ್ತು ಯೋಜನೆಗಳನ್ನು ಉಳಿಸಿ",
    feature5Title: "SMS ಎಚ್ಚರಿಕೆಗಳು",
    feature5Desc: "ಫೀಚರ್ ಫೋನ್‌ಗಳಲ್ಲಿ SMS ಮೂಲಕ ನಿರ್ಣಾಯಕ ನವೀಕರಣಗಳನ್ನು ಸ್ವೀಕರಿಸಿ",
    feature6Title: "ಕಡಿಮೆ ಬ್ಯಾಂಡ್‌ವಿಡ್ತ್ ಮೋಡ್",
    feature6Desc: "ಕಳಪೆ ಇಂಟರ್ನೆಟ್ ಸಂಪರ್ಕವಿರುವ ಪ್ರದೇಶಗಳಿಗೆ ಪಠ್ಯ-ಮಾತ್ರ ಮೋಡ್"
  }
};
