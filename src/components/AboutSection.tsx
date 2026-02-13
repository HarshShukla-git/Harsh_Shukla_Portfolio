import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Bot, Zap, Code2, TrendingUp, Cloud, Shield } from "lucide-react";

const highlights = [
  { icon: Zap, title: "3.3+ Years", desc: "Production-grade automation across healthcare & enterprise systems" },
  { icon: Code2, title: "Multi-Framework Expert", desc: "Selenium, Cypress, Playwright, UiPath — end-to-end coverage" },
  { icon: Bot, title: "AI + Automation", desc: "Integrating OpenAI & ML models into test workflows & defect prediction" },
  { icon: Cloud, title: "Cloud-Native QA", desc: "Azure (AZ-104 certified), OCI, Docker, Kubernetes pipelines" },
  { icon: Shield, title: "Shift-Left Champion", desc: "CI/CD-integrated testing across 20+ enterprise releases" },
  { icon: TrendingUp, title: "Growth Mindset", desc: "Transitioning into AI-driven QE leadership & intelligent systems" },
];

const techBadges = [
  "Selenium", "Cypress", "Playwright", "UiPath", "Java", "JavaScript",
  "Python", "TypeScript", "SQL", "RestAssured", "Postman", "GraphQL",
  "TestNG", "JUnit", "UFT", "Docker", "Kubernetes", "Jenkins",
  "Azure DevOps", "GitHub Actions", "CI/CD", "JIRA", "OpenAI API",
  "JMeter", "k6", "BrowserStack", "Azure (AZ-104)", "OCI",
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="glow-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate automation engineer building the bridge between traditional testing and AI-powered quality engineering — with expertise across cloud-native, DevOps, and modern test architectures.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card-hover p-5 flex items-start gap-4"
            >
              <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                <item.icon size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-2.5"
        >
          {techBadges.map((badge) => (
            <span key={badge} className="tech-badge text-xs">{badge}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
