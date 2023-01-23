import type { LangConfigValueType, languageKeys } from "~/types/langKeys";

const FA: Record<keyof typeof languageKeys, LangConfigValueType> = {
  HEADER_HOME: "خانه",
  HEADER_SUPPORT: "راهنمای لونا",
  HEADER_PREGNANCY_TOOLS: "محاسبه‌گر هفته‌ بارداری",
  HEADER_BLOG: "بلاگ",
  HEADER_ABOUT_US: "درباره ما",
  HEADER_OVULATION_CALCULATOR: "محاسبه‌گر پریود",
  HEADER_DOWNLOAD: "دانلود",
  APP_NAME: "لونا، هم راه سلامتی",
  APP_SUBTITLE: "be the hero of your health awareness",
  APP_DESCRIPTION:
    "لونا یک تقویم هوشمند و ساده برای دنبال کردن سلامتی زنان است. لونا دارای امکاناتی مانند ردیابی و پیش‌بینی تقویم دقیق پریود و دوران تخمک‌گذاری است و به زودی ردیابی دوران بارداری هم به امکانات لونا اضافه خواهد شد.",
  GETTING_START: "راهنمای نصب و استفاده",
  FEATURE_TITLE: "ویژگی‌های لونا",
  FEATURE_DESCRIPTION:
    "امکاناتی که ما توی لونا داریم و می‌تونه به سلامتی شما کمک کنه",
  FEATURE_SECTION_1_TITLE: "Partnership (Prime)",
  FEATURE_SECTION_1:
    "Want support from others or be supportive? Choose your partner or be another partner in tracking health statutes and showing care for others. Feel safe by defining your desired access level for the partners.",
  FEATURE_SECTION_2_TITLE: " ",
  FEATURE_SECTION_2: " ",
  FEATURE_SECTION_3_TITLE: "Mood Log",
  FEATURE_SECTION_3:
    "Even record your mood to find the unique relationship between your body and your feelings.",

  FEATURE_SECTION_4_TITLE: "در مورد سلامتی‌ات سؤال داری؟",
  FEATURE_SECTION_4:
    " پزشک‌ها تو کلینیک لونا ‌آماده‌اند تا ازشون مشورت تخصصی بگیری و خیالت راحت بشه!",

  FEATURE_SECTION_5_TITLE: " ",
  FEATURE_SECTION_5: ``,
  // slider
  SLIDER_1_TITLE: "تقویم قاعدگی 🗓",
  SLIDER_1_DESCRIPTION: "ثبت اطلاعات پریود و پیش بینی زمان تخمک گذاری",

  SLIDER_2_TITLE: "تقویم بارداری  🤰",
  SLIDER_2_DESCRIPTION:
    "ثبت اطلاعات پریود و پیش بینی زمان هفته به هفته از تغییرات باخبر بشوتخمک گذاری",

  SLIDER_3_TITLE: "مشاوره با متخصص 🩺️️",
  SLIDER_3_DESCRIPTION: "سوالاتتو از پزشک ها کلینیک لونا بپرس",
  // COMMENT
  COMMENT_1_TITLE:
    "خیلی نرم افزار خوبیه، تقویم داره و روز تخمک گذاری رو بهت نشون میده و نزدیکی محافظت نشده را میتونی علامت گذاری کنی و اگه پریودیت عقب جلو بیفته خودت میتونی عوض کنی",
  COMMENT_1_NAME: "عطرین",

  COMMENT_2_TITLE:
    "واقعا عالیه🧡 دیگه لازم نیست تاریخ پری.ود شدنمو تو کاغذ بنویسم خود این برنامه برام ثبت میکنه",
  COMMENT_2_NAME: "فاطمه",

  COMMENT_3_TITLE:
    "رابط کاربری چشم نوازی داره امکانات خوب مخصوصا بخش همراه خیلی خوبه، مثل بقیه اپلیکیشن‌های کرفس عالیه.",
  COMMENT_3_NAME: "ش.حنفی",

  COMMENT_4_TITLE:
    "اپلیکیشن بسیار خوبیه👌🏻واقعا هر خانومی به این نرم افزار نیاز داره، من یکی که خیلی راضیم😍 به شماها هم پیشنهاد میدم نصبش کنین🙂پنج ستاره هم براش کنه🔥",
  COMMENT_4_NAME: "imaneh_81",
  //
  TRIMESTER_1: "سه ماهه اول",
  TRIMESTER_2: "سه ماهه دوم",
  TRIMESTER_3: "سه ماهه سوم",
  // PERIOD_CALC
  PERIOD_COL_1: "تاریخ شروع پریود قبلیت رو انتخاب کن",
  PERIOD_COL_2: "آخرین پریودت چند روز طول کشید؟",
  PERIOD_COL_3: "کل طول دوره پریودت چند روزه؟",
  PERIOD_NOTE:
    "دقت کنید که این محاسبه تقریبی است و نباید برای درمان یا پیشگیری از بارداری از آن استفاده کرد.",
  CHOICE: "تاریخ رو انتخاب کنید",
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
  FAQ_MORE: "سوالات بیشتر",
  //logs
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
  FREQUENCY_TITLE: "سوالات شما درباره لونا",
  FREQUENCY_DESCRIPTION: " ",
  // about us
  ABOUT_US_TITLE: "درباره‌ لونا",
  ABOUT_US_DESCRIPTION:
    "ما در یک محیط دوستانه دور هم جمع شدیم تا به همدیگه برای سالم‌تر زندگی کردن، کمک کنیم. ما تلاش می‌کنیم برای هر مشکلی که در زمینه‌ی سلامتی و سبک زندگی سالم وجود داره، راهکار هوشمندی ارائه کنیم. تا الان با اپلیکیشن‌های کرفس، بنتو، جیم و دنج سعی کردیم به این هدف برسیم و تونستیم به بیش از ۴ میلیون نفر تو این مسیر کمک کنیم. در همین راستا، محصول لونا رو توسعه دادیم. لونا جدیدترین محصول گروه کرفس، مربوط به حوزه سلامت زنان است که قراره خیلی شجاعانه، با زن‌ها و مردها، در مورد مسائلی که کمتر ازش حرف زده شده، ",
  TEAM_NAME: "تیم لونا",
  // privacy
  PRIVACY_TITLE: "حریم خصوصی",
  PRIVACY_DESCRIPTION: `Shero is a collection of software services including content, information and products in the field of predicting periods, ovulation and pregnancy, which is provided by the Radin Health Explorers Company. By registering in Shero, as well as every time using its services, users accept that they have read the present terms and conditions in full and have accepted it with full knowledge of its terms and meanings. These terms and conditions may change over time. Users' use of Shero after each change in terms and rules means acceptance of said changes. These rules are available for users to read on the Shero website and application.`,
  // Download
  DOWNLOAD_TITLE: "دانلود",
  DOWNLOAD_DESCRIPTION:
    "لونا رو می‌تونید مستقیم و همچنین در استورهای مختلف دانلود کنید",
  GETTING_STARTED_TITLE: "Getting Started",
  GETTING_STARTED_DESCRIPTION: "How to install Shero",
  GETTING_STARTED_DOWNLOAD_DETAIL:
    "You can download the Shero application through one of the commands below.",
  GETTING_STARTED_DOWNLOAD_ANDROID: "Android app",
  GETTING_STARTED_DOWNLOAD_IOS: "iOS",
  GETTING_STARTED_DOWNLOAD_PWA: "PWA",
  //
  HELP_CENTER_DESCRIPTION: `ما در یک محیط دوستانه دور هم جمع شدیم تا به همدیگه برای سالم‌تر زندگی کردن، کمک کنیم. ما تلاش می‌کنیم برای هر مشکلی که در زمینه‌ی سلامتی و سبک زندگی سالم وجود داره، راهکار هوشمندی ارائه کنیم. تا الان با اپلیکیشن‌های کرفس، بنتو، `,
  HELP_CENTER_TITLE: "راهنمای لونا",
  //
  FEATURE_SECTION_CALENDAR: "تقویم قاعدگی",
  FEATURE_SECTION_COMMUNITY: "دورهمی",
  FEATURE_SECTION_CONTENT: "محتوا",
  FEATURE_SECTION_PREGNANCY: "تقویم بارداری ",
  //
  TERMS_DESCRIPTION:
    "لونا مجموعه‌ای از خدمات نرم‌افزاری شامل محتوا، اطلاعات و محصولات در حوزه پیش‌بینی پریود، تخمک‌گذاری و بارداری است که توسط شرکت کاوشگران رادین فناور سلامت ارائه می‌شود.  کاربران با ثبت‌نام در لونا، همچنین با هر بار استفاده از خدمات آن، می‌پذیرند که شرایط و قوانین حاضر را به صورت کامل مطالعه کرده و آن را با اطلاع کامل از شرایط و معانی‌اش پذیرفته‌اند. این شرایط و قوانین ممکن است در طول زمان تغییر کند. استفادۀ کاربران از لونا پس از هر بار تغییر در شرایط و قوانین، به معنی پذیرش تغییرات مذکور است. این قوانین برای مطالعه کاربران در سایت و اپلیکیشن لونا در دسترس است.",
  TERMS_TITLE: "قوانین",
  CONTACT_US_DESCRIPTION: " ",
  CONTACT_US_TITLE: "تماس با ما",
  CONTACT_US_SUBMIT_TITLE: "ارتباط با لونا",
  CONTACT_US_SUBMIT_DESCRIPTION:
    "پیشنهادات و انتقاداتون رو می‌تونید با ما درمیان بزارید",
  CONTACT_FORM_DESCRIPTION: `از طریق راه‌های ارتباطی زیر می‌تونید با ما در ارتباط باشید و نظرات و پیشنهادات و انتقاداتون رو به گوش ما برسونید. ما برای بهتر شدن لونا به نظرات شما نیاز داریم.`,
  PREGNANCY_TITLE: "محاسبه‌گر هفته بارداری",
  PREGNANCY_DESCRIPTION:
    "برای اطلاع از هفته بارداری خود، تاریخ اولین روز از آخرین قاعدگی خود را وارد کنید.",
  PREGNANCY_START_PERIOD: "تاریخ اولین روز از آخرین قاعدگی ",
  PREGNANCY_CALCULATE: "محاسبه کن",
  week: "هفته",

  //
  COMMENT_TITLE: "نظرات شما",
  COMMENT_DESCRIPTION: "بعضی از نظرات شما در مورد لونا",
  //
  LOG_KEY_TITLE: "ثبت وضعیت",
  LOG_KEY_DESCRIPTION: "میتونی وضعیتت و توی لونا ثبت کنی تا ..",
  //
  PREGNANCY_CONGRATULATION: "congratulations !",
  PREGNANCY_RESULT: ({ date, week }) =>
    `شما در هفته ${week} هستید بارداری هستی و روز تولد کودک شما ${date} هست.`,
  PREGNANCY_MORE_DETAIL:
    "For more details, you can download the Shero application",
  PREGNANCY_DOWNLOAD: "Download app",
  PERIOD_CALCULATOR_NEXT: "Next Month",
  PERIOD_CALCULATOR_CURRENT: "Current month",
  PERIOD_CALCULATOR_PREV: "Prev month",
};
export default FA;
