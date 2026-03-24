import { useState } from 'react';
import { motion } from 'motion/react';
import { Linkedin, Mail, ExternalLink, Code2, Terminal, Layout, Database, ChevronRight, ArrowLeft } from 'lucide-react';
import { Routes, Route, Link } from 'react-router-dom';

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
    description: "A full-stack admin dashboard built with React, Tailwind, and Recharts for visualizing sales data and managing inventory.",
    impact: "Increased client sales tracking efficiency by 40%.",
    challenge: "Handling large datasets in real-time without freezing the UI. Overcame this by heavily optimizing the frontend using React.memo, custom hooks, and web workers for data processing.",
    tags: ["React", "Tailwind", "Vite", "Recharts"],
    link: "https://github.com/yeffrydiaz/ecommerce-dashboard",
    liveDemo: "https://ecommerce-dashboard-demo.vercel.app"
  },
  {
    title: "Task Management SaaS",
    description: "A collaborative task manager featuring real-time updates, drag-and-drop kanban boards, and role-based access control.",
    impact: "Adopted by 5+ remote teams during beta, improving task completion rates by 25%.",
    challenge: "Ensuring seamless real-time synchronization across multiple clients with optimistic UI updates. Solved using Firebase's real-time database and custom conflict resolution logic.",
    tags: ["Next.js", "TypeScript", "Firebase", "Framer Motion"],
    link: "https://github.com/yeffrydiaz/task-saas",
    liveDemo: "https://task-saas-demo.vercel.app"
  },
  {
    title: "AI Content Generator",
    description: "An AI-powered writing assistant utilizing the Gemini API to help marketers generate blog posts and social media copy.",
    impact: "Reduced content creation time by 60% for marketing teams.",
    challenge: "Managing API rate limits and ensuring consistent tone in AI responses. Overcame this by implementing a robust queuing system and fine-tuning the Gemini API prompts with context-aware parameters.",
    tags: ["React", "Node.js", "Gemini API"],
    link: "https://github.com/yeffrydiaz/ai-content-gen",
    liveDemo: "https://ai-content-gen-demo.vercel.app"
  },
  {
    title: "Real-time Chat Application",
    description: "A scalable messaging platform supporting private and group chats, read receipts, and media sharing.",
    impact: "Supported 10,000+ concurrent connections in load testing.",
    challenge: "Maintaining low-latency bi-directional communication while scaling the Node.js backend. Solved by utilizing Redis pub/sub to scale Socket.io across multiple server instances.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    link: "https://github.com/yeffrydiaz/realtime-chat",
    liveDemo: null
  },
  {
    title: "Fintech Analytics Platform",
    description: "A financial dashboard for tracking investments, analyzing portfolio performance, and generating tax reports.",
    impact: "Processed over $1M in simulated portfolio transactions with zero calculation errors.",
    challenge: "Ensuring absolute data accuracy and security. Implemented strict ACID transactions with PostgreSQL and Prisma, plus AES-256 encryption for sensitive user data.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    link: "https://github.com/yeffrydiaz/fintech-analytics",
    liveDemo: "https://fintech-analytics-demo.vercel.app"
  },
  {
    title: "Headless CMS & Blog",
    description: "A custom content management system designed for developers to write, format, and publish articles using Markdown.",
    impact: "Achieved a perfect 100 Lighthouse score for the public-facing blog.",
    challenge: "Building a highly customizable Markdown editor that supports live preview and image uploads. Solved by creating a decoupled architecture with React, AWS S3 for media, and Next.js for static site generation.",
    tags: ["React", "Express", "AWS S3", "Markdown"],
    link: "https://github.com/yeffrydiaz/headless-cms",
    liveDemo: null
  },
  {
    title: "Crypto Portfolio Tracker",
    description: "A decentralized application (dApp) for tracking cryptocurrency portfolios and monitoring real-time market trends.",
    impact: "Attracted 2,000+ active users within the first month of launch.",
    challenge: "Handling high-frequency WebSocket data streams from multiple crypto exchanges. Solved by implementing a custom RxJS data pipeline to throttle and batch UI updates.",
    tags: ["React", "Ethers.js", "WebSockets", "Tailwind"],
    link: "https://github.com/yeffrydiaz/crypto-tracker",
    liveDemo: "https://crypto-tracker-demo.vercel.app"
  },
  {
    title: "Healthcare Patient Portal",
    description: "A secure, HIPAA-compliant patient portal for booking appointments, viewing medical records, and messaging doctors.",
    impact: "Reduced clinic call volume by 30% by enabling self-service appointment scheduling.",
    challenge: "Ensuring strict data privacy and security. Implemented end-to-end encryption for messages and role-based access control (RBAC) using AWS Cognito and KMS.",
    tags: ["Next.js", "TypeScript", "AWS", "GraphQL"],
    link: "https://github.com/yeffrydiaz/patient-portal",
    liveDemo: null
  },
  {
    title: "DevOps CLI Toolkit",
    description: "A command-line interface tool designed to automate repetitive deployment tasks and scaffold new microservices.",
    impact: "Saved the engineering team an estimated 15 hours per week in manual setup time.",
    challenge: "Creating a cross-platform executable that works seamlessly on Windows, macOS, and Linux. Packaged the Node.js app using pkg and wrote comprehensive integration tests.",
    tags: ["Node.js", "Commander.js", "Docker", "Bash"],
    link: "https://github.com/yeffrydiaz/devops-cli",
    liveDemo: null
  },
  {
    title: "Real Estate Map Explorer",
    description: "An interactive property listing platform featuring map-based search, virtual tours, and mortgage calculators.",
    impact: "Increased user engagement time by 45% compared to the previous list-based UI.",
    challenge: "Rendering thousands of map markers efficiently. Utilized Mapbox GL JS with GeoJSON clustering to maintain 60fps performance even with dense data points.",
    tags: ["React", "Mapbox", "Supabase", "PostGIS"],
    link: "https://github.com/yeffrydiaz/real-estate-map",
    liveDemo: "https://real-estate-map-demo.vercel.app"
  }
];

export default function App() {
  return (
    <div className="min-h-screen selection:bg-zinc-800 selection:text-white relative">
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
            className="flex gap-6 text-sm font-medium text-zinc-400"
          >
            <a href="/#about" className="hover:text-white transition-colors">About</a>
            <Link to="/projects" className="hover:text-white transition-colors">Projects</Link>
            <a href="/#contact" className="hover:text-white transition-colors">Contact</a>
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
            className="relative w-64 h-64 md:w-96 md:h-96 shrink-0"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-zinc-800 to-zinc-600 blur-3xl opacity-20"></div>
            <img 
              src={PROFILE_IMAGE_URL} 
              alt="Yeffry" 
              referrerPolicy="no-referrer"
              className="relative w-full h-full object-cover rounded-full border border-white/10 shadow-2xl"
            />
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
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
      transition={{ delay: index * 0.1 }}
      className="group flex flex-col justify-between p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all"
    >
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
            <Code2 className="w-6 h-6 text-zinc-400" />
          </div>
          <div className="flex gap-2">
            {project.liveDemo && (
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/10" title="Live Demo">
                <Globe className="w-4 h-4 text-white" />
              </a>
            )}
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/10" title="Source Code">
              <ExternalLink className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>
        <h3 className="text-xl font-bold mb-3">{project.title}</h3>
        <p className="text-sm text-zinc-400 leading-relaxed mb-4">
          {project.description}
        </p>
        
        {isExpanded && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="text-sm text-zinc-300 leading-relaxed mb-6 border-t border-white/10 pt-4 overflow-hidden"
          >
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 mb-4">
              <div className="bg-white/[0.02] p-3 rounded-xl border border-white/5">
                <h4 className="text-white font-semibold mb-1 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                  Impact
                </h4>
                <p className="text-zinc-400 text-xs">{project.impact}</p>
              </div>
              <div className="bg-white/[0.02] p-3 rounded-xl border border-white/5">
                <h4 className="text-white font-semibold mb-1 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                  Challenge
                </h4>
                <p className="text-zinc-400 text-xs">{project.challenge}</p>
              </div>
            </div>
            {project.liveDemo && (
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-green-400 hover:text-green-300 font-medium">
                View Live Demo <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </motion.div>
        )}
        
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-xs font-medium text-zinc-500 hover:text-zinc-300 transition-colors mb-6 flex items-center gap-1"
        >
          {isExpanded ? 'Show less' : 'Read more'} <ChevronRight className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
        </button>
      </div>
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map((tag: string) => (
          <span key={tag} className="px-3 py-1 text-xs font-mono rounded-full bg-white/5 text-zinc-300 border border-white/5">
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
