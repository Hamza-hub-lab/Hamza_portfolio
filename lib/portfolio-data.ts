export interface PortfolioItem {
  id: string
  title: string
  category: "education" | "experience" | "academic-project" | "personal-project" | "certificate" | "club"
  image?: string
  linkText: string
  href: string
}

export interface SkillEntry {
  name: string
  projects: { label: string; href: string }[]
}

export interface SkillCategory {
  title: string
  skills: SkillEntry[]
}

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#academic-projects" },
  { label: "Personal", href: "#personal-projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Clubs", href: "#clubs" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
]

// ─── EDUCATION ──────────────────────────────────────────────
export const EDUCATION_ITEMS: PortfolioItem[] = [
  {
    id: "edu-1",
    title: "Mechanical Engineering, Aeronautics Option",
    category: "education",
    image: "/education/images/mechanical-aeronautics.jpg",
    linkText: "View Details",
    href: "/education/mechanical-aeronautics.html",
  },
  {
    id: "edu-2",
    title: "Mechanical Engineering",
    category: "education",
    image: "/education/images/mechanical-engineering.jpg",
    linkText: "View Details",
    href: "/education/mechanical-engineering.html",
  },
  {
    id: "edu-3",
    title: "Preparatory Classes, Mathematics and Physics Option",
    category: "education",
    image: "/education/images/preparatory-classes.jpg",
    linkText: "View Details",
    href: "/education/preparatory-classes.html",
  },
  {
    id: "edu-4",
    title: "Baccalaureate in Mathematical Sciences (French Option)",
    category: "education",
    image: "/education/images/baccalaureate.jpg",
    linkText: "View Details",
    href: "/education/baccalaureate.html",
  },
]

// ─── EXPERIENCE ─────────────────────────────────────────────
export const EXPERIENCE_ITEMS: PortfolioItem[] = [
  {
    id: "exp-1",
    title: "Implementation of the Manufacturing Process for Cabin Parts Using 3D Printing",
    category: "experience",
    image: "/experience/images/ram-3d-printing.jpg",
    linkText: "View Experience Details",
    href: "/experience/ram-3d-printing.html",
  },
  {
    id: "exp-2",
    title: "Analysis and Optimization of the Hydraulic Performance of the LC50-350 N1 Centrifugal Pump",
    category: "experience",
    image: "/experience/images/ocp-pump-optimization.jpg",
    linkText: "View Experience Details",
    href: "/experience/ocp-pump-optimization.html",
  },
  {
    id: "exp-3",
    title: "Identification and Resolution of Critical Problems Associated with Overpressure Valves in the Boeing 737NG Pressurization System",
    category: "experience",
    image: "/experience/images/ram-pressurization.jpg",
    linkText: "View Experience Details",
    href: "/experience/ram-pressurization.html",
  },
]

// ─── ACADEMIC PROJECTS ──────────────────────────────────────
export const ACADEMIC_PROJECT_ITEMS: PortfolioItem[] = [
  {
    id: "proj-13",
    title: "Integrated Development of a Fixed-Wing Surveillance Drone: Sizing, Multi-Tool Simulation and Experimental Validation",
    category: "academic-project",
    image: "/projects/images/surveillance-drone.jpg",
    linkText: "View Project Details",
    href: "/projects/surveillance-drone.html",
  },
  {
    id: "proj-12",
    title: "Study of Optimal Meshing Parameters for CFD Simulation Close to Experimental Results",
    category: "academic-project",
    image: "/projects/images/optimal-meshing.jpg",
    linkText: "View Project Details",
    href: "/projects/optimal-meshing.html",
  },
  {
    id: "proj-11",
    title: "CFD Simulation of an Aircraft Wing with Fluid-Structure Interaction",
    category: "academic-project",
    image: "/projects/images/cfd-wing-fsi.jpg",
    linkText: "View Project Details",
    href: "/projects/cfd-wing-fsi.html",
  },
  {
    id: "proj-10",
    title: "Trajectory Control of a Quadcopter Drone Using Linear Quadratic Regulator (LQR)",
    category: "academic-project",
    image: "/projects/images/quadcopter-lqr.jpg",
    linkText: "View Project Details",
    href: "/projects/quadcopter-lqr.html",
  },
  {
    id: "proj-9",
    title: "Geometric Modeling and Dynamic Simulation of an RRP Manipulator",
    category: "academic-project",
    image: "/projects/images/rrp-manipulator.jpg",
    linkText: "View Project Details",
    href: "/projects/rrp-manipulator.html",
  },
  {
    id: "proj-8",
    title: "Design and Sizing of a VAWT Wind Turbine",
    category: "academic-project",
    image: "/projects/images/vawt-turbine.jpg",
    linkText: "View Project Details",
    href: "/projects/vawt-turbine.html",
  },
  {
    id: "proj-7",
    title: "Study and Manufacturing of a Helicopter's Main Transmission System",
    category: "academic-project",
    image: "/projects/images/helicopter-transmission.jpg",
    linkText: "View Project Details",
    href: "/projects/helicopter-transmission.html",
  },
  {
    id: "proj-6",
    title: "Study and Synthesis of Bar Mechanisms for Furniture Door Actuation",
    category: "academic-project",
    image: "/projects/images/bar-mechanisms.jpg",
    linkText: "View Project Details",
    href: "/projects/bar-mechanisms.html",
  },
  {
    id: "proj-5",
    title: "Simulation of Airflow Around a Wing Profile",
    category: "academic-project",
    image: "/projects/images/wing-airflow.jpg",
    linkText: "View Project Details",
    href: "/projects/wing-airflow.html",
  },
  {
    id: "proj-4",
    title: "Design and Dimensioning of a Hydraulic Crane for Aircraft Maintenance",
    category: "academic-project",
    image: "/projects/images/hydraulic-crane.jpg",
    linkText: "View Project Details",
    href: "/projects/hydraulic-crane.html",
  },
  {
    id: "proj-3",
    title: "Material Selection for a B-787-8 Dreamliner Aircraft Wing",
    category: "academic-project",
    image: "/projects/images/b787-wing.jpg",
    linkText: "View Project Details",
    href: "/projects/b787-wing.html",
  },
  {
    id: "proj-2",
    title: "Sizing and Calculation of a Load-Bearing Structure and Ammonia Transport Network",
    category: "academic-project",
    image: "/projects/images/load-bearing-structure.jpg",
    linkText: "View Project Details",
    href: "/projects/load-bearing-structure.html",
  },
  {
    id: "proj-1",
    title: "Design and Dimensional Analysis of an Electric Chain Hoist",
    category: "academic-project",
    image: "/projects/images/electric-hoist.jpg",
    linkText: "View Project Details",
    href: "/projects/electric-hoist.html",
  },
]

// ─── PERSONAL PROJECTS ──────────────────────────────────────
export const PERSONAL_PROJECT_ITEMS: PortfolioItem[] = [
  {
    id: "personal-1",
    title: "Advanced CFD Simulation of Internal Flow Dynamics in the Raptor 2 Combustion Chamber and Nozzle",
    category: "personal-project",
    image: "/Personal/images/raptor2-cfd.jpg",
    linkText: "View Project Details",
    href: "/Personal/raptor2-cfd.html",
  },
]

// ─── CERTIFICATES (empty for now) ───────────────────────────
export const CERTIFICATE_ITEMS: PortfolioItem[] = []

// ─── CLUBS ──────────────────────────────────────────────────
export const CLUB_ITEMS: PortfolioItem[] = [
  {
    id: "club-1",
    title: "ASTROEMI: Astronomical and Astronautical Club of Mohammadia School of Engineers",
    category: "club",
    image: "/clubs/images/astroemi.jpg",
    linkText: "View Club Details",
    href: "/clubs/astroemi.html",
  },
  {
    id: "club-2",
    title: "EMIAEROSPACE: Aerospace Club of Mohammadia School of Engineers",
    category: "club",
    image: "/clubs/images/emiaerospace.jpg",
    linkText: "View Club Details",
    href: "/clubs/emiaerospace.html",
  },
]

// ─── SKILLS ─────────────────────────────────────────────────
export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Software Skills",
    skills: [
      {
        name: "CATIA V5",
        projects: [
          { label: "Surveillance Drone", href: "/projects/surveillance-drone.html" },
          { label: "Helicopter Transmission", href: "/projects/helicopter-transmission.html" },
        ],
      },
      {
        name: "SolidWorks",
        projects: [
          { label: "Hydraulic Crane", href: "/projects/hydraulic-crane.html" },
          { label: "VAWT Wind Turbine", href: "/projects/vawt-turbine.html" },
        ],
      },
      {
        name: "ANSYS Fluent",
        projects: [
          { label: "CFD Wing FSI", href: "/projects/cfd-wing-fsi.html" },
          { label: "Wing Airflow", href: "/projects/wing-airflow.html" },
          { label: "Raptor 2 CFD", href: "/Personal/raptor2-cfd.html" },
        ],
      },
      {
        name: "ANSYS Mechanical",
        projects: [
          { label: "CFD Wing FSI", href: "/projects/cfd-wing-fsi.html" },
          { label: "Load-Bearing Structure", href: "/projects/load-bearing-structure.html" },
        ],
      },
      {
        name: "MATLAB/Simulink",
        projects: [
          { label: "Quadcopter LQR Control", href: "/projects/quadcopter-lqr.html" },
          { label: "RRP Manipulator", href: "/projects/rrp-manipulator.html" },
        ],
      },
    ],
  },
  {
    title: "Theory Skills",
    skills: [
      {
        name: "Fluid Dynamics (CFD)",
        projects: [
          { label: "Optimal Meshing", href: "/projects/optimal-meshing.html" },
          { label: "CFD Wing FSI", href: "/projects/cfd-wing-fsi.html" },
          { label: "Raptor 2 CFD", href: "/Personal/raptor2-cfd.html" },
        ],
      },
      {
        name: "Structural Analysis (FEA)",
        projects: [
          { label: "B-787-8 Wing", href: "/projects/b787-wing.html" },
          { label: "Load-Bearing Structure", href: "/projects/load-bearing-structure.html" },
        ],
      },
      {
        name: "Control Systems",
        projects: [{ label: "Quadcopter LQR Control", href: "/projects/quadcopter-lqr.html" }],
      },
      {
        name: "Kinematics & Dynamics",
        projects: [
          { label: "RRP Manipulator", href: "/projects/rrp-manipulator.html" },
          { label: "Bar Mechanisms", href: "/projects/bar-mechanisms.html" },
        ],
      },
      {
        name: "Material Selection",
        projects: [{ label: "B-787-8 Wing", href: "/projects/b787-wing.html" }],
      },
      {
        name: "Aerodynamics",
        projects: [
          { label: "Surveillance Drone", href: "/projects/surveillance-drone.html" },
          { label: "Wing Airflow", href: "/projects/wing-airflow.html" },
        ],
      },
    ],
  },
  {
    title: "Programming Skills",
    skills: [
      {
        name: "Python",
        projects: [
          { label: "Quadcopter LQR Control", href: "/projects/quadcopter-lqr.html" },
          { label: "RRP Manipulator", href: "/projects/rrp-manipulator.html" },
        ],
      },
      {
        name: "MATLAB",
        projects: [
          { label: "Quadcopter LQR Control", href: "/projects/quadcopter-lqr.html" },
          { label: "Surveillance Drone", href: "/projects/surveillance-drone.html" },
        ],
      },
      {
        name: "C/C++",
        projects: [],
      },
    ],
  },
]

export const ABOUT_TEXT =
  "Mechanical engineering student with a strong interest in aerospace systems and industrial applications. I am particularly passionate about mechanical design, manufacturing processes, and engineering simulation applied to aeronautics. Through academic and personal projects, I have developed solid skills in CAD modeling, technical analysis, and problem-solving. I enjoy working on concrete engineering challenges, from concept to implementation, in an industrial environment. Currently seeking an aerospace-oriented apprenticeship for the 2026/2027 academic year."
