import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Software Automation Engineer",
    company: "Tech Solutions Pvt. Ltd.",
    period: "Jan 2023 – Present",
    achievements: [
      "Built and maintained 200+ automated test cases reducing regression time by 60%",
      "Integrated AI-driven test generation saving 40 hours/month",
      "Led RPA initiative automating 5 business processes end-to-end",
      "Mentored 3 junior QA engineers on automation best practices",
    ],
  },
  {
    role: "QA Automation Intern → Associate Engineer",
    company: "Innovation Labs",
    period: "Aug 2021 – Dec 2022",
    achievements: [
      "Developed Selenium hybrid framework from scratch using POM",
      "Automated API testing pipeline with RestAssured + TestNG",
      "Reduced manual testing effort by 45% across 3 product lines",
      "Contributed to CI/CD pipeline setup with Jenkins integration",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding bg-muted/30" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Work <span className="glow-text">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px timeline-line md:-translate-x-px" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.period}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={`relative pl-16 md:pl-0 mb-12 md:w-1/2 ${
                i % 2 === 0 ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-auto top-2 w-5 h-5 rounded-full border-2 border-primary bg-background z-10"
                style={i % 2 === 0 ? { right: "-10px", left: "auto" } : { left: "-10px" }}
              >
                <div className="absolute inset-1 rounded-full bg-primary animate-glow-pulse" />
              </div>
              {/* Mobile dot */}
              <div className="absolute left-4 top-2 w-5 h-5 rounded-full border-2 border-primary bg-background z-10 md:hidden">
                <div className="absolute inset-1 rounded-full bg-primary" />
              </div>

              <div className="glass-card-hover p-6">
                <div className="flex items-center gap-2 mb-1">
                  <Briefcase size={16} className="text-primary" />
                  <span className="text-xs font-mono text-primary">{exp.period}</span>
                </div>
                <h3 className="font-bold text-foreground text-lg">{exp.role}</h3>
                <p className="text-sm text-muted-foreground mb-4">{exp.company}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((a) => (
                    <li key={a} className="text-sm text-secondary-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
