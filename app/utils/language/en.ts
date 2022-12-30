import type { LangConfigValueType, languageKeys } from "~/types/langKeys";

const EN: Record<keyof typeof languageKeys, LangConfigValueType> = {
  HEADER_HOME: "home",
  HEADER_SUPPORT: "support",
  HEADER_PREGNANCY_TOOLS: "Pregnancy Tools",
  HEADER_BLOG: "blog",
  HEADER_ABOUT_US: "About Us",
  HEADER_OVULATION_CALCULATOR: "Ovulation Calculator",
  HEADER_DOWNLOAD: "download",
  APP_NAME: "Shero, ",
  APP_SUBTITLE: "be the hero of your health awareness",
  APP_DESCRIPTION:
    "Shero is a smart and simple calendar for tracking your menstrual cycle. Shero makes you a hero in tracking your symptoms with different features such as smart period tracking, ovulation tracking, pregnancy tracking, mood tracking and symptoms tracking. It predicts your upcoming cycle, and highlights the important events in your calendar to have it always on your palm. Being aware of your health situation makes you a hero in planning for your lifestyle.",
  GETTING_START: "Getting Started",
  FEATURE_TITLE: "Shero Feature",
  FEATURE_DESCRIPTION: "The facilities we have in Shero can help your health",
  FEATURE_SECTION_1:
    "Record and track the period period Record daily mode Announcement of ovulation time Registration of fetal and maternal changes Announcing the time of the PMS phase",
  FEATURE_SECTION_2:
    "Record and track the period period Record daily mode Announcement of ovulation time Registration of fetal and maternal changes Announcing the time of the PMS phase",
  FEATURE_SECTION_3:
    "Do you have questions about your health? The doctors at Shero Clinic are ready for you to get expert advice and feel at ease!",
  //logs
  COLD: "cold",
  FEVER: "fever",
  CRAMPS: "cramps",
  FATIGUE: "fatigue",
  HEADACHE: "headache",
  CHILLS: "chills",
  DISRUPTED_SLEEP: "disrupted sleep",
  SHORTNESS_OF_BIRTH: "shortness of birth",
  DRY_SKIN: "dry skin",
  HAIR_LOSS: "hair loss",
  BLURRED_OR_DOUBLE_VISION: "blurred or double vision",
  ACNE: "acne",
  FLUSH: "flush",
  DIZZINESS: "dizziness",
  TINNITUS: "tinnitus",
  BITTER_TASTE: "bitter taste",
  BREAST_PAIN: "breast pain",
  BACKACHE: "backache",
  BLOATING: "bloating",
  OVULATION_PAIN: "ovulation pain",
  FREQUENT_URINATION: "frequent urination",
  ITCHY_BODY: "itchy body",
  URINATION_PROBLEM: "Urination problem",
  LEG_SWELLING: "leg swelling",
  VAGINAL_ITCHINESS: "vaginal itchiness",
  TINGLING_HANDS_FOOT: "tingling hands or foots",
  INCREASED_APPETITE: "increased appetite",
  NAUSEOUS: "nauseous",
  VOMIT: "vomit",
  INDIGESTION: "indigestion",
  CONSTIPATION: "constipation",
  DIARRHEA: "diarrhea",
  GAS: "gas",
  STOMACHACHE: "stomachache",
  FREQUENCY_TITLE: "Frequently asked questions",
  FREQUENCY_DESCRIPTION:
    "Am I the only one? Read these FAQs to find out that you're not alone in your health journey.",
  // about us
  ABOUT_US_TITLE: "About US",
  ABOUT_US_DESCRIPTION:
    "We came together in a friendly environment to help each other live healthier lives. We try to provide a smart solution for every problem that exists in the field of health and healthy lifestyle. ",
  TEAM_NAME: "Shero Team",
  // privacy
  PRIVACY_TITLE: "Privacy Policy",
  PRIVACY_DESCRIPTION: `Shero is a collection of software services including content, information and products in the field of predicting periods, ovulation and pregnancy, which is provided by the Radin Health Explorers Company. By registering in Shero, as well as every time using its services, users accept that they have read the present terms and conditions in full and have accepted it with full knowledge of its terms and meanings. These terms and conditions may change over time. Users' use of Shero after each change in terms and rules means acceptance of said changes. These rules are available for users to read on the Shero website and application.`,
  // Download
  DOWNLOAD_TITLE: "Download",
  DOWNLOAD_DESCRIPTION:
    "You can download Shero directly and also in different stores",
  GETTING_STARTED_TITLE: "Getting Started",
  GETTING_STARTED_DESCRIPTION: "How to install Shero",
  GETTING_STARTED_DOWNLOAD_DETAIL:
    "You can download the Shero application through one of the commands below.",
  GETTING_STARTED_DOWNLOAD_ANDROID: "Android app",
  GETTING_STARTED_DOWNLOAD_IOS: "iOS",
  GETTING_STARTED_DOWNLOAD_PWA: "PWA",
  //
  HELP_CENTER_DESCRIPTION: `Using scientifically researched data for the betterment of women's health, worldwide.`,
  HELP_CENTER_TITLE: "Help center ",
  //
  FEATURE_SECTION_CALENDAR: "Menstrual calendar",
  FEATURE_SECTION_COMMUNITY: "Community",
  FEATURE_SECTION_CONTENT: "Content",
  FEATURE_SECTION_PREGNANCY: "Pregnancy calendar",
  //
  TERMS_DESCRIPTION:
    "This Terms and Conditions for all products and services provided by Shero website and application. Shero is a period tracker application designed to raise awareness about women's health, predict menstruation and ovulation, and allow users to prevent possible disease by registering, entering their personal details, entering their symptoms, and following up on them in order to experience a healthier life.",
  TERMS_TITLE: "Terms And Condition",
  CONTACT_US_DESCRIPTION:
    "We help women put themselves first.Shero exists to empower women by giving them a space they can access the knowledge and support they need to prioritise their health and wellbeing.",
  CONTACT_US_TITLE: "Contact US",
  CONTACT_US_SUBMIT_TITLE: "Submit a request",
  CONTACT_US_SUBMIT_DESCRIPTION:
    "Please enter the details of your request. A member of our support staff will respond as soon as possible.",
  CONTACT_FORM_DESCRIPTION: `You can contact us through the following communication channels and
    send us your comments, suggestions and criticisms. We need your
    feedback to make Shero better.`,
  PREGNANCY_TITLE: "Pregnancy due date calculator",
  PREGNANCY_DESCRIPTION:
    "Positive pregnancy test? You’ll probably have lots of questions like how far along am I? And when is my due date? Or maybe you’re thinking about timings before you start trying? Our Pregnancy Due Date Calculator can help you work out your estimated due date or when your baby might arrive.",
  //
  COMMENT_TITLE: "Why people love Shero",
  COMMENT_DESCRIPTION: "Some of your thoughts on Shero",
  //
  LOG_KEY_TITLE: "Log Key Cycle Symptoms",
  LOG_KEY_DESCRIPTION: "Track all your fertility signs",
  //
  PREGNANCY_CONGRATULATION: "congratulations !",
  PREGNANCY_RESULT: ({ date, week }) =>
    `You are ${week} weeks pregnant and You will meet your baby on ${date}`,
  PREGNANCY_MORE_DETAIL:
    "For more details, you can download the Shero application",
  PREGNANCY_DOWNLOAD: "Download app",
  PERIOD_CALCULATOR_NEXT: "Next Month",
  PERIOD_CALCULATOR_CURRENT: "Current month",
  PERIOD_CALCULATOR_PREV: "Prev month",
};
export default EN;
