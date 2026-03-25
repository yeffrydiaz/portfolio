import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Linkedin, Mail, ExternalLink, Code2, Terminal, Layout, Database, ChevronRight, ArrowLeft, Sun, Moon } from 'lucide-react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const PROFILE_IMAGE_URL = "https://image2url.com/r2/default/images/1774311225354-b6e55a91-d2a5-43f5-99f9-5718c39abe5a.jpg";

const skills = [
  { name: "React.js", icon: <Layout className="w-5 h-5" /> },
  { name: "TypeScript / JavaScript", icon: <Code2 className="w-5 h-5" /> },
  { name: "Tailwind CSS", icon: <Layout className="w-5 h-5" /> },
  { name: "Node.js & Express", icon: <Terminal className="w-5 h-5" /> },
  { name: "Next.js", icon: <Globe className="w-5 h-5" /> },
  { name: "SQL & NoSQL", icon: <Database className="w-5 h-5" /> },
];

const projects = [
  {
    title: "E-Commerce Dashboard",
    description: "A high-performance full-stack admin dashboard built with React, Tailwind, and Recharts, designed for visualizing complex sales data, managing dynamic inventory, and tracking user engagement.",
    impact: "Increased client sales tracking efficiency by 40% and reduced inventory discrepancies by 15% across 3 active storefronts.",
    challenge: "Handling large datasets in real-time without freezing the UI. Overcame this by heavily optimizing the frontend using React.memo, custom hooks, and Web Workers for off-thread data processing, achieving a consistent 60fps render rate.",
    tags: ["React", "Tailwind", "Vite", "Recharts"],
    link: "https://github.com/yeffrydiaz/ecommerce-dashboard",
    liveDemo: "https://ecommerce-dashboard-theta-jade.vercel.app"
  },
  {
    title: "Task Management SaaS",
    description: "A collaborative, enterprise-grade task manager featuring real-time updates, drag-and-drop kanban boards, and granular role-based access control (RBAC).",
    impact: "Adopted by 5+ remote teams during beta, improving task completion rates by 25% and reducing daily sync meetings by an average of 3 hours per week.",
    challenge: "Ensuring seamless real-time synchronization across multiple clients with optimistic UI updates. Solved using Firebase's real-time database combined with custom CRDT (Conflict-free Replicated Data Type) logic to handle offline edits and merge conflicts.",
    tags: ["Next.js", "TypeScript", "Firebase", "Framer Motion"],
    link: "https://github.com/yeffrydiaz/task-saas",
    liveDemo: "https://task-saas-psi.vercel.app"
  },
  {
    title: "AI Content Generator",
    description: "An AI-powered writing assistant utilizing the Gemini API to help marketers generate SEO-optimized blog posts, social media copy, and ad creatives.",
    impact: "Reduced content creation turnaround time by 60% for marketing teams, generating over 1,000+ pieces of production-ready copy in the first month.",
    challenge: "Managing API rate limits and ensuring consistent tone in AI responses. Overcame this by implementing a robust Redis-backed queuing system and fine-tuning the Gemini API prompts with context-aware parameters and few-shot learning techniques.",
    tags: ["React", "Node.js", "Gemini API"],
    link: "https://github.com/yeffrydiaz/ai-content-gen",
    liveDemo: "https://ai-content-gen-git-copilot-configure-ou-397e08-yeffrys-projects.vercel.app/"
  },
  {
    title: "Real-time Chat Application",
    description: "A highly scalable messaging platform supporting end-to-end encrypted private and group chats, read receipts, typing indicators, and media sharing.",
    impact: "Successfully supported 10,000+ concurrent connections in load testing with an average message delivery latency of under 50ms.",
    challenge: "Maintaining low-latency bi-directional communication while scaling the Node.js backend. Solved by utilizing Redis Pub/Sub to scale Socket.io across multiple horizontally scaled server instances behind an Nginx load balancer.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    link: "https://github.com/yeffrydiaz/realtime-chat",
    liveDemo: null
  },
  {
    title: "Fintech Analytics Platform",
    description: "A comprehensive financial dashboard for tracking investments, analyzing portfolio performance with advanced charting, and generating automated tax reports.",
    impact: "Processed over $1M in simulated portfolio transactions with zero calculation errors, providing users with actionable insights that improved portfolio yield by 8%.",
    challenge: "Ensuring absolute data accuracy and security. Implemented strict ACID transactions with PostgreSQL and Prisma, plus AES-256 encryption at rest and TLS 1.3 in transit for sensitive user financial data.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    link: "https://github.com/yeffrydiaz/fintech-analytics",
    liveDemo: "https://fintech-analytics-one.vercel.app"
  },
  {
    title: "Headless CMS & Blog",
    description: "A custom, API-first content management system designed for developers to write, format, and publish articles using an advanced Markdown editor.",
    impact: "Achieved a perfect 100 Lighthouse score for the public-facing blog, resulting in a 35% increase in organic search traffic.",
    challenge: "Building a highly customizable Markdown editor that supports live preview and seamless image uploads. Solved by creating a decoupled architecture with React, AWS S3 for media storage, and Next.js for Static Site Generation (SSG) with incremental static regeneration (ISR).",
    tags: ["React", "Express", "AWS S3", "Markdown"],
    link: "https://github.com/yeffrydiaz/headless-cms",
    liveDemo: null
  },
  {
    title: "Crypto Portfolio Tracker",
    description: "A decentralized application (dApp) for tracking cryptocurrency portfolios, monitoring real-time market trends, and executing smart contracts.",
    impact: "Attracted 2,000+ active users within the first month of launch, processing over $500k in tracked assets.",
    challenge: "Handling high-frequency WebSocket data streams from multiple crypto exchanges. Solved by implementing a custom RxJS data pipeline to throttle, batch, and deduplicate UI updates, preventing browser memory leaks.",
    tags: ["React", "Ethers.js", "WebSockets", "Tailwind"],
    link: "https://github.com/yeffrydiaz/crypto-tracker",
    liveDemo: "https://crypto-tracker-two-snowy.vercel.app"
  },
  {
    title: "Healthcare Patient Portal",
    description: "A secure, HIPAA-compliant patient portal for booking appointments, viewing medical records, and asynchronous messaging with healthcare providers.",
    impact: "Reduced clinic call volume by 30% and decreased patient no-show rates by 18% through automated SMS reminders.",
    challenge: "Ensuring strict data privacy and security. Implemented end-to-end encryption for messages, role-based access control (RBAC), and automated audit logging using AWS Cognito, KMS, and CloudTrail.",
    tags: ["Next.js", "TypeScript", "AWS", "GraphQL"],
    link: "https://github.com/yeffrydiaz/patient-portal",
    liveDemo: "https://patient-portal-two-psi.vercel.app"
  },
  {
    title: "DevOps CLI Toolkit",
    description: "A command-line interface tool designed to automate repetitive deployment tasks, manage environment variables, and scaffold new microservices.",
    impact: "Saved the engineering team an estimated 15 hours per week in manual setup time and reduced deployment errors by 40%.",
    challenge: "Creating a cross-platform executable that works seamlessly on Windows, macOS, and Linux. Packaged the Node.js app using pkg, implemented robust error handling, and wrote comprehensive integration tests using Jest.",
    tags: ["Node.js", "Commander.js", "Docker", "Bash"],
    link: "https://github.com/yeffrydiaz/devops-cli",
    liveDemo: null
  },
  {
    title: "Real Estate Map Explorer",
    description: "An interactive property listing platform featuring map-based search, 3D virtual tours, and dynamic mortgage calculators.",
    impact: "Increased user engagement time by 45% and boosted lead generation conversion rates by 22% compared to the previous list-based UI.",
    challenge: "Rendering thousands of map markers efficiently. Utilized Mapbox GL JS with GeoJSON clustering and vector tiles to maintain 60fps performance even with dense, highly interactive data points.",
    tags: ["React", "Mapbox", "Supabase", "PostGIS"],
    link: "https://github.com/yeffrydiaz/real-estate-map",
    liveDemo: "https://real-estate-map-xi.vercel.app/"
  },
  {
    title: "Alumni Network Platform",
    description: "A full-stack networking platform for university alumni featuring user profiles, job boards, and event management, built with the MERN stack and styled with Bootstrap.",
    impact: "Connected over 5,000 alumni globally, resulting in a 30% increase in mentorship pairings and job referrals within the first year.",
    challenge: "Implementing secure authentication and complex relational queries in a NoSQL database. Solved by using JWT for stateless auth and Mongoose aggregation pipelines for efficient data retrieval.",
    tags: ["MongoDB", "Express", "React", "Node.js", "Bootstrap"],
    link: "https://github.com/yeffrydiaz/alumni-network",
    liveDemo: "https://alumni-network-rf23l3q0a-yeffrys-projects.vercel.app"
  }
];

export default function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen selection:bg-zinc-800 selection:text-white relative">
      <ScrollToTop />
      {/* Modern Background */}
      <div className="fixed inset-0 z-[-1] bg-zinc-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-[-10%] -z-10 m-auto h-[310px] w-[310px] rounded-full bg-zinc-500 opacity-20 blur-[100px]"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="font-mono font-bold text-xl tracking-tighter">
            Yeffry<span className="text-zinc-500">.com</span>
          </Link>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-6 text-sm font-medium text-zinc-400"
          >
            <a href="/#about" className="hover:text-white transition-colors">About</a>
            <Link to="/projects" className="hover:text-white transition-colors">Projects</Link>
            <a href="/#contact" className="hover:text-white transition-colors">Contact</a>
            <button 
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-white/5 transition-colors text-zinc-400 hover:text-white"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </motion.div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 text-center text-sm text-zinc-500">
        <p>© {new Date().getFullYear()} Yeffry. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
}

function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6 pt-32 pb-24">
        {/* Hero Section */}
        <section id="about" className="py-20 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex-1 space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-300">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Available for work
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1]">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-500">Yeffry.</span><br />
                React & Node.js Developer.
              </h1>
              <p className="text-lg text-zinc-400 max-w-xl leading-relaxed">
                I build fast, accessible, and beautiful web applications. 
                Passionate about creating seamless user experiences with modern web technologies.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <a href="#contact" className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-colors">
                Get in touch
              </a>
              <div className="flex items-center gap-4 px-6">
                <a href="https://www.linkedin.com/in/yeffrydiaz/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors"><Linkedin className="w-6 h-6" /></a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
            className="relative w-64 h-64 md:w-96 md:h-96 shrink-0 group"
          >
            {/* Ambient background glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-zinc-600 to-zinc-400 blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-700"></div>
            
            {/* Image container with premium border and vignette */}
            <div className="relative w-full h-full rounded-full p-2 bg-gradient-to-tr from-zinc-800/50 to-zinc-400/20 backdrop-blur-sm border border-white/10 shadow-2xl overflow-hidden">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-zinc-900">
                <img 
                  src={PROFILE_IMAGE_URL} 
                  alt="Yeffry" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
                />
                
                {/* Vignette overlay (darkens edges) */}
                <div className="absolute inset-0 rounded-full shadow-[inset_0_0_60px_rgba(0,0,0,0.8)] pointer-events-none"></div>
                
                {/* Subtle lighting overlay (adds a premium sheen) */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none mix-blend-overlay"></div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section className="py-20 border-t border-white/5">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Technical Arsenal</h2>
            <p className="text-zinc-400">Tools and technologies I use to bring ideas to life.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <motion.div 
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors"
              >
                <div className="p-3 rounded-xl bg-white/5 text-zinc-300">
                  {skill.icon}
                </div>
                <span className="font-medium text-zinc-200">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 border-t border-white/5">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Work</h2>
              <p className="text-zinc-400">Some of my recent projects and experiments.</p>
            </div>
            <Link to="/projects" className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors">
              View all projects <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {projects.slice(0, 3).map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 border-t border-white/5 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Let's build something together.</h2>
            <p className="text-lg text-zinc-400">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <a href="mailto:yeffrydiaz@gmail.com" className="inline-flex items-center gap-2 h-14 px-8 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-colors text-lg">
              <Mail className="w-5 h-5" />
              Say Hello
            </a>
          </motion.div>
        </section>
      </main>
  );
}

function ProjectsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 pt-32 pb-24 min-h-screen">
      <div className="mb-12">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">All Projects</h1>
        <p className="text-lg text-zinc-400">A complete list of my work, experiments, and contributions.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </main>
  );
}

function ProjectCard({ project, index }: { project: any, index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
      className="group flex flex-col justify-between h-full p-6 sm:p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 hover:shadow-2xl hover:shadow-white/[0.02] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
    >
      {/* Subtle background gradient that appears on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-6">
          <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 border border-white/5">
            <Code2 className="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors duration-300" />
          </div>
          <div className="flex gap-2">
            {project.liveDemo && (
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-white/5 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-white/15 hover:scale-110" title="Live Demo">
                <Globe className="w-4 h-4 text-zinc-300 hover:text-white transition-colors" />
              </a>
            )}
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-white/5 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75 hover:bg-white/15 hover:scale-110" title="Source Code">
              <ExternalLink className="w-4 h-4 text-zinc-300 hover:text-white transition-colors" />
            </a>
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-3 text-zinc-100 group-hover:text-white transition-colors">{project.title}</h3>
        <p className="text-sm text-zinc-400 leading-relaxed mb-5 group-hover:text-zinc-300 transition-colors duration-300">
          {project.description}
        </p>
        
        {isExpanded && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="text-sm text-zinc-300 leading-relaxed mb-6 border-t border-white/10 pt-5 overflow-hidden"
          >
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mb-5">
              <div className="bg-white/[0.03] p-4 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                <h4 className="text-white font-semibold mb-2 flex items-center gap-2 text-xs uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]"></span>
                  Impact
                </h4>
                <p className="text-zinc-400 text-xs leading-relaxed">{project.impact}</p>
              </div>
              <div className="bg-white/[0.03] p-4 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                <h4 className="text-white font-semibold mb-2 flex items-center gap-2 text-xs uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.5)]"></span>
                  Challenge
                </h4>
                <p className="text-zinc-400 text-xs leading-relaxed">{project.challenge}</p>
              </div>
            </div>
            {project.liveDemo && (
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium text-xs uppercase tracking-wider transition-colors">
                View Live Demo <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </motion.div>
        )}
        
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-xs font-medium text-zinc-500 hover:text-zinc-200 transition-colors mb-6 flex items-center gap-1.5 group/btn"
        >
          {isExpanded ? 'Show less' : 'Read more'} 
          <ChevronRight className={`w-3 h-3 transition-transform duration-300 group-hover/btn:translate-x-0.5 ${isExpanded ? 'rotate-90 group-hover/btn:translate-x-0 group-hover/btn:translate-y-0.5' : ''}`} />
        </button>
      </div>
      
      <div className="flex flex-wrap gap-2 mt-auto relative z-10 pt-4 border-t border-white/5">
        {project.tags.map((tag: string) => (
          <span key={tag} className="px-3 py-1.5 text-[11px] font-mono rounded-full bg-white/[0.03] text-zinc-400 border border-white/5 hover:bg-white/10 hover:text-zinc-200 transition-colors duration-300 cursor-default">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function Globe(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  )
}
