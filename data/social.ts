export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
}

export const socialLinks: SocialLink[] = [
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/Yigit033",
    icon: "github",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/yigittilaver/",
    icon: "linkedin",
  },
  {
    id: "email",
    name: "Email",
    url: "mailto:yigittilaver2000@gmail.com",
    icon: "mail",
  },
  {
    id: "phone",
    name: "Phone",
    url: "tel:+905050202095",
    icon: "phone",
  },
];

/** Plain-text contact details, used by the contact page and structured data. */
export const contactInfo = {
  name: "Yigit Tilaver",
  displayName: "Yiğit Tilaver",
  email: "yigittilaver2000@gmail.com",
  phone: "+90 505 020 2095",
  location: "Istanbul, Türkiye",
  website: "https://yigittilaver.com",
} as const;
