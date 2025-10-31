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
  about: "Curious data professional with an eye on UX/DX design and system automation.",
  summary:
    "Highly skilled in simplifying and deconstructing complex problems to deliver custom-built solutions in defense engineering. Proficient in all things data - genetic ai, data engineering, and data analytics. Huge focus on system automation. Known for extreme thoroughness.",
  avatarUrl:
    "/self.jpg", 
  personalWebsiteUrl: "https://github.com/deonneon", 
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
      company: "U.S. National Security Campus, Department of Energy operated by Honeywell",
      link: "https://kcnsc.doe.gov",
      badges: ["Q Clearance (Higher than TOP SECRET)"],
      title: "Lead Data Scientist",
      // logo: USNationalSecurityCampusLogo,
      start: "2024",
      end: "2025",
      description:
        "Leading data pipeline modernization effort for manufactured weapon technology, leveraging Cloudera Hadoop stack and Dataiku platform, resulting in improved cross enterprise data ingestion data cataloging, and data quality. Collaborated with engineering and operations teams to design scalable data architectures, aligning technical strategies with organizational digital transformation goals. Lead a team of BI admins driving MicroStrategy platform adoption across the enterprise, enabling data-driven decision making through both traditional data warehouse solutions and advanced big data analytics. Successfully increased user engagement and empowered teams to develop meaningful KPIs through enhanced visualization capabilities.",
      titleFormer: "Senior Data Scientist",
      startFormer: "2022",
      endFormer: "2024",
      descriptionFormer:
        "Provided data-driven design and manufacturing strategies for nuclear weapons production, focusing on predictive modeling, statistical methods, and modeling simulations. Founded and lead an engineering automation team; facilitating the adoption of the latest AI and ML solutions while streamlining processes, enhancing software efficiency, and significantly reducing error margins in high stakes environments.",
      titleFormer2: "Mechanical Engineer III",
      startFormer2: "2019",
      endFormer2: "2022",
      descriptionFormer2:
        "Provided consultation and timely root cause analysis for unexpected and costly manufacturing challenges in 20+ projects including high-profile internal and client-facing engagements; contributed to bringing in +$50,000 cost saving in first month. Facilitated large-scale projects in a HPC cluster environment, driving significant improvements in design solutions.",
    },
    {
      company: "Naval Surface Warfare Center, United States Navy, DOD",
      link: "https://www.navsea.navy.mil/Home/Warfare-Centers/NSWC-Carderock/",
      badges: ["Secret Clearance"],
      title: "Mechanical Simulation Engineer",
      // logo: NavalSurfaceWarfareCenterLogo,
      start: "2015",
      end: "2019",
      description:
        "Certified design robustness through predictive data analytics; engineered simulation experiments for submarine configurations; and conducted large-scale numerical computations on High Performance Computing (HPC) clusters.",
      titleFormer: "",
      startFormer: "",
      endFormer: "",
      descriptionFormer: "",
    },
    {
      company: "Sikorsky, Lockheed Martin",
      link: "https://www.nasa.gov",
      badges: [],
      title: "Engineer Co-op",
      // logo: NavalSurfaceWarfareCenterLogo,
      start: "2012",
      end: "2012",
      description: "",
      titleFormer: "",
      startFormer: "",
      endFormer: "",
      descriptionFormer: "",
    },
    {
      company: "NASA",
      link: "https://www.nasa.gov",
      badges: [],
      title: "Engineer Intern",
      // logo: NavalSurfaceWarfareCenterLogo,
      start: "2009",
      end: "2010",
      description: "",
      titleFormer: "",
      startFormer: "",
      endFormer: "",
      descriptionFormer: "",
    },
  ],
  academic_work: [
    {
      company: "Alfred Gessow Rotorcraft Center, UMCP",
      link: "https://aero.umd.edu/research/agrc",
      badges: [],
      title: "Research Asssitant",
      // logo: USNationalSecurityCampusLogo,
      start: "2013",
      end: "2014",
      description:
        "Full lifecycle R&D from computer modeling to wind tunnel testing of functional scaled model",
      titleFormer: "",
      startFormer: "",
      endFormer: "",
      descriptionFormer: "",
    },
    {
      company: "Gamera Human Powered Helicopter, UMCP",
      link: "https://aero.umd.edu/research/agrc",
      badges: [],
      title: "Research Assistant and Pilot",
      // logo: USNationalSecurityCampusLogo,
      start: "2013",
      end: "2014",
      description:
        "Developed and fabricated lightweight rotor blades and helicopter structure from composites",
      titleFormer: "",
      startFormer: "",
      endFormer: "",
      descriptionFormer: "",
    },
  ],
  skills: [
    "Simulations",
    "Consulting",
    "Programming: Python, Bash, Javascript, React, Spark",
    "Genetic AI",
    "Data Engineering",
    "Data Analytics",
    "Full Stack App Development",
    "Machine Learning",
    "LLMs",
    "Big Data",
  ],
  projects: [
    {
      title: "Teachers Worksheet Generator",
      techStack: ["Next.js", "SaaS", "OpenAI"],
      description:
        "Generates practice problem worksheets for teachers. Full experience on Desktop.",
      logo: Minimal,
      link: {
        label: "worksheet-prep",
        href: "https://www.worksheetprep.com",
      },
    },
    {
      title: "KitSNAP",
      techStack: ["Vite.js", "Webscrapper", "React"],
      description:
        "Gear builder for niche hobbies. Lookup and compare repository. ",
      logo: Minimal,
      link: {
        label: "kitsnap",
        href: "https://www.kitsnap.app/",
      },
    },
    {
      title: "Diagram Mapper",
      techStack: ["Vite.js", "Webscrapper", "React"],
      description:
        "Modern and user-friendly diagram mapper. Heavy on design and UX.",
      logo: Minimal,
      link: {
        label: "diagrammapper",
        href: "http://diagrammapper.netlify.app",
      },
    },
    {
      title: "U.S. States Trivia",
      techStack: ["Design", "React", "Netlify"],
      description: "Design project for trivia web app",
      logo: ConsultlyLogo,
      link: {
        label: "state-guessing-game",
        href: "https://state-guessing-game.netlify.app",
      },
    },
    {
      title: "Clicker Reaction Game",
      techStack: ["Game", "React"],
      description:
        "Reaction based clicker game designed to measure and train reaction skills.",
      logo: YearProgressLogo,
      link: {
        label: "clickerreaction",
        href: "https://deonneon.github.io/ClickerReaction/",
      },
    },
    // {
    //   title: "Instagram Caption Generator",
    //   techStack: ["React", "OpenAI", "Netlify"],
    //   description: "Web app to generate high engagement Instagram captions.",
    //   logo: MonitoLogo,
    //   link: {
    //     label: "caption-generator",
    //     href: "https://caption-generator-mu.vercel.app",
    //   },
    // },
    {
      title: "Daily Macro Tracker",
      techStack: ["React", "MySQL", "OpenAI"],
      description: "Smart Journal for Keeping Track of Daily Nutritional Goals",
      logo: BarepapersLogo,
      link: {
        label: "daily-macro-tracker",
        href: "https://shimmering-figolla-53e06a.netlify.app",
      },
    },
    {
      title: "Stock Earnings Hub",
      techStack: ["Next.js", "Stocks", "Front-End Only"],
      description:
        "Design project for a central earnings dashboard. Built with Next.js and Vercel",
      logo: JarockiMeLogo,
      link: {
        label: "earnings-hub",
        href: "https://earnings-hub.vercel.app/",
      },
    },
    {
      title: "Terminal Journal App",
      techStack: ["Bash", "Tmux", "Journal", "linux"],
      description:
        "A simple, terminal-based journaling application leveraging Tmux.",
      logo: JarockiMeLogo,
      link: {
        label: "linux-journal",
        href: "https://github.com/deonneon/tmux_journal_app",
      },
    },
  ],
} as const;
