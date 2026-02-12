import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Linkedin, Github, Mail } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder - would integrate with backend
    alert("Thanks for reaching out! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get In <span className="glow-text">Touch</span>
          </h2>
          <p className="text-muted-foreground">
            Let's discuss how I can add value to your team.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all resize-none"
              />
            </div>
            <button type="submit" className="btn-primary-glow flex items-center gap-2 w-full justify-center">
              <Send size={18} /> Send Message
            </button>
          </motion.form>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-center gap-5"
          >
            {[
              { icon: Linkedin, label: "LinkedIn", href: "#", desc: "Connect professionally" },
              { icon: Github, label: "GitHub", href: "#", desc: "View my code" },
              { icon: Mail, label: "Email", href: "mailto:your@email.com", desc: "your@email.com" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="glass-card-hover p-5 flex items-center gap-4 group"
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <link.icon size={22} />
                </div>
                <div>
                  <div className="font-semibold text-foreground">{link.label}</div>
                  <div className="text-sm text-muted-foreground">{link.desc}</div>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
