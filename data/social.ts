export interface SocialLink {
  id: string;
  name: string;
  /** Canonical address — shown as text on the contact page. */
  url: string;
  icon: string;
  /**
   * Where icon buttons should send the visitor instead of `url`. A `mailto:`
   * link silently does nothing on machines with no mail client registered, so
   * the e-mail icon points at the contact form rather than appearing broken.
   */
  navigateTo?: string;
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
    navigateTo: "/contact",
  },
  {
    id: "phone",
    name: "Phone",
    url: "tel:+905050202095",
    icon: "phone",
  },
];

/** Target for an icon button — the override when set, otherwise the address. */
export function socialHref(link: SocialLink): string {
  return link.navigateTo ?? link.url;
}

/** Internal routes must not open in a new tab. */
export function isExternalSocial(link: SocialLink): boolean {
  return !socialHref(link).startsWith("/");
}

/** Plain-text contact details, used by the contact page and structured data. */
export const contactInfo = {
  name: "Yigit Tilaver",
  displayName: "Yiğit Tilaver",
  email: "yigittilaver2000@gmail.com",
  phone: "+90 505 020 2095",
  location: "Istanbul, Türkiye",
  website: "https://yigittilaver.com",
} as const;
