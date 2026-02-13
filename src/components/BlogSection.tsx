import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    title: "How AI is Reshaping Software Testing in 2026",
    excerpt: "From GPT-powered test generation to self-healing locators — how LLMs are automating the entire QA lifecycle.",
    tag: "AI + Testing",
    date: "Feb 2026",
  },
  {
    title: "Playwright vs Cypress vs Selenium: The 2026 Verdict",
    excerpt: "A hands-on comparison of the top three automation frameworks — performance, DX, and enterprise readiness.",
    tag: "Frameworks",
    date: "Jan 2026",
  },
  {
    title: "Shift-Left with AI: Predicting Bugs Before They Ship",
    excerpt: "Using ML models trained on code churn and complexity metrics to flag high-risk commits in CI pipelines.",
    tag: "ML + DevOps",
    date: "Jan 2026",
  },
  {
    title: "Cloud-Native Testing: Docker, K8s & Parallel Grids",
    excerpt: "How containerized test execution on Kubernetes slashes regression time and scales with your team.",
    tag: "Cloud & DevOps",
    date: "Dec 2025",
  },
  {
    title: "The QEA Career Path: From Manual to AI Engineer",
    excerpt: "A roadmap for QA engineers looking to transition into AI-driven quality engineering leadership roles.",
    tag: "Career",
    date: "Nov 2025",
  },
  {
    title: "Contract Testing & API-First Quality Assurance",
    excerpt: "Why contract testing with Pact and OpenAPI specs is replacing traditional integration testing.",
    tag: "API Testing",
    date: "Oct 2025",
  },
];

const BlogSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-muted/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Latest <span className="glow-text">Insights</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Thoughts on automation, AI in testing, and the future of quality engineering.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card-hover p-6 flex flex-col group cursor-pointer"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="tech-badge text-xs">{post.tag}</span>
                <span className="text-xs text-muted-foreground">{post.date}</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground flex-1">{post.excerpt}</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-primary font-medium">
                Read More <ArrowUpRight size={14} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
