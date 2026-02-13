import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Brain, Bot, TestTubes, Bug } from "lucide-react";

const projects = [
  {
    icon: TestTubes,
    title: "Enterprise Automation & RPA Test Framework",
    problem: "Need for reusable, scalable test scenarios integrating UI, API, database validation with CI/CD readiness.",
    techStack: ["Selenium", "TestNG", "UiPath", "CI/CD"],
    highlights: [
      "Built reusable automation & RPA test scenarios",
      "Integrated UI, API, and database validation",
      "CI/CD-ready logging and reporting",
    ],
    github: "https://github.com/HarshShukla-git",
    demo: "#",
  },
  {
    icon: Bot,
    title: "API Automation & Integration Testing Framework",
    problem: "Manual API testing is slow and error-prone for complex enterprise integrations.",
    techStack: ["RestAssured", "Java", "SQL", "CI/CD"],
    highlights: [
      "Data-driven REST API validation",
      "SQL backend checks for data integrity",
      "CI/CD-triggered automated execution",
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
            Real-world solutions where automation meets intelligence.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
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

              {/* Architecture placeholder */}
              <div className="rounded-lg bg-muted/50 border border-border p-4 mb-6 text-center">
                <p className="text-xs text-muted-foreground font-mono">
                  📐 Architecture Diagram
                </p>
              </div>

              <div className="flex gap-3">
                <a
                  href={project.github}
                  className="btn-outline-glow !py-2 !px-4 text-sm flex items-center gap-2"
                >
                  <Github size={16} /> GitHub
                </a>
                <a
                  href={project.demo}
                  className="btn-primary-glow !py-2 !px-4 text-sm flex items-center gap-2"
                >
                  <ExternalLink size={16} /> Live Demo
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
