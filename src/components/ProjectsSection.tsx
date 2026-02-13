import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Brain, Bot, TestTubes, Bug } from "lucide-react";

const projects = [
  {
    icon: Brain,
    title: "AI-Powered Test Case Generator",
    problem: "Manual test case creation is time-consuming and often misses edge cases in complex business logic.",
    techStack: ["OpenAI API", "Python", "React", "FastAPI"],
    highlights: [
      "Integrated GPT models to auto-generate functional & edge-case test scenarios from user stories",
      "Reduced test design effort by 60% across sprint cycles",
      "Built prompt engineering pipeline for domain-specific test generation",
      "Dashboard for reviewing, editing, and exporting test cases to JIRA",
    ],
    github: "https://github.com/HarshShukla-git",
    demo: "#",
  },
  {
    icon: TestTubes,
    title: "Enterprise Hybrid Automation Framework",
    problem: "Fragmented automation across UI, API, and database layers causing slow regression cycles.",
    techStack: ["Selenium", "TestNG", "RestAssured", "Jenkins", "Docker"],
    highlights: [
      "Built POM + Data-Driven hybrid framework with reusable component library",
      "Integrated UI (Selenium), API (RestAssured), and DB (SQL) validations in single pipeline",
      "Reduced regression cycle time by 30% with parallel execution on Docker grid",
      "CI/CD-triggered execution with Allure reporting and Slack notifications",
    ],
    github: "https://github.com/HarshShukla-git",
    demo: "#",
  },
  {
    icon: Bot,
    title: "RPA Invoice Processing & Testing Bot",
    problem: "Manual invoice processing across legacy systems causing delays and high error rates.",
    techStack: ["UiPath Studio", "Orchestrator", "SQL", "Azure"],
    highlights: [
      "Automated end-to-end invoice extraction, validation, and ERP entry using UiPath",
      "Tested attended & unattended bots with queue management and retry logic",
      "Reduced processing time by 70% and manual errors by 90%",
      "Integrated exception handling with automated email escalations",
    ],
    github: "https://github.com/HarshShukla-git",
    demo: "#",
  },
  {
    icon: Bug,
    title: "ML-Based Bug Prediction Model",
    problem: "Reactive bug detection in late SDLC phases increases cost-of-fix exponentially.",
    techStack: ["Python", "scikit-learn", "Pandas", "Flask", "Git"],
    highlights: [
      "Trained ML model on historical defect data to predict high-risk modules before testing",
      "Achieved 82% accuracy using Random Forest on code churn & complexity features",
      "Integrated with CI pipeline to flag risky commits pre-merge",
      "Reduced critical production defects by 35% in pilot project",
    ],
    github: "https://github.com/HarshShukla-git",
    demo: "#",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="glow-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Real-world solutions where automation meets AI and intelligent engineering.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card-hover p-6 sm:p-8 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                  <project.icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-foreground">{project.title}</h3>
              </div>

              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                <span className="text-primary font-mono text-xs">PROBLEM:</span>{" "}
                {project.problem}
              </p>

              <ul className="space-y-2 mb-6 flex-1">
                {project.highlights.map((h) => (
                  <li key={h} className="text-sm text-secondary-foreground flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech) => (
                  <span key={tech} className="tech-badge text-xs">{tech}</span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-glow !py-2 !px-4 text-sm flex items-center gap-2"
                >
                  <Github size={16} /> GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
