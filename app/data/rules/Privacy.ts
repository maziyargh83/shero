import type { SectionGeneratorDataType } from "~/types";

export const privacyData: SectionGeneratorDataType = {
  generateType: "number",
  data: [
    {
      title: "Personal information we collect",
      sectionData: `Personal information you may provide to us through the Shero app and website or otherwise includes:`,
      child: [
        {
          generateType: "dashed",

          sectionData:
            "Account and profile data that you provide to create an account on The Shero app including your name, email address, password, date of birth, mobile phone number, profile photo, location (e.g., city, state, country), gender.",
        },
        {
          generateType: "dashed",
          sectionData:
            "Health Data such as information about your physical attributes, sexual orientation, fertility, pregnancy, sexual activity, menstrual activity, sleep activity, mood, health conditions, medications, and number of children.",
        },
        {
          generateType: "dashed",
          sectionData:
            "Data about others such as the names and contact details of the spouses, partners or caregivers to whom you choose to grant access to information in your Shero app account or the email address of anyone you invite to use Shero through features in the app.",
        },
        {
          generateType: "dashed",
          sectionData:
            "Communications that we exchange with you, including when you contact us with questions or feedback, through social media, or otherwise.",
        },
        {
          generateType: "dashed",
          sectionData:
            "Payment and transactional data needed to complete your orders on or through the Service (including name, address, payment card information, billing information), and your transaction history.",
        },
        {
          generateType: "dashed",
          sectionData:
            "User generated content that you upload, generate, transmit, or otherwise make available on the Service, such as profile pictures, photos, videos, images, music, videos, comments, questions, and messages.",
        },
        {
          generateType: "dashed",
          sectionData:
            "Automatic data collection. We, our service providers, and our business partners may automatically log information about you, your device, and your interaction over time with the Shero app and website, such as:",
          child: [
            {
              generateType: "dashed",
              sectionData:
                "Device data, such as your computer’s or mobile device’s operating system type and version, manufacturer and model, browser type, device type, language settings, mobile device carrier, radio/network information (e.g., WiFi, LTE, 3G).",
            },
            {
              generateType: "dashed",
              sectionData:
                "Online activity data, such as pages or screens you viewed, how long you spent on a page or screen, the website you visited before browsing to the app, navigation paths between pages or screens, information about your activity on a page or screen, access times, and duration of access, and whether you have opened our marketing emails or clicked links within them.",
            },
            {
              generateType: "dashed",
              sectionData:
                "Precise geolocation data when you authorize our mobile application to access your device’s location.",
            },
          ],
        },
      ],
    },
    {
      title: "How we use personal information:",
      child: [
        {
          generateType: "dashed",

          sectionData: "Service delivery:",
          child: [
            {
              generateType: "dashed",
              sectionData:
                "provide, operate and improve the Shero app and our business;",
            },
            {
              generateType: "dashed",
              sectionData:
                "establish and maintain your user profile on the app;",
            },
            {
              generateType: "dashed",
              sectionData: "refer your contacts to join the Service;",
            },
            {
              generateType: "dashed",
              sectionData:
                "communicate with you about the app, including by sending announcements, updates, security alerts, and support and administrative messages;",
            },
            {
              generateType: "dashed",
              sectionData:
                "understand your needs and interests, and personalize your experience with the app and our communications;",
            },
            {
              generateType: "dashed",
              sectionData:
                "provide support for the Service, and respond to your requests, questions and feedback.",
            },
          ],
        },
        {
          generateType: "dashed",
          sectionData:
            "Marketing and advertising. We, our service providers and our third party advertising partners may collect and use your personal information for the following marketing and advertising purposes:",
          child: [
            {
              generateType: "dashed",
              sectionData:
                "Direct marketing. We may send you Shero-related or other direct marketing communications.",
            },
            {
              generateType: "dashed",
              sectionData:
                "Interest-based advertising. We may engage third-party advertisers or advertising companies to display ads on the Shero app and other online services. These companies may use cookies and similar technologies to collect information about your interaction over time across the app, our communications and other online services, and use that information to serve online ads that they think will interest you.",
            },
          ],
        },
      ],
    },
    {
      title: "Your Privacy Rights:",
      child: [
        {
          generateType: "dashed",
          sectionData:
            "If you have registered for an account with Shero, you may review and update account information by logging into the account.",
        },
        {
          generateType: "dashed",
          sectionData:
            "You can delete your account through your profile section on the app. Be aware that by deleting your account all your data and contents will be permanently removed.",
        },
      ],
    },
    {
      title: "Security:",
      child: [
        {
          generateType: "dashed",
          sectionData:
            "We employ a number of technical, organizational and physical safeguards designed to protect the personal information we collect. However, security risk is inherent in all internet and information technologies and we cannot guarantee the security of your personal information.",
        },
      ],
    },
    {
      title: "Changes to this Privacy Policy:",
      child: [
        {
          generateType: "dashed",
          sectionData:
            "We reserve the right to modify this Privacy Policy at any time. If we make material changes to this Privacy Policy, we will notify you.",
        },
      ],
    },
  ],
};
