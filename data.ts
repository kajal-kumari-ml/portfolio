
import { Experience, Project, SkillCategory } from './types';

export const EXPERIENCES: Experience[] = [
  {
    company: "Extramarks Education",
    role: "Senior Software Developer",
    location: "Noida",
    period: "Feb 2025 - Present",
    url: "https://www.extramarks.com/",
    achievements: [
      "Currently working on the Question MSA.",
      "Migrating PostgreSQL data to MongoDB for improved scalability and performance.",
      "Identifying and resolving production bugs to ensure system stability.",
      "Upgrading the application environment from Java 11 to Java 17.",
      "Enhancing existing features and developing new functionalities (objective-type to subjective-type conversion)."
    ]
  },
  {
    company: "Redblink Private Ltd",
    role: "Java Developer",
    location: "Chandigarh",
    period: "Sept 2022 - Feb 2025",
    url: "https://redblink.com/",
    achievements: [
      "Managed backend development for three major projects independently.",
      "Gathered requirements from clients and discussed designs with team lead.",
      "Enhanced user engagement with optimized payment card features.",
      "Integrated third-party services like GitLab, DailyCo, and ChatGPT."
    ]
  },
  {
    company: "Relinns Technology",
    role: "Software Developer Intern",
    location: "Mohali",
    period: "March 2022 - Aug 2022",
    url: "https://relinns.com/",
    achievements: [
      "Completed training in HTML, CSS, JavaScript, and Angular.",
      "Contributed to internal projects, enhancing company initiatives.",
      "Improved project efficiency."
    ]
  },
  {
    company: "TIVO Corporation",
    role: "Software Developer Intern",
    location: "Bengaluru",
    period: "Aug 2021 - Feb 2022",
    url: "https://www.tivo.com/",
    achievements: [
      "Enhanced website features with Thymeleaf, CSS, Bootstrap.",
      "Utilized vanilla JavaScript and jQuery for frontend.",
      "Employed Spring Boot framework for backend development.",
      "Implemented improvements for better user engagement."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "SMB - Store Management Application",
    period: "March 2024 - Feb 2025",
    url: "https://smb.test.codeconductor.ai/",
    description: "Developed a store management application with multiple roles (store manager, general manager, employee, etc.).",
    highlights: [
      "Handled all backend responsibilities including API implementation and database design.",
      "Planned the design and scaling of the application with the team.",
      "Applied SOLID principles for efficient and maintainable code development."
    ]
  },
  {
    title: "5plus - Mentoring Platform",
    period: "March 2023 - Feb 2025",
    url: "https://5plus.us/",
    description: "Led backend tasks for a mentoring platform, including database design and integration of various auth/meeting providers.",
    highlights: [
      "Integrated LinkedIn login, Apple login, and DailyCo integration for meetings.",
      "Optimized connection search algorithms, significantly reducing search time.",
      "Implemented a point allocation system to enhance user engagement."
    ]
  },
  {
    title: "CODE CONDUCTOR - Code Generator",
    period: "Dec 2022 - Feb 2025",
    url: "https://app.codeconductor.ai/",
    description: "Developed a code generator with a Java backend and React frontend.",
    highlights: [
      "Integrated GitLab API for efficient variable management.",
      "Scraped data from the USA driver site using JSoup and HTML parsing.",
      "Enhanced templates and created tools for seamless web development."
    ]
  },
  {
    title: "Medialeap - Streaming Application",
    period: "Sept 2022 - Feb 2025",
    url: "https://player.medialeap.com/",
    description: "Addressed production and testing bugs while introducing new streaming features.",
    highlights: [
      "Enabled friends' account access without sharing credentials.",
      "Improved user experience by implementing card saving, searching, and sorting in Braintree.",
      "Significantly increased user engagement through UI/UX improvements."
    ]
  },
  {
    title: "QMONEY_V2 - Trading Portfolio",
    period: "Nov 2023 - Nov 2023",
    url: "https://github.com/kajal-kumari-ml/QMONEY_V2",
    description: "Visual stock portfolio analyzer to help managers make trade recommendations.",
    highlights: [
      "Used Jackson library to serialize/deserialize JSON historical trade files.",
      "Developed REST APIs calling Tiingo and Alpha Vantage for stock quotes.",
      "Improved performance using Multi-threading and stability via Exception Handling.",
      "Achieved high code coverage using JUnit framework."
    ]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["Java", "Python"]
  },
  {
    name: "Frameworks",
    skills: ["Spring Boot", "Spring Data", "JUnit", "Jackson", "Lombok", "Spring Security"]
  },
  {
    name: "Databases",
    skills: ["MongoDB", "MySQL"]
  },
  {
    name: "Tools",
    skills: ["Git", "Gradle", "Windsurf", "Cursor", "ChatGPT", "Antigravity"]
  },
  {
    name: "Concepts",
    skills: ["Design Patterns", "SOLID Principles", "Microservices", "Scalable REST APIs"]
  },
  {
    name: "Distributed Systems",
    skills: ["ElasticSearch", "Kafka"]
  }
];

export const CONTRIBUTION_POINTS = [
  "Design and build scalable, high-performance backend systems",
  "Take complete ownership of backend services, from development to production",
  "Optimize APIs and databases for speed, reliability, and scalability",
  "Reduce technical debt through clean architecture and best practices",
  "Collaborate closely with frontend, DevOps, and product teams",
  "Ensure backend systems are future-ready, secure, and easy to maintain",
  "Actively contribute to system improvements that support business growth"
];
