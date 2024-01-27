import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Danh (Deon) Tran",
  initials: "DT",
  location: "Kansas City, MO, USA",
  locationLink: "https://www.google.com/maps/place/Kansas+City,+MO",
  about:
    "Innovative Mechanical Engineer with a strong background in defense R&D, specializing in complex engineering challenges.",
  summary:
    "Highly skilled in simplifying and deconstructing complex problems to deliver custom-built solutions in defense and aerospace engineering. Expert in CAD, FEA, and programming, with an emphasis on Python and data analytics. Known for extreme thoroughness and low error margin in high-stakes environments.",
  avatarUrl:
    "https://media.licdn.com/dms/image/C5603AQGhknyX7DxEFA/profile-displayphoto-shrink_200_200/0/1517382519042?e=1711584000&v=beta&t=wyBVui0m6JOo42_gC4Fvyu-gpr4jw8tGxDpvSBunCuY", // Replace with your actual avatar URL if desired
  personalWebsiteUrl: "https://github.com/deonneon", // Replace with your actual personal website URL if desired
  contact: {
    email: "danh.tran@mail.com",
    tel: "240-888-9457",
    social: [
      // Add your actual social links and icons
      {
        name: "GitHub",
        url: "https://github.com/deonneon",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mrdanh",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Maryland College Park",
      degree: "B.S. Mechanical Engineering",
      start: "2010",
      end: "2014",
    },
    {
      school: "Korea University, South Korea",
      degree: "Mechanical Engineering, Semester Abroad",
      start: "2013",
      end: "2013",
    },
  ],
  work: [
    {
      company: "U.S. National Security Campus, Honeywell, DOE",
      link: "https://kcnsc.doe.gov",
      badges: ["Q Clearance"],
      title: "Senior Data Scientist",
      // logo: USNationalSecurityCampusLogo,
      start: "2022",
      end: "Present",
      description:
        "Providing design and manufacturing solutions for nuclear weapons production. Spearheading the welding advanced simulation and analysis domain.",
    },
    {
      company: "",
      link: "https://kcnsc.doe.gov",
      badges: [],
      title: "Mechanical Engineer III",
      // logo: USNationalSecurityCampusLogo,
      start: "2019",
      end: "2022",
      description:
        "Providing design and manufacturing solutions for nuclear weapons production. Spearheading the welding advanced simulation and analysis domain.",
    },
    {
      company: "Naval Surface Warfare Center, Carderock Division",
      link: "https://www.navsea.navy.mil",
      badges: ["Secret Clearance"],
      title: "Mechanical Simulation Engineer",
      // logo: NavalSurfaceWarfareCenterLogo,
      start: "2015",
      end: "2019",
      description:
        "Certified robustness of design by performing predictive data analytics. Develop simulation experiment of submarine configurations. Perform large numerical computations on high performance computing clusters. (HPC)",
    },
    // Add other work experiences similarly
  ],
  skills: [
    "Simulations",
    "Consulting",
    "Programming: Python, Bash, Javascript, React",
    "Manufacturing Techniques",
    "Experimental Data Collection",
    "Data Analytics",
    "Full Stack App Development",
    "Machine Learning",
    "LLMs",
    "Big Data",
  ],
  projects: [
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Parabol",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Evercast",
      techStack: [
        "Lead Frontend Developer",

        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Mobile Vikings",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Howdy",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Howdy is a place for you to join communities you care about",
      logo: Howdy,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    },
    {
      title: "Tastycloud",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for managing and displaying restaurant menus in kiosk mode",
      logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "https://www.tastycloud.fr/",
      },
    },
    {
      title: "Ambit",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with sharing your contact details",
      logo: AmbitLogo,
    },
    {
      title: "Bim",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with booking a table in a restaurants",
      logo: BimLogo,
    },
    {
      title: "Canal Digital GO",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      logo: CDGOLogo,
    },
  ],
} as const;
