import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Settings, Code, Brain, GitBranch, FlaskConical } from "lucide-react";

const categories = [
  {
    icon: Settings,
    title: "Automation",
    skills: ["Selenium WebDriver", "TestNG / JUnit", "UFT", "UiPath Studio & Orchestrator"],
    color: "from-primary/20 to-accent/10",
  },
  {
    icon: Code,
    title: "Languages",
    skills: ["Java", "JavaScript", "SQL", "VBScript"],
    color: "from-accent/20 to-primary/10",
  },
  {
    icon: Brain,
    title: "API & RPA",
    skills: ["RestAssured", "Postman", "SoapUI", "UiPath RPA"],
    color: "from-primary/15 to-accent/15",
  },
  {
    icon: GitBranch,
    title: "DevOps & Tools",
    skills: ["CI/CD Pipelines", "Azure DevOps", "JIRA", "ALM"],
    color: "from-accent/15 to-primary/15",
  },
  {
    icon: FlaskConical,
    title: "Testing Types",
    skills: ["Functional & UAT", "SIT & Regression", "Smoke Testing", "API Testing"],
    color: "from-primary/20 to-accent/20",
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-muted/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Technical <span className="glow-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A versatile toolkit spanning automation, AI, and modern DevOps practices.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card-hover p-6 group"
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${cat.color} mb-4`}>
                <cat.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-4">{cat.title}</h3>
              <ul className="space-y-2">
                {cat.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm text-muted-foreground flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
