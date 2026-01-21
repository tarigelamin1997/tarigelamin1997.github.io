import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-slate-900 text-white selection:bg-blue-500 selection:text-white">
      
      {/* --- HERO SECTION --- */}
      <div className="flex flex-col items-center justify-center min-h-[80vh] w-full max-w-5xl px-6 text-center">
        
        {/* Profile Image Circle */}
        <div className="relative mb-8 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-teal-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative w-32 h-32 rounded-full bg-slate-800 flex items-center justify-center border-2 border-slate-700 overflow-hidden">
             {/* Placeholder for your actual photo later */}
             <span className="text-4xl">👨‍💻</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-300 to-blue-500 mb-6">
          Tarig Elamin
        </h1>
        <h2 className="text-xl md:text-2xl font-light text-slate-300 mb-8 tracking-wide">
          CLOUD DATA ARCHITECT & ENGINEER
        </h2>
        <p className="max-w-2xl mx-auto text-slate-400 text-lg leading-relaxed mb-10">
          I build resilient, scalable data platforms on AWS. Specializing in high-throughput ETL pipelines, infrastructure as code (Terraform), and real-time analytics.
        </p>
        
        <div className="flex gap-4">
          <a href="https://github.com/tarigelamin1997" target="_blank" className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition font-semibold shadow-lg shadow-blue-500/20">
            GitHub
          </a>
          <a href="mailto:admin@tarigelamin.com" className="px-8 py-3 rounded-full border border-slate-600 hover:border-slate-400 hover:bg-slate-800 transition font-semibold">
            Contact
          </a>
        </div>
      </div>

      {/* --- PROJECTS SECTION --- */}
      <div className="w-full max-w-6xl px-6 pb-24">
        <h3 className="text-2xl font-bold text-slate-200 mb-10 border-l-4 border-blue-500 pl-4">
          Featured Engineering Projects
        </h3>

        {/* Project Card 1: Tadawul */}
        <div className="group relative bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden hover:border-slate-500 transition-colors">
          <div className="grid md:grid-cols-2 gap-0">
            
            {/* Left: Project Info */}
            <div className="p-8 flex flex-col justify-center">
              <div className="text-teal-400 font-mono text-sm mb-2">PROJECT 01</div>
              <h4 className="text-3xl font-bold text-white mb-4">Tadawul Market Dashboard</h4>
              <p className="text-slate-400 mb-6 leading-relaxed">
                An end-to-end data engineering pipeline for the Saudi Stock Exchange. 
                Ingests real-time market data, processes it via AWS Lambda, and visualizes trends on a custom dashboard.
              </p>
              
              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {['AWS Lambda', 'Terraform', 'Python', 'DynamoDB', 'React'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-slate-900 text-slate-300 text-xs font-mono rounded-md border border-slate-700">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a href="#" className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center">
                  View Documentation <span className="ml-2">→</span>
                </a>
              </div>
            </div>

            {/* Right: Visual Placeholder (We will put a screenshot here later) */}
            <div className="bg-slate-900/50 min-h-[300px] flex items-center justify-center border-l border-slate-700">
               <span className="text-slate-600 font-mono text-sm">[ Project Screenshot Area ]</span>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}