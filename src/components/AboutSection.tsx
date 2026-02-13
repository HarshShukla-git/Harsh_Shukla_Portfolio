import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Bot, Zap, Code2, TrendingUp } from "lucide-react";

const highlights = [
  { icon: Zap, title: "3.3+ Years", desc: "Production-grade automation engineering" },
  { icon: Code2, title: "Selenium & UiPath", desc: "Expert-level framework design" },
  { icon: Bot, title: "AI + Automation", desc: "Integrating OpenAI into test workflows" },
  { icon: TrendingUp, title: "Growth Mindset", desc: "Transitioning to intelligent systems" },
];

const techBadges = [
  "Selenium", "UiPath", "Java", "JavaScript", "SQL", "VBScript",
  "RestAssured", "Postman", "SoapUI", "TestNG", "JUnit", "UFT",
  "Azure DevOps", "CI/CD", "JIRA", "ALM",
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
            A passionate automation engineer building the bridge between traditional testing and AI-powered quality engineering.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card-hover p-6 flex items-start gap-4"
            >
              <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                <item.icon size={24} />
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
          className="flex flex-wrap justify-center gap-3"
        >
          {techBadges.map((badge) => (
            <span key={badge} className="tech-badge">{badge}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
