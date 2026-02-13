import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Settings, Code, Brain, GitBranch, FlaskConical, Cloud, Gauge, Shield } from "lucide-react";

const categories = [
  {
    icon: Settings,
    title: "Automation Frameworks",
    skills: ["Selenium WebDriver", "Cypress", "Playwright", "TestNG / JUnit", "UFT / QTP", "UiPath Studio & Orchestrator"],
    color: "from-primary/20 to-accent/10",
  },
  {
    icon: Code,
    title: "Languages & Scripting",
    skills: ["Java", "JavaScript / TypeScript", "Python", "SQL", "VBScript", "Bash / Shell"],
    color: "from-accent/20 to-primary/10",
  },
  {
    icon: Brain,
    title: "AI & ML in Testing",
    skills: ["OpenAI API Integration", "AI Test Case Generation", "ML Bug Prediction", "Self-Healing Locators", "NLP-Based Validation"],
    color: "from-primary/15 to-accent/15",
  },
  {
    icon: FlaskConical,
    title: "API & Integration",
    skills: ["RestAssured", "Postman / Newman", "SoapUI", "GraphQL Testing", "Swagger / OpenAPI", "Contract Testing"],
    color: "from-accent/15 to-primary/15",
  },
  {
    icon: GitBranch,
    title: "DevOps & CI/CD",
    skills: ["Jenkins / GitHub Actions", "Azure DevOps Pipelines", "Docker & Kubernetes", "Git / Bitbucket", "JIRA / ALM", "Terraform (Basics)"],
    color: "from-primary/20 to-accent/20",
  },
  {
    icon: Cloud,
    title: "Cloud & Platforms",
    skills: ["Microsoft Azure (AZ-104)", "Oracle Cloud (OCI)", "AWS (EC2, S3, Lambda)", "BrowserStack / Sauce Labs", "Databricks (Basics)"],
    color: "from-accent/20 to-primary/20",
  },
  {
    icon: Gauge,
    title: "Performance & Security",
    skills: ["JMeter", "k6 / Grafana", "Lighthouse Audits", "OWASP ZAP (Basics)", "Load & Stress Testing"],
    color: "from-primary/10 to-accent/20",
  },
  {
    icon: Shield,
    title: "Testing Methodologies",
    skills: ["Shift-Left Testing", "BDD / TDD", "Functional & UAT", "SIT & Regression", "Smoke & Sanity", "Exploratory Testing"],
    color: "from-accent/10 to-primary/20",
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
            Technical <span className="glow-text">Arsenal</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning automation frameworks, AI-driven testing, cloud platforms, and modern DevOps — built for the demands of today's engineering landscape.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card-hover p-5 group"
            >
              <div className={`inline-flex p-2.5 rounded-lg bg-gradient-to-br ${cat.color} mb-3`}>
                <cat.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-3">{cat.title}</h3>
              <ul className="space-y-1.5">
                {cat.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-xs text-muted-foreground flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary/60" />
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
