import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Brain, Bot, TestTubes, Bug } from "lucide-react";

const projects = [
  {
    icon: Brain,
    title: "AI-Powered Test Case Generator",
    problem: "Manual test case creation is time-consuming and error-prone, especially for complex applications.",
    techStack: ["Python", "OpenAI API", "Selenium", "Flask"],
    highlights: [
      "Auto-generates Selenium scripts from natural language",
      "Reduces test creation time by 70%",
      "Supports multiple frameworks output",
    ],
    github: "#",
    demo: "#",
  },
  {
    icon: Bot,
    title: "End-to-End RPA Automation",
    problem: "Manual invoice processing causing delays, human errors, and compliance risks in finance workflows.",
    techStack: ["UiPath", "Python", "OCR", "Excel Automation"],
    highlights: [
      "Invoice processing bot with 99.2% accuracy",
      "Automated email extraction & routing",
      "Saved 120+ manual hours/month",
    ],
    github: "#",
    demo: "#",
  },
  {
    icon: TestTubes,
    title: "Selenium Hybrid Framework",
    problem: "Lack of a scalable, maintainable test framework for enterprise-grade web applications.",
    techStack: ["Java", "Selenium", "TestNG", "ExtentReports"],
    highlights: [
      "Page Object Model architecture",
      "Data-driven + keyword-driven hybrid",
      "Real-time HTML reporting dashboard",
    ],
    github: "#",
    demo: "#",
  },
  {
    icon: Bug,
    title: "ML-Based Bug Prediction Model",
    problem: "Reactive bug fixing leads to costly production failures. Need to predict defect-prone modules.",
    techStack: ["Python", "Scikit-learn", "Pandas", "Flask"],
    highlights: [
      "Predicts defect density per module",
      "85% prediction accuracy on test data",
      "Visual analytics dashboard",
    ],
    github: "#",
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
