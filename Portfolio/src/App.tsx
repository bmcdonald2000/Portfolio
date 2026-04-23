import { motion } from "framer-motion";
import { ArrowUpRight, Award, BadgeCheck, BriefcaseBusiness } from "lucide-react";

export default function PortfolioSite() {
  const projects = [
    {
      title: "LexFlow CLM",
      type: "Legal Ops Product",
      description:
        "A contract lifecycle prototype built to demonstrate structured intake, contract visibility, and clean workflow design across legal operations.",
      stack: ["Js.React", "TypeScript", "Supabase"],
      link: "https://lexflow-clm.onrender.com",
    },
    {
      title: "Eyes In The Sky",
      type: "Weather App",
      description:
        "A dynamic weather app concept that utalises API's for live weather updates using user location or a custom search.",
      stack: ["API's", "Js.React"],
      link: "https://eyes-in-the-sky.onrender.com",
    },
  ];

  const certificates = [
    "Agile Project Management Foundations",
    "Level 5 Diploma in Full Stack Development",
    "Avokka Contract Automation",
    "Various Mircosoft Enterpise Badges in AI, Development & Process Design/Architecture",
    "4 Nominations for a G Award for self development",
  ];

  const badges = [
    "AI Workflow Design",
    "JS",
    "React",
    "TypeScript",
    "Python",
    "MySQL",
    "API's",
    "Legal Drafting",
    "Legal Review",
    "Process Improvement",
    "Process Automation",
    "Problem Solving",
    "Governance",
    "Client Focused Delievry",
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_20%),radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.16),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.12),transparent_22%)]" />

      <section className="relative border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-300/20 bg-yellow-300/10 px-4 py-2 text-sm font-medium text-yellow-200 backdrop-blur">
              <BriefcaseBusiness className="h-4 w-4" />
              Legal Ops • Innovation • Product Thinking
            </div>

            <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl xl:text-7xl">
              Brieanna McDonald's Porfolio Website
            </h1>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-2xl bg-yellow-300 px-5 py-3 font-semibold text-slate-950 shadow-[0_10px_40px_rgba(250,204,21,0.22)] transition hover:-translate-y-0.5"
              >
                View Projects
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#credentials"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                View Credentials
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="relative z-10 grid gap-4"
          >
            
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-[24px] border border-white/10 bg-white/[0.05] p-5 shadow-xl shadow-black/20 backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Focus</p>
                <p className="mt-3 text-lg font-semibold text-white">Operational Clarity</p>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-white/[0.05] p-5 shadow-xl shadow-black/20 backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Strength</p>
                <p className="mt-3 text-lg font-semibold text-white">Systems Thinking</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="projects" className="relative mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Featured Work</p>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-400 md:text-violet-200 text-center md:text-left">
  Below are my latest projects with older projects available on my{" "}
  <a
    href="https://github.com/bmcdonald2000"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1 underline underline-offset-4 decoration-violet-400 hover:text-violet-300"
  >
    Github
    <ArrowUpRight className="h-4 w-4" />
  </a>
</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.05] p-6 shadow-2xl shadow-black/25 backdrop-blur-xl"
            >
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 " />
              <div className="relative z-10 flex h-full flex-col">
                <div className="mb-5 inline-flex w-fit rounded-full border border-blue-300/15 bg-blue-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-blue-200">
                  {project.type}
                </div>
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-slate-300">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-yellow-200 transition hover:text-yellow-100"
                >
                  See Project
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="credentials" className="relative mx-auto max-w-7xl px-6 py-8 md:px-10 md:py-12">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[30px] border border-white/10 bg-white/[0.05] p-6 shadow-2xl shadow-black/25 backdrop-blur-xl md:p-8"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-emerald-400/10 p-3 text-emerald-300">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Certificates</p>
                <h2 className="mt-1 text-3xl font-bold text-white">Credentials and training</h2>
              </div>
            </div>

            <div className="mt-8 grid gap-3">
              {certificates.map((cert) => (
                <div
                  key={cert}
                  className="rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-4 text-sm text-slate-200 transition hover:border-yellow-300/20 hover:bg-slate-900/80"
                >
                  {cert}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="rounded-[30px] border border-white/10 bg-white/[0.05] p-6 shadow-2xl shadow-black/25 backdrop-blur-xl md:p-8"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-yellow-400/10 p-3 text-yellow-300">
                <BadgeCheck className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Skills</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-2xl border border-yellow-300/20 bg-yellow-300/10 px-4 py-3 text-sm font-semibold text-yellow-100"
                >
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
