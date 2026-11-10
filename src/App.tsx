import React, { useState } from 'react';
import { Rocket, ShieldCheck, Terminal, ExternalLink, Zap, Database, KeyRound, CheckCircle2, ArrowRight } from 'lucide-react';
import { GumroadLicenseManager } from './lib/gumroad-license';

export const App: React.FC = () => {
  const [testKey, setTestKey] = useState('');
  const [verified, setVerified] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-indigo-600 selection:text-white font-sans">
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-lg">
            <Rocket className="h-5 w-5" />
          </div>
          <span className="text-xl font-bold tracking-tight">DevLaunch OS</span>
        </div>
        <a
          href="https://github.com/TrioA/devlaunch-os"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500 transition-colors"
        >
          <span>GitHub Repo</span>
          <ExternalLink className="h-4 w-4" />
        </a>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-16 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-950/60 px-4 py-1.5 text-xs font-semibold text-indigo-300 mb-6">
          <span>Open-Source Micro-SaaS Boilerplate</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
          Ship your profitable software <br />
          <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
            in 48 hours, not 4 weeks.
          </span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-slate-400 text-lg">
          Complete production-ready micro-SaaS architecture with built-in client licensing validation and offline-first typed persistence.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600/20 text-indigo-400 mb-4">
              <KeyRound className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-white text-lg">Turnkey Licensing</h3>
            <p className="mt-2 text-sm text-slate-400">Validate licenses, enforce seats, and unlock pro features with one simple function call.</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600/20 text-indigo-400 mb-4">
              <Zap className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-white text-lg">Vite + React 18</h3>
            <p className="mt-2 text-sm text-slate-400">Sub-second build times, strict TypeScript, and Tailwind CSS styling ready out of the box.</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600/20 text-indigo-400 mb-4">
              <Database className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-white text-lg">MicroDB Storage</h3>
            <p className="mt-2 text-sm text-slate-400">Typed offline-first client persistence with zero database hosting fees.</p>
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-900 py-8 text-center text-xs text-slate-500">
        DevLaunch OS — Built by <a href="https://github.com/TrioA" className="text-indigo-400 hover:underline">TrioA</a>
      </footer>
    </div>
  );
};

export default App;
