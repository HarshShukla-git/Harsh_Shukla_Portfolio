import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    title: "How AI is Reshaping Software Testing",
    excerpt: "Exploring how LLMs and generative AI are automating test case creation and defect prediction.",
    tag: "AI + Testing",
    date: "Feb 2026",
  },
  {
    title: "The Future of RPA: Beyond Simple Bots",
    excerpt: "Why intelligent automation powered by ML will replace traditional rule-based RPA workflows.",
    tag: "Automation",
    date: "Jan 2026",
  },
  {
    title: "QEA + AI: The Next Career Frontier",
    excerpt: "Quality Engineering Analysts who embrace AI will lead the next wave of testing innovation.",
    tag: "Career",
    date: "Dec 2025",
  },
];

const BlogSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-muted/30" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Latest <span className="glow-text">Insights</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
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
