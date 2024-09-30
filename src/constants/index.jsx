import appleLogo from "../assets/apple_logo.png";
import amazonLogo from "../assets/amazon_logo.png";
import dellLogo from "../assets/Dell_logo.png";
import SlackLogo from "../assets/Slack_logo.png";

import {
  RiBarChart2Line,
  RiWindow2Line,
  RiTeamLine,
  RiTwitchLine,
  RiYoutubeLine,
  RiCalendarLine,
} from "@remixicon/react";

export const HERO_CONTENT = {
  badgeText: "🚀 New Feature: GPT-5o!",
  mainHeading: "Ask GPT-5o \n Anything you want!",
  subHeading:
    "We’re announcing GPT-5o, our new flagship model that can reason across audio, vision, and text in real time.",
  callToAction: {
    primary: "Try on ChatGPT",
    secondary: "Contributions",
  },
  trustedByText: "Trusted by Leading High-Tech Company",
};

export const BRAND_LOGOS = [
  { src: appleLogo, alt: "apple" },
  { src: amazonLogo, alt: "amazon" },
  { src: dellLogo, alt: "dell" },
  { src: SlackLogo, alt: "Slack" },
];

export const KEY_FEATURES_CONTENT = {
  sectionTitle: "GPT5o with These Key Features",
  sectionDescription:
    "We're announcing GPT-5o, our new flagship model that can reason across audio, vision, and text real time. ",
  features: [
    {
      id: 1,
      icon: <RiBarChart2Line className="w-8 h-8" />,
      title: "Analyze data and create charts",
      description:
        "Upload a file and ask ChatGPT to help analyze data, summarize information or create a chart.",
    },
    {
      id: 2,
      icon: <RiWindow2Line className="w-8 h-8" />,
      title: "Browse the web",
      description:
        "ChatGPT can answer your questions using its vast knowledge and with information from the web. ",
    },
    {
      id: 3,
      icon: <RiTeamLine className="w-8 h-8" />,
      title: "Type, talk, and use it your way",
      description:
        "With ChatGPT, you can type or start a voice conversation by tapping the headphone icon in the mobile app.",
    },
    {
      id: 4,
      icon: <RiTwitchLine className="w-8 h-8" />,
      title: "Talk about an image",
      description: "Take or upload an image and ask ChatGPT about it.",
    },
    {
      id: 5,
      icon: <RiYoutubeLine className="w-8 h-8" />,
      title: "Creating video from text",
      description:
        "Use Sora to create realistic and imaginative scenes from text instructions.",
    },
    {
      id: 6,
      icon: <RiCalendarLine className="w-8 h-8" />,
      title: "Supercharge your team’s work",
      description:
        "ChatGPT handles admin tasks and suggests ways to improve processes, increasing operational efficiency.",
    },
  ],
};

export const PLANS_CONTENT = {
  sectionTitle: "Pricing",
  sectionDescription:
    "Chat-gpt offers flexible pricing plans to fit every individual, team and enterprise.",
  popularBadge: "Most Popular",
  ctaText: "Start now",
  plans: [
    {
      name: "Team",
      price: "$30 / month",
      description:
        "For fast-moving teams and organizations ready to supercharge work.",
      features: [
        "Everything included in Plus",
        "Create and share GPTs with your workspace",
        "Admin console for workspace management",
        "Team data excluded from training by default",
        "Unlimited support",
      ],
    },
    {
      name: "Plus",
      price: "$20 / month",
      description: "For individuals looking to amplify their productivity.",
      features: [
        "Access to OpenAI o1-preview, OpenAI o1-mini",
        "Access to GPT-5o, GPT-4o mini",
        "Access to data analysis, file uploads and vision",
        "DALL·E image generation",
        "Sora vision generation",
        "Create and use custom GPTs",
        "Early access to new features",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$15 per 1M tokens",
      description:
        "For global companies looking to enable their workforce with AI",
      features: [
        "Everything included in Team",
        "Unlimited, high speed access to all product",
        "Expanded context window for longer inputs",
        "Admin controls, domain verification, and analytics",
        "Enterprise data excluded from training by default.",
      ],
    },
  ],
};
