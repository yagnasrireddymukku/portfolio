export interface SocialItem {
  id: string;
  name: string;
  url: string;
  isPlaceholder: boolean;
  username: string;
  icon: string;
  category: 'primary' | 'secondary';
}

export const SOCIAL_LINKS: SocialItem[] = [
  {
    id: "email",
    name: "Email",
    url: "mailto:reddysri0306@gmail.com",
    isPlaceholder: false,
    username: "reddysri0306@gmail.com",
    icon: "Mail",
    category: "primary"
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/yagynasri-reddy-mukku-269012301/",
    isPlaceholder: false,
    username: "yagynasri-reddy-mukku",
    icon: "Linkedin",
    category: "primary"
  },
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/yagnasrireddymukku",
    isPlaceholder: false,
    username: "yagnasrireddymukku",
    icon: "Github",
    category: "primary"
  },
  {
    id: "guvi",
    name: "GUVI",
    url: "https://www.guvi.in/reddysri030618970",
    isPlaceholder: false,
    username: "reddysri030618970",
    icon: "Guvi",
    category: "primary"
  }
];

export const CONTACT_CONFIG = {
  primaryEmail: "reddysri0306@gmail.com",
  location: "Andhra Pradesh / Hyderabad, India",
  responseWindow: "Within 24-48 hours",
  availability: "Open to AI Engineering, Full-Stack, & Collaborative Opportunities",
  googleSheetWebhookUrl: "https://script.google.com/macros/s/AKfycbzLzsl8psVQ6O9XKLUh6thepVeXnOFMB9HItHTy3yFkA4F405uukktO8C0RLUPTtFAd1w/exec"
};
