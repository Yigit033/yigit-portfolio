export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  icon: string;
  colorClass: string;
  /** Public verification link. Omitted when no stable public URL exists. */
  url?: string;
}

export const certifications: Certification[] = [
  {
    id: "miuul-python-ds",
    title: "Python Programming for Data Science",
    issuer: "Miuul",
    year: "2024",
    icon: "code",
    colorClass: "text-blue-600 dark:text-blue-400",
    url: "https://learning.miuul.com/certificates/qiakilvn2r",
  },
  {
    id: "miuul-machine-learning",
    title: "Machine Learning",
    issuer: "Miuul",
    year: "2024",
    icon: "brain",
    colorClass: "text-purple-600 dark:text-purple-400",
    url: "https://learning.miuul.com/certificates/gjsxdwtg8g",
  },
  {
    id: "miuul-azure",
    title: "Microsoft Azure Fundamentals",
    issuer: "Miuul",
    year: "2024",
    icon: "cloud",
    colorClass: "text-sky-600 dark:text-sky-400",
    url: "https://learning.miuul.com/certificates/pp9flrjpf8",
  },
  {
    id: "btk-python-tensorflow",
    title: "Veri Bilimi için Python ve TensorFlow",
    issuer: "BTK Akademi",
    year: "2024",
    icon: "cpu",
    colorClass: "text-orange-600 dark:text-orange-400",
    url: "https://www.btkakademi.gov.tr/portal/certificates",
  },
  {
    id: "turkcell-veri-bilimi",
    title: "Veri Bilimi ve Yapay Zekaya Giriş",
    issuer: "Turkcell",
    year: "2024",
    icon: "book-open",
    colorClass: "text-yellow-600 dark:text-yellow-400",
    url: "https://gelecegiyazanlar.turkcell.com.tr/certificate/dWlkMjc4ODIyY2lkNTQ2cWlkMTA1ZW5k",
  },
  {
    id: "turkcell-pentesting",
    title: "Pentesting",
    issuer: "Turkcell Academy",
    year: "2023",
    icon: "shield",
    colorClass: "text-red-600 dark:text-red-400",
  },
  {
    id: "turk-traktor-innovation",
    title: "Technology and Innovation",
    issuer: "Türk Traktör",
    year: "2023",
    icon: "zap",
    colorClass: "text-amber-600 dark:text-amber-400",
  },
  {
    id: "habitat-visa",
    title: "Paramı Yönetebiliyorum",
    issuer: "Habitat & Visa",
    year: "2023",
    icon: "medal",
    colorClass: "text-teal-600 dark:text-teal-400",
  },
];

export const certificationTags = ["Machine Learning", "Data Science", "Cloud Fundamentals"];
