import React from 'react';
import {
  Brain,
  Code,
  ShoppingBag,
  Server,
  Sparkles,
  Cpu
} from 'lucide-react';

export interface TechIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number;
}

// 1. Python Logo
export const PythonLogo: React.FC<TechIconProps> = ({ className = 'w-5 h-5', ...props }) => (
  <svg viewBox="0 0 128 128" className={className} fill="none" {...props}>
    <path
      d="M63.5 12c-27.4 0-25.7 11.9-25.7 11.9l.03 12.3h26.2v3.7H25.3S12 38.4 12 65.8c0 27.5 11.6 26.5 11.6 26.5h6.9v-9.7s-.4-11.6 11.4-11.6h26.5s11 0 11-10.8V33.6S84 12 63.5 12zm-14.7 7.2c2.4 0 4.3 1.9 4.3 4.3s-1.9 4.3-4.3 4.3-4.3-1.9-4.3-4.3 1.9-4.3 4.3-4.3z"
      fill="#387EB8"
    />
    <path
      d="M64.5 116c27.4 0 25.7-11.9 25.7-11.9l-.03-12.3H64v-3.7h38.7S116 89.6 116 62.2c0-27.5-11.6-26.5-11.6-26.5h-6.9v9.7s.4 11.6-11.4 11.6H59.6s-11 0-11 10.8v26.6S44 116 64.5 116zm14.7-7.2c-2.4 0-4.3-1.9-4.3-4.3s1.9-4.3 4.3-4.3 4.3 1.9 4.3 4.3-1.9 4.3-4.3 4.3z"
      fill="#FFE052"
    />
  </svg>
);

// 2. React Logo
export const ReactLogo: React.FC<TechIconProps> = ({ className = 'w-5 h-5', ...props }) => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" className={className} fill="none" {...props}>
    <circle cx="0" cy="0" r="2.05" fill="#00D8FF" />
    <g stroke="#00D8FF" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

// 3. TypeScript Logo
export const TypeScriptLogo: React.FC<TechIconProps> = ({ className = 'w-5 h-5', ...props }) => (
  <svg viewBox="0 0 128 128" className={className} fill="none" {...props}>
    <rect width="128" height="128" rx="20" fill="#3178C6" />
    <path
      d="M70.5 73.2c1.7 3.5 4.3 6.3 7.8 8.4 3.5 2.1 7.7 3.2 12.6 3.2 4.4 0 8.2-.9 11.4-2.7 3.2-1.8 5.6-4.3 7.2-7.5 1.6-3.2 2.4-7 2.4-11.4 0-3.9-.7-7.3-2.1-10.2-1.4-2.9-3.4-5.3-6-7.2-2.6-1.9-6-3.7-10.2-5.4-3.5-1.4-6.3-2.7-8.4-3.9-2.1-1.2-3.6-2.5-4.5-3.9-.9-1.4-1.3-3.1-1.3-5.1 0-2.3.6-4.3 1.8-6 1.2-1.7 2.9-3 5.1-3.9 2.2-.9 4.8-1.4 7.8-1.4 3.7 0 7 .8 9.9 2.4 2.9 1.6 5.1 3.9 6.6 6.9l9.3-6.1c-2.3-4.3-5.7-7.7-10.2-10.2-4.5-2.5-9.8-3.7-15.9-3.7-5.3 0-10 .9-14.1 2.7-4.1 1.8-7.3 4.4-9.6 7.8-2.3 3.4-3.5 7.4-3.5 12 0 4.3.8 8.1 2.4 11.4 1.6 3.3 3.9 6 6.9 8.1 3 2.1 6.8 4.1 11.4 6 3.7 1.5 6.6 2.9 8.7 4.2 2.1 1.3 3.6 2.7 4.5 4.2.9 1.5 1.4 3.3 1.4 5.4 0 2.6-.7 4.9-2.1 6.8-1.4 1.9-3.4 3.4-6 4.5-2.6 1.1-5.7 1.6-9.3 1.6-4.6 0-8.7-1.1-12.3-3.3-3.6-2.2-6.3-5.4-8.1-9.6L70.5 73.2zM27 34.8h37.5V45H47.8v56.2H36.3V45H27V34.8z"
      fill="#FFFFFF"
    />
  </svg>
);

// 4. JavaScript Logo
export const JavaScriptLogo: React.FC<TechIconProps> = ({ className = 'w-5 h-5', ...props }) => (
  <svg viewBox="0 0 128 128" className={className} fill="none" {...props}>
    <rect width="128" height="128" rx="20" fill="#F7DF1E" />
    <path
      d="M74.8 88.5c1.4 2.5 3.3 4.5 5.7 6 2.4 1.5 5.2 2.3 8.4 2.3 3.2 0 5.8-.7 7.8-2.1 2-1.4 3-3.3 3-5.7 0-1.8-.6-3.3-1.8-4.5s-2.8-2.3-4.8-3.3c-2-.9-4.7-1.9-8.1-3-4.8-1.5-8.7-3.4-11.7-5.7-3-2.3-5.1-5.1-6.3-8.4-1.2-3.3-1.8-7-1.8-11.1 0-4.6 1.1-8.7 3.3-12.3 2.2-3.6 5.3-6.4 9.3-8.4 4-2 8.7-3 14.1-3 5.3 0 10.1 1.1 14.4 3.3 4.3 2.2 7.6 5.3 9.9 9.3l-8.7 5.6c-1.6-2.6-3.7-4.6-6.3-6-2.6-1.4-5.7-2.1-9.3-2.1-3.2 0-5.8.6-7.8 1.8-2 1.2-3 2.9-3 5.1 0 1.6.6 3 1.8 4.1 1.2 1.1 2.7 2.1 4.5 3 1.8.9 4.3 1.8 7.5 2.7 5.1 1.5 9.2 3.4 12.3 5.7 3.1 2.3 5.3 5.1 6.6 8.4 1.3 3.3 2 7.1 2 11.4 0 4.8-1.2 9.1-3.6 12.9-2.4 3.8-5.8 6.8-10.2 9-4.4 2.2-9.6 3.3-15.6 3.3-6.5 0-12.2-1.4-17.1-4.2-4.9-2.8-8.6-6.8-11.1-12l10.9-6.5zM22.8 35h11.4v48.2c0 3.3.6 5.9 1.8 7.8 1.2 1.9 2.9 3.2 5.1 3.9 2.2.7 4.9.8 8.1.3v9.9c-4.4.9-8.3.9-11.7.0-3.4-.9-6.1-2.4-8.1-4.5-2-2.1-3.4-4.7-4.2-7.8-.8-3.1-1.2-6.9-1.2-11.4V35h-1.2z"
      fill="#000000"
    />
  </svg>
);

// 5. Tailwind CSS Logo
export const TailwindLogo: React.FC<TechIconProps> = ({ className = 'w-5 h-5', ...props }) => (
  <svg viewBox="0 0 128 128" className={className} fill="none" {...props}>
    <path
      d="M34.2 37.5c6.3-2.5 12.5-1.3 18.8 3.8 6.3 5 11.3 6.3 15 3.8 3.8-2.5 6.3-7.5 7.5-15 6.3 2.5 11.3 7.5 15 15 3.8 7.5 8.8 11.3 15 11.3 6.3 0 12.5-3.8 18.8-11.3-6.3 2.5-12.5 1.3-18.8-3.8-6.3-5-11.3-6.3-15-3.8-3.8 2.5-6.3 7.5-7.5 15-6.3-2.5-11.3-7.5-15-15-3.8-7.5-8.8-11.3-15-11.3-6.2 0-12.4 3.9-18.8 11.3zm-30 37.5c6.3-2.5 12.5-1.3 18.8 3.8 6.3 5 11.3 6.3 15 3.8 3.8-2.5 6.3-7.5 7.5-15 6.3 2.5 11.3 7.5 15 15 3.8 7.5 8.8 11.3 15 11.3 6.3 0 12.5-3.8 18.8-11.3-6.3 2.5-12.5 1.3-18.8-3.8-6.3-5-11.3-6.3-15-3.8-3.8 2.5-6.3 7.5-7.5 15-6.3-2.5-11.3-7.5-15-15-3.8-7.5-8.8-11.3-15-11.3-6.3 0-12.5 3.9-18.8 11.3z"
      fill="#38BDF8"
    />
  </svg>
);

// 6. Shopify Logo
export const ShopifyLogo: React.FC<TechIconProps> = ({ className = 'w-5 h-5', ...props }) => (
  <svg viewBox="0 0 128 128" className={className} fill="none" {...props}>
    <path
      d="M107.5 33.3c-.4-.9-1.2-1.4-2.1-1.4-.9 0-18.5-.6-18.5-.6s-12.3-12.4-13.6-13.6c-1.3-1.2-3.8-.9-4.8-.6-.3.1-6.1 1.9-15.6 4.9-9.1-6.6-18.4-6.2-22.3-5.2-1.2.3-1.8 1.1-2.2 1.8-.4.7-6.2 26.5-6.2 26.5s-14.8 4.6-15.4 4.8c-4.9 1.5-5 5.5-4.8 8.6.9 13.9 10.9 61.2 13.5 73.6 1.2 5.8 4.7 7.3 8.3 7.3 8.3 0 25.1-2.5 25.1-2.5l25.8-5.3 22.8-5.3c5.3-1.2 5.5-5.5 5.8-8.6 2-20.9 8.2-76 9-88.3 0-.4 0-.9-.1-1.2zm-35.3-11.3s10 10 11.2 11.2c0 0-7.3 2.3-17.1 5.3 1.5-7.3 3.9-14.1 5.9-16.5zm-16 5.1c2.8 3.5 4.7 8.7 6.1 15.3-7.5 2.3-15.5 4.8-22.7 7.1 2.3-9.5 9-19.1 16.6-22.4z"
      fill="#95BF47"
    />
    <path
      d="M87 31.4c-.9 0-18.5-.6-18.5-.6s-12.3-12.4-13.6-13.6c-.6-.6-1.5-.8-2.4-.8l-.3 99.4 22.8-5.3c5.3-1.2 5.5-5.5 5.8-8.6 2.1-20.9 8.3-76 9-88.3.1-.4.1-.9-.1-1.2-.4-.9-1.2-1.4-2.1-1.4-.6 0-.6 0-.6 0v.4z"
      fill="#5E8E3E"
    />
    <path
      d="M62.6 51.5c-7.5 2.3-15.5 4.8-22.7 7.1 2.3-9.5 9-19.1 16.6-22.4l6.1 15.3z"
      fill="#FFFFFF"
      fillOpacity=".2"
    />
    <path
      d="M71.7 54.3c-2.4 0-4.3-1.4-5.5-2.8l-1.5 5.3c-.6 2.3-1.9 4.3-3.6 5.8-2.6 2.3-6.1 3.5-10.2 3.5-4.4 0-7.9-1.3-10.5-3.8-2.5-2.5-3.8-6-3.8-10.5 0-5.1 1.7-9.4 5.1-12.8s8-5.1 13.9-5.1c2.6 0 4.9.4 7 .9l-1.8 6.4c-1.3-.4-2.9-.6-4.8-.6-3.7 0-6.5.9-8.4 2.8s-2.9 4.5-2.9 7.8c0 2.5.7 4.5 2.1 5.9 1.4 1.4 3.4 2.1 5.9 2.1 3.2 0 5.6-1.1 7.2-3.3 1.2-1.6 1.9-3.7 2.3-6.2l3.4-12.2c1.7-6 5.4-9.3 11-9.9 2.1-.2 4 .1 5.7.9l-2.4 8.5c-.8-.4-1.8-.6-2.9-.6-2.6 0-4.2 1.4-4.8 4.2l-3.8 13.3c-.3 1.2-.5 2.3-.5 3.3 0 1.2.4 2.2 1.2 2.8.8.7 1.9 1 3.3 1 2.4 0 4.4-.8 5.9-2.3l-1.4 5.4c-1.3 1-3 1.6-5 1.6z"
      fill="#FFFFFF"
    />
  </svg>
);

// 7. Hostinger / Cloud Logo
export const HostingerLogo: React.FC<TechIconProps> = ({ className = 'w-5 h-5', ...props }) => (
  <svg viewBox="0 0 128 128" className={className} fill="none" {...props}>
    <rect width="128" height="128" rx="24" fill="#673DE6" />
    <path
      d="M36 34h14v22h28V34h14v60H78V72H50v22H36V34z"
      fill="#FFFFFF"
    />
    <circle cx="92" cy="34" r="5" fill="#FF5722" />
  </svg>
);

// 8. PyTorch Logo
export const PyTorchLogo: React.FC<TechIconProps> = ({ className = 'w-5 h-5', ...props }) => (
  <svg viewBox="0 0 128 128" className={className} fill="none" {...props}>
    <path
      d="M66.4 18.2a2.3 2.3 0 0 0-2.8.1L40 37.8a28 28 0 1 0 39.6 39.6l6-6-8.5-8.5-6 6a16 16 0 1 1-22.6-22.6l17.7-14.8a2.3 2.3 0 0 0 .2-3.3z"
      fill="#EE4C2C"
    />
    <circle cx="83" cy="38" r="5" fill="#EE4C2C" />
  </svg>
);

// 9. OpenAI / LLM Logo
export const OpenAILogo: React.FC<TechIconProps> = ({ className = 'w-5 h-5', ...props }) => (
  <svg viewBox="0 0 128 128" className={className} fill="currentColor" {...props}>
    <path d="M110.8 54.4c-1.1-9.1-7.2-16.7-15.6-19.8-1.5-6.8-5.7-12.7-11.7-16.2-7.8-4.5-17.3-4.5-25.1 0-2.3 1.3-4.4 3-6.2 4.9C49 20.7 44 19.4 38.8 19.4c-9.7 0-18.7 5.1-23.6 13.5-3.7 6.3-4.6 13.9-2.5 20.8-6.1 4.5-9.8 11.6-9.8 19.2 0 9.8 6 18.7 15.1 22.4 1.5 6.8 5.7 12.7 11.7 16.2 4.4 2.5 9.3 3.9 14.3 3.9 3.7 0 7.4-.8 10.8-2.3 3.2 2.6 8.2 3.9 13.4 3.9 9.7 0 18.7-5.1 23.6-13.5 3.7-6.3 4.6-13.9 2.5-20.8 6.1-4.5 9.8-11.6 9.8-19.2 0-9.8-6.1-18.7-15.3-22.5zM64 77.2c-7.3 0-13.2-5.9-13.2-13.2s5.9-13.2 13.2-13.2 13.2 5.9 13.2 13.2-5.9 13.2-13.2 13.2z" />
  </svg>
);

// 10. Hugging Face Logo
export const HuggingFaceLogo: React.FC<TechIconProps> = ({ className = 'w-5 h-5', ...props }) => (
  <svg viewBox="0 0 128 128" className={className} fill="none" {...props}>
    <circle cx="64" cy="64" r="54" fill="#FFD21E" />
    <circle cx="45" cy="55" r="7" fill="#000" />
    <circle cx="83" cy="55" r="7" fill="#000" />
    <path d="M42 76c7 12 37 12 44 0" stroke="#000" strokeWidth="6" strokeLinecap="round" />
    <path d="M22 62c-6 10 2 24 12 20" stroke="#FF9D00" strokeWidth="7" strokeLinecap="round" />
    <path d="M106 62c6 10-2 24-12 20" stroke="#FF9D00" strokeWidth="7" strokeLinecap="round" />
  </svg>
);

// 11. Git Logo
export const GitLogo: React.FC<TechIconProps> = ({ className = 'w-5 h-5', ...props }) => (
  <svg viewBox="0 0 128 128" className={className} fill="none" {...props}>
    <path
      d="M122.9 57.3L70.7 5.1c-3.7-3.7-9.7-3.7-13.4 0l-12 12 17.2 17.2c3.9-1.3 8.5-.4 11.6 2.7 3.1 3.1 4 7.6 2.7 11.6L95.5 67c3.9-1.3 8.5-.4 11.6 2.7 4.4 4.4 4.4 11.6 0 16-4.4 4.4-11.6 4.4-16 0-3.3-3.3-4.1-8.2-2.5-12.2L73 57.7v32.6c1.8 1.1 3.4 2.7 4.4 4.7 3.1 6.3.6 13.9-5.7 17-6.3 3.1-13.9.6-17-5.7-3.1-6.3-.6-13.9 5.7-17 1.8-.9 3.8-1.3 5.8-1.3V54.4c-2-.1-4-.7-5.8-1.6L44.8 68.6c1.3 4 .4 8.5-2.7 11.6-4.4 4.4-11.6 4.4-16 0s-4.4-11.6 0-16c3.1-3.1 7.6-4 11.6-2.7L53.5 45.7c-1.3-4-.4-8.5 2.7-11.6 3.1-3.1 7.4-4.1 11.4-2.8L51.5 15.2 5.1 61.6c-3.7 3.7-3.7 9.7 0 13.4l52.2 52.2c3.7 3.7 9.7 3.7 13.4 0l52.2-52.2c3.7-3.7 3.7-9.7 0-13.4"
      fill="#F05032"
    />
  </svg>
);

// 12. Vite Logo
export const ViteLogo: React.FC<TechIconProps> = ({ className = 'w-5 h-5', ...props }) => (
  <svg viewBox="0 0 128 128" className={className} fill="none" {...props}>
    <path
      d="M117.8 17.5L66.7 122.9c-1.1 2.3-4.3 2.3-5.4 0L10.2 17.5c-1.3-2.6.8-5.6 3.6-5.2l50.2 7.1L114.2 12.3c2.8-.4 4.9 2.6 3.6 5.2z"
      fill="url(#vite-grad)"
    />
    <path
      d="M75.5 14.6L37.8 63.2c-.7.9-.1 2.2 1.1 2.2h26.4l-7.2 36.3c-.3 1.6 1.7 2.6 2.7 1.3l44.3-54.8c.8-1 .1-2.5-1.2-2.5H79.8l7.5-29.5c.4-1.6-1.6-2.7-2.6-1.6z"
      fill="#FFD21E"
    />
    <defs>
      <linearGradient id="vite-grad" x1="10" y1="12" x2="118" y2="123" gradientUnits="userSpaceOnUse">
        <stop stopColor="#41D1FF" />
        <stop offset="1" stopColor="#BD34FE" />
      </linearGradient>
    </defs>
  </svg>
);

// 13. HTML5 Logo
export const HTML5Logo: React.FC<TechIconProps> = ({ className = 'w-5 h-5', ...props }) => (
  <svg viewBox="0 0 128 128" className={className} fill="none" {...props}>
    <path d="M19 116.5L9 4h110l-10 112.5L64 128l-45-11.5z" fill="#E44D26" />
    <path d="M64 117.2l37.2-10.3 8.3-93.7H64v104z" fill="#F16529" />
    <path d="M64 51.5h-18l-1.2-14H64V24.3H30.8l3.6 40.5H64v-13.3zM64 87.8l-15.1-4.1-1-11.4H34.6l1.9 21.6 27.5 7.6v-13.7zM64 51.5v13.3h16.7l-1.6 17.8L64 86.8v13.7l27.5-7.6 3.6-41.4H64z" fill="#FFFFFF" />
  </svg>
);

// 14. CSS3 Logo
export const CSS3Logo: React.FC<TechIconProps> = ({ className = 'w-5 h-5', ...props }) => (
  <svg viewBox="0 0 128 128" className={className} fill="none" {...props}>
    <path d="M19 116.5L9 4h110l-10 112.5L64 128l-45-11.5z" fill="#1572B6" />
    <path d="M64 117.2l37.2-10.3 8.3-93.7H64v104z" fill="#33A9DC" />
    <path d="M64 51.5h-18l-1.2-14H64V24.3H30.8l3.6 40.5H64v-13.3zM64 87.8l-15.1-4.1-1-11.4H34.6l1.9 21.6 27.5 7.6v-13.7zM64 51.5v13.3h16.7l-1.6 17.8L64 86.8v13.7l27.5-7.6 3.6-41.4H64z" fill="#FFFFFF" />
  </svg>
);

// 15. Rotomaker Emblem
export const RotomakerEmblem: React.FC<TechIconProps> = ({ className = 'w-5 h-5', ...props }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" {...props}>
    <circle cx="50" cy="50" r="46" fill="#0B1020" stroke="#12B3A6" strokeWidth="4" />
    <path d="M30 70V30h22c9 0 16 5 16 13 0 6-4 11-10 12l12 15H56L46 56h-4v14H30zm12-24h10c4 0 7-2 7-5s-3-5-7-5H42v10z" fill="#12B3A6" />
    <circle cx="70" cy="28" r="4" fill="#C2622E" />
  </svg>
);

// 16. IBM Logo
export const IBMLogo: React.FC<TechIconProps> = ({ className = 'w-5 h-5', ...props }) => (
  <svg viewBox="0 0 100 40" className={className} fill="#1F70C1" {...props}>
    <rect y="0" width="100" height="3" />
    <rect y="6" width="100" height="3" />
    <rect y="12" width="100" height="3" />
    <rect y="18" width="100" height="3" />
    <rect y="24" width="100" height="3" />
    <rect y="30" width="100" height="3" />
    <rect y="36" width="100" height="3" />
  </svg>
);

// 17. HackerRank Logo
export const HackerRankLogo: React.FC<TechIconProps> = ({ className = 'w-5 h-5', ...props }) => (
  <svg viewBox="0 0 128 128" className={className} fill="none" {...props}>
    <rect width="128" height="128" rx="20" fill="#00EA64" />
    <path d="M52 32v64h12V68h16v28h12V32H80v24H64V32H52z" fill="#0B1020" />
  </svg>
);

// 18. GUVI Logo
export const GuviLogo: React.FC<TechIconProps> = ({ className = 'w-5 h-5', ...props }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" {...props}>
    <rect width="24" height="24" rx="6" fill="#15803d" fillOpacity="0.2" />
    <path
      d="M12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12H12V14.8H17.05C16.45 16.5 14.4 17.5 12 17.5C8.96 17.5 6.5 15.04 6.5 12C6.5 8.96 8.96 6.5 12 6.5C13.48 6.5 14.8 7.08 15.78 8.02L17.82 5.98C16.28 4.74 14.24 4 12 4Z"
      fill="#22c55e"
    />
  </svg>
);

// 19. Scaler Logo
export const ScalerLogo: React.FC<TechIconProps> = ({ className = 'w-5 h-5', ...props }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" {...props}>
    <rect width="100" height="100" rx="20" fill="#ED1C24" fillOpacity="0.15" />
    <path d="M25 50L45 25h15L38 50l22 25H45L25 50z" fill="#ED1C24" />
    <path d="M55 50l20-25h15L68 50l22 25H75L55 50z" fill="#FF5252" />
  </svg>
);

// 20. Nextwave Logo
export const NextwaveLogo: React.FC<TechIconProps> = ({ className = 'w-5 h-5', ...props }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" {...props}>
    <rect width="100" height="100" rx="20" fill="#0A58CA" fillOpacity="0.15" />
    <path d="M28 72V28l32 32V28h12v44L40 40v32H28z" fill="#0D6EFD" />
  </svg>
);

// 21. Sololearn Logo
export const SololearnLogo: React.FC<TechIconProps> = ({ className = 'w-5 h-5', ...props }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" {...props}>
    <rect width="100" height="100" rx="20" fill="#1B998B" fillOpacity="0.15" />
    <circle cx="50" cy="50" r="28" stroke="#1B998B" strokeWidth="8" fill="none" />
    <circle cx="50" cy="50" r="10" fill="#2E4057" />
  </svg>
);

// Helper function to resolve any skill or technology keyword to its brand logo
export const getTechIcon = (name: string, className = 'w-5 h-5'): React.ReactNode => {
  const n = name.toLowerCase().trim();

  if (n.includes('python')) return <PythonLogo className={className} />;
  if (n.includes('react')) return <ReactLogo className={className} />;
  if (n.includes('typescript') || n === 'ts') return <TypeScriptLogo className={className} />;
  if (n.includes('javascript') || n === 'js') return <JavaScriptLogo className={className} />;
  if (n.includes('tailwind')) return <TailwindLogo className={className} />;
  if (n.includes('shopify')) return <ShopifyLogo className={className} />;
  if (n.includes('hostinger') || n.includes('hosting')) return <HostingerLogo className={className} />;
  if (n.includes('pytorch')) return <PyTorchLogo className={className} />;
  if (n.includes('openai') || n.includes('llm') || n.includes('generative ai') || n.includes('chatgpt')) return <OpenAILogo className={className} />;
  if (n.includes('hugging')) return <HuggingFaceLogo className={className} />;
  if (n.includes('git') || n.includes('github')) return <GitLogo className={className} />;
  if (n.includes('vite')) return <ViteLogo className={className} />;
  if (n.includes('html')) return <HTML5Logo className={className} />;
  if (n.includes('css')) return <CSS3Logo className={className} />;
  if (n.includes('ibm')) return <IBMLogo className={className} />;
  if (n.includes('hackerrank')) return <HackerRankLogo className={className} />;
  if (n.includes('guvi') || n.includes('sawit')) return <GuviLogo className={className} />;
  if (n.includes('scaler')) return <ScalerLogo className={className} />;
  if (n.includes('nextwave')) return <NextwaveLogo className={className} />;
  if (n.includes('sololearn')) return <SololearnLogo className={className} />;
  if (n.includes('ai') || n.includes('intelligence') || n.includes('neural')) return <Brain className={`${className} text-cyan-400`} />;
  if (n.includes('cloud') || n.includes('server') || n.includes('dns') || n.includes('ssl')) return <Server className={`${className} text-blue-400`} />;
  if (n.includes('e-commerce') || n.includes('store') || n.includes('catalog')) return <ShoppingBag className={`${className} text-emerald-400`} />;
  if (n.includes('creative') || n.includes('art') || n.includes('mythoverse')) return <Sparkles className={`${className} text-amber-400`} />;
  if (n.includes('api') || n.includes('backend') || n.includes('fastapi') || n.includes('django') || n.includes('c programming')) return <Cpu className={`${className} text-indigo-400`} />;
  if (n.includes('rotomaker')) return <RotomakerEmblem className={className} />;
  
  // Default code icon
  return <Code className={`${className} text-brand-400`} />;
};
