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
  FEATURE_SECTION_1_TITLE: "Partnership (Prime)",
  FEATURE_SECTION_1:
    "Want support from others or be supportive? Choose your partner or be another partner in tracking health statutes and showing care for others. Feel safe by defining your desired access level for the partners.",
  FEATURE_SECTION_2_TITLE: "Calendar",
  FEATURE_SECTION_2:
    "Customize your smart calendar by updating your daily symptoms and get an insight into upcoming health events to be prepared for in advance.",
  FEATURE_SECTION_3_TITLE: "Mood Log",
  FEATURE_SECTION_3:
    "Even record your mood to find the unique relationship between your body and your feelings.",

  FEATURE_SECTION_4_TITLE: "Dashboard",
  FEATURE_SECTION_4:
    "Tell Shero about the exact date of your last period, sit back and see the exact predictions of your future cycle on the dashboard.",

  FEATURE_SECTION_5_TITLE: "Community",
  FEATURE_SECTION_5:
    "Need to hear others’ experiences about their cycles or share yours to help others, join the Shero community.",
  // slider
  SLIDER_1_TITLE: "Menstrual calendar 🗓",
  SLIDER_1_DESCRIPTION: "Record period information and predict ovulation time",

  SLIDER_2_TITLE: "Pregnancy calendar 🤰",
  SLIDER_2_DESCRIPTION: "Show Pregnancy weeks",

  SLIDER_3_TITLE: "Community 💬",
  SLIDER_3_DESCRIPTION: "Share your experiences",
  // COMMENT
  COMMENT_1_TITLE:
    "Isn’t it awesome that I can share my Period calendar with my partner with shero?😍 This feature can definitely reduce the level of our argument in the certain times of the month, if you know what I mean. 😎😉",
  COMMENT_1_NAME: "Mi****se",

  COMMENT_2_TITLE:
    "Here I can track my girlfriend's period situation and her moods whenever I want so I can take care of her. This application helped me a lot 😁",
  COMMENT_2_NAME: "sa****wr",

  COMMENT_3_TITLE:
    "Its very easy to work.  Its a practical and essential app , especially   For women.",
  COMMENT_3_NAME: "nio****ar",

  COMMENT_4_TITLE:
    "I'm so happy that I can track and follow up my partner's period cycle",
  COMMENT_4_NAME: "ki****aa",
  //
  TRIMESTER_1: "1st trimester",
  TRIMESTER_2: "2nd trimester",
  TRIMESTER_3: "3rd trimester",
  //
  PERIOD_COL_1: "When did your last period start?",
  PERIOD_COL_2: "How many periodLong did it last?",
  PERIOD_COL_3: "Average cycle length (periodLong)",
  PERIOD_NOTE:
    "Note that this calculation is approximate and should not be used to treat or prevent pregnancy.",
  PERIOD_WARN: "Didn't enter the previous period date ",
  CHOICE: "Choose date",
  // FAQ
  FAQ_1_TITLE: "Do I have to pay to use Shero?",
  FAQ_1_DESCRIPTION:
    "No, not at all. Shero is a free app and all features of tracking and connecting with other users are free to use for everyone. You may opt for Sheo Prime which is totally optional and a way of enhancing experience.",
  FAQ_2_TITLE: "What is Shero Prime?",
  FAQ_2_DESCRIPTION:
    "Prime gives you a collection of premium features which are available on a monthly basis. The features are:",
  FAQ_3_TITLE: "I am pregnant. How can Shero help me ?",
  FAQ_2_DETAIL_1:
    "Sharing with a partner: you can easily invite your beloved one to get to know more about your body condition and health journey.  ",
  FAQ_2_DETAIL_2:
    "Diary: You can keep your daily record of experiences via text, voices, and pictures.",
  FAQ_2_DETAIL_3:
    "No Ads: There are ads displayed in some places within the app which can be removed by going prime.",
  FAQ_2_DETAIL_4:
    "Cycle report: You can export historical reports of your logs and cycle events in pdf format for your own information or share with your health practitioner.",
  FAQ_3_DESCRIPTION:
    "You are in the right place! Change your purpose of using the app through the profile page to pregnancy and enjoy Shero pregnancy tips and tracking tools.",
  FAQ_4_TITLE: "I am trying to conceive. How can Shero help me?",
  FAQ_4_DESCRIPTION:
    "Shero gives you a precise prediction of the ovulation day and also provides well designed tips to help through this joyful journey!",
  FAQ_5_TITLE: "What does Shero do?",
  FAQ_5_DESCRIPTION:
    "Shero works as a companion who is there for you 24/7! With small bites of information you provide, Shero tells you when the period happens or on which days the possibility of the conception rises or what to do in the 15th week of pregnancy. Shero has a community of users where people share their experiences of pregnancy or first period or even how to take care of a plant.",
  FAQ_6_TITLE: "How do I edit a period log?",
  FAQ_6_DESCRIPTION:
    "You can reach out to an old period log (or any other logs) by clicking into the calendar icon and find the day you would like to edit the period log. You’ll see the list of the logs down there and easily delete or edit.",
  FAQ_7_TITLE: "How do I invite my partner?",
  FAQ_7_DESCRIPTION:
    "You must first go Prime. If you’ve done so already, go to Profile> My partner. Find your unique referral code there and hand it out to your partner to join you in Shero. ",
  FAQ_MORE: "More...",
  FAQ_TITLE_HELP: "Frequently asked questions",
  FAQ_TITLE_HELP_DESCRIPTION:
    "Am I the only one? Read these FAQs to find out that you're not alone in your health journey.",
  //logs

  // logs
  COLD: "سرماخوردگی",
  FEVER: "تب",
  CRAMPS: "گرفتگی عضلات",
  FATIGUE: "خستگی",
  HEADACHE: "سر درد",
  CHILLS: "لرز",
  DISRUPTED_SLEEP: "بی‌خوابی",
  SHORTNESS_OF_BIRTH: "تنگی نفس",
  DRY_SKIN: "خشکی پوست",
  HAIR_LOSS: "ریزش مو",
  BLURRED_OR_DOUBLE_VISION: "دوبینی/ تاری دید",
  ACNE: "آکنه و جوش",
  FLUSH: "گرگرفتی",
  DIZZINESS: "سرگیجه",
  TINNITUS: "وزوز گوش",
  BITTER_TASTE: "تلخی دهن",
  BREAST_PAIN: "درد سینه",
  BACKACHE: "کمر درد",
  BLOATING: "ورم / نفخ",
  OVULATION_PAIN: "درد تخمک‌گذاری",
  FREQUENT_URINATION: "تکرر ادرار",
  ITCHY_BODY: "خارش بدن",
  URINATION_PROBLEM: "مشکل دفع ادرار",
  LEG_SWELLING: "تورم پا",
  VAGINAL_ITCHINESS: "خارش واژن",

  TINGLING_HANDS_FOOT: "گزگز دست یا پا",
  INCREASED_APPETITE: "افزایش اشتها",
  NAUSEOUS: "حالت تهوع",
  VOMIT: "استفراغ",
  INDIGESTION: "سوء هاضمه",
  CONSTIPATION: "یبوست",
  DIARRHEA: "اسهال",
  GAS: "گاز معده",
  STOMACHACHE: "دل درد",
  //
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
  PREGNANCY_START_PERIOD: "The first day of your last period",
  PREGNANCY_CALCULATE: "Calculate",
  week: "week",
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
