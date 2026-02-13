import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Associate – SDET / QA Automation Engineer",
    company: "Cognizant Technology Solutions",
    period: "Dec 2022 – Present",
    achievements: [
      "Built and maintained scalable automation frameworks using Selenium, Cypress, and Playwright; reduced regression cycle time by 30%",
      "Designed REST API automation suites using RestAssured & Postman — functional, negative, boundary, and contract testing",
      "Performed complex SQL-based backend validations ensuring data integrity for healthcare and enterprise systems",
      "Owned end-to-end UiPath RPA testing (attended & unattended), validating workflows, queues, retry logic, and exception handling",
      "Acted as single QA owner for automation, API, and RPA testing across 10+ applications; led client calls and defect triage",
      "Integrated automation with CI/CD pipelines (Jenkins, Azure DevOps) and practiced shift-left testing across 20+ releases",
      "Explored AI-driven testing — integrating OpenAI API for test case generation and self-healing locator strategies",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Bytexus Software Solutions Pvt. Ltd.",
    period: "Jul 2022 – Nov 2022",
    achievements: [
      "Developed and tested full-stack applications using React.js, Node.js, MySQL, and REST APIs",
      "Implemented unit testing with Jest and integration testing for API endpoints",
      "Gained hands-on experience with Git workflows, code reviews, and agile sprint ceremonies",
    ],
  },
  {
    role: "Intern – Quality Engineering",
    company: "Cognizant Technology Solutions",
    period: "Jan 2022 – Jun 2022",
    achievements: [
      "Executed healthcare QA including automation support, database validation, and UiPath bot testing",
      "Assisted in building automation test scripts using Selenium WebDriver and TestNG",
      "Participated in defect lifecycle management using JIRA and ALM",
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
