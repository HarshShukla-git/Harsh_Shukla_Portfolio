import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ShieldCheck, Cloud, Brain } from "lucide-react";

const certs = [
  { title: "Microsoft Certified: Azure Administrator Associate (AZ-104)", issuer: "Microsoft", icon: ShieldCheck },
  { title: "OCI AI Foundations Associate", issuer: "Oracle", icon: Brain },
  { title: "Oracle Cloud Infrastructure Foundations Associate", issuer: "Oracle", icon: Cloud },
  { title: "ISTQB Certified Tester – Foundation Level", issuer: "ISTQB", icon: Award },
  { title: "Certified SAFe® Practitioner", issuer: "Scaled Agile", icon: Award },
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="glow-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Industry-recognized credentials validating cloud, testing, and agile expertise.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass-card-hover p-5 flex items-start gap-3"
            >
              <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                <cert.icon size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm">{cert.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
