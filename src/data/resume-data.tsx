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
  about: "Curious data scientist with an eye on UX/DX design and automation.",
  summary:
    "Highly skilled in simplifying and deconstructing complex problems to deliver custom-built solutions in defense and aerospace engineering. Expert in simulations and data analytics. Huge focus on automation. Known for extreme thoroughness and low error margin in high-stakes environments.",
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
        "Led advanced ML modeling initiatives for innovative manufacturing processes, leveraging High-Performance Computing (HPC) systems, Cloudera Hadoop Big Data clusters, and Dataiku for robust data collection and in-depth analysis. Head of the Automation Team.",
      titleFormer: "Mechanical Engineer III",
      startFormer: "2019",
      endFormer: "2022",
      descriptionFormer:
        "Provided data-driven design and manufacturing strategies for nuclear weapons production, focusing on predictive modeling and data science-supported simulations.",
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
      title: "Teachers Worksheet Generator",
      techStack: ["Side Project", "Next.js", "SaaS", "OpenAI"],
      description:
        "Generates practice problem worksheets for teachers. Best on Desktop.",
      logo: Minimal,
      link: {
        label: "worksheet-prep",
        href: "https://worksheet-prep.netlify.app/",
      },
    },
    {
      title: "Clicker Reaction Game",
      techStack: ["Side Project", "Game", "React"],
      description:
        "Reaction based clicker game designed to measure and train reaction skills.",
      logo: YearProgressLogo,
      link: {
        label: "clickerreaction",
        href: "https://deonneon.github.io/ClickerReaction/",
      },
    },
    {
      title: "U.S. States Trivia",
      techStack: ["Side Project", "Design", "React", "Netlify"],
      description: "Design project for trivia web app",
      logo: ConsultlyLogo,
      link: {
        label: "state-guessing-game",
        href: "https://state-guessing-game.netlify.app",
      },
    },
    // {
    //   title: "Instagram Caption Generator",
    //   techStack: ["Side Project", "React", "OpenAI", "Netlify"],
    //   description: "Web app to generate high engagement Instagram captions.",
    //   logo: MonitoLogo,
    //   link: {
    //     label: "caption-generator",
    //     href: "https://caption-generator-mu.vercel.app",
    //   },
    // },
    {
      title: "Daily Macro Tracker",
      techStack: ["Side Project", "React", "MySQL", "OpenAI"],
      description: "Smart Journal for Keeping Track of Daily Nutritional Goals",
      logo: BarepapersLogo,
      link: {
        label: "daily-macro-tracker",
        href: "https://shimmering-figolla-53e06a.netlify.app",
      },
    },
    {
      title: "Stock Earnings Hub",
      techStack: ["Side Project", "Next.js", "Stocks", "Front-End Only"],
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
      techStack: ["Side Project", "Bash", "Tmux", "Journal", "linux"],
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
