/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  ArrowRight, 
  Zap, 
  Shield, 
  Target, 
  Users, 
  Globe, 
  ChevronRight, 
  Menu, 
  X,
  Sparkles,
  Layers,
  Activity,
  Compass
} from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-horizon-emerald rounded-lg flex items-center justify-center">
            <span className="font-display font-bold text-black text-xl">H</span>
          </div>
          <span className="font-display font-bold text-xl tracking-tighter">HORIZON <span className="text-horizon-emerald">AFRICA</span></span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8 glass px-8 py-3 rounded-full">
          {['Vision', 'Pillars', 'Code', 'Join'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-sm font-medium text-white/70 hover:text-horizon-emerald transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:block bg-white text-black px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-horizon-emerald hover:scale-105 transition-all"
        >
          Get Started
        </motion.button>

        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-horizon-bg border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {['Vision', 'Pillars', 'Code', 'Join'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-2xl font-display font-bold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="w-full bg-horizon-emerald text-black py-4 rounded-2xl font-bold text-lg">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="vision" className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-horizon-emerald/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-horizon-gold/10 blur-[120px] rounded-full animate-pulse delay-700" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <Sparkles size={14} className="text-horizon-emerald" />
          <span className="text-xs font-bold tracking-widest uppercase text-white/60">A Pan-African Creative Movement</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-9xl font-display font-bold leading-[0.9] tracking-tighter mb-8"
        >
          SEE <span className="text-gradient-emerald">FURTHER.</span><br />
          BUILD <span className="text-white/40">BETTER.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 mb-12 leading-relaxed"
        >
          Africa does not lack talent. Africa lacks structure, visibility, and systems. 
          <span className="text-white"> HORIZON Africa exists to fix that.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <button className="w-full md:w-auto bg-horizon-emerald text-black px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2 group">
            Join the Movement
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full md:w-auto glass px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-colors">
            Our Mission
          </button>
        </motion.div>
      </div>

      <motion.div 
        style={{ y: y1, opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">Scroll to Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-horizon-emerald to-transparent" />
      </motion.div>
    </section>
  );
};

const ProblemSection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight">
              The gap between <br />
              <span className="text-horizon-emerald">knowledge</span> and <span className="text-white/40">action</span>.
            </h2>
            <p className="text-xl text-white/60 leading-relaxed">
              Many creatives are inspired, gifted, and informed, yet trapped in cycles of delay, confusion, and unexecuted ideas. 
              <br /><br />
              HORIZON Africa isn't just a community. It is an <span className="text-white font-bold">execution ecosystem</span> designed to solve the unspoken problem: 
              <span className="italic block mt-4 text-2xl text-white">"Knowing what to do, but not doing it."</span>
            </p>

            <div className="pt-8 border-t border-white/5">
              <h4 className="text-sm font-bold uppercase tracking-widest text-horizon-emerald mb-6">Who We Serve</h4>
              <div className="flex flex-wrap gap-3">
                {['Emerging Creatives', 'Marketplace Leaders', 'Faith-Driven Visionaries', 'Tech & Design Pioneers'].map(tag => (
                  <span key={tag} className="px-4 py-2 rounded-full glass text-xs font-bold text-white/60">{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Structure', icon: Layers },
              { label: 'Accountability', icon: Shield },
              { label: 'Execution Systems', icon: Zap },
              { label: 'Right Networks', icon: Users },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bento-card flex flex-col items-center text-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-horizon-emerald/20 transition-colors">
                  <item.icon className="text-horizon-emerald" size={24} />
                </div>
                <span className="font-display font-bold text-sm tracking-tight uppercase">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const PillarsSection = () => {
  const pillars = [
    {
      id: '01',
      title: 'Clarity & Alignment',
      desc: 'Moving from confusion to conviction. Finding your identity and direction.',
      icon: Compass,
      color: 'from-blue-500/20 to-transparent'
    },
    {
      id: '02',
      title: 'Priesthood & Governance',
      desc: 'Establishing spiritual intelligence, discipline, and integrity in your craft.',
      icon: Shield,
      color: 'from-purple-500/20 to-transparent'
    },
    {
      id: '03',
      title: 'Competency & Skill',
      desc: 'Building undeniable excellence through continuous learning and mastery.',
      icon: Target,
      color: 'from-emerald-500/20 to-transparent'
    },
    {
      id: '04',
      title: 'Structure & Execution',
      desc: 'Closing the gap between knowing and doing with routines and systems.',
      icon: Zap,
      color: 'from-orange-500/20 to-transparent'
    },
    {
      id: '05',
      title: 'Visibility & Mobilization',
      desc: 'Positioning creatives in the right rooms with the right people.',
      icon: Globe,
      color: 'from-pink-500/20 to-transparent'
    }
  ];

  return (
    <section id="pillars" className="py-32 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-horizon-emerald font-mono text-sm tracking-widest uppercase mb-4 block">The Foundation</span>
            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter">THE FIVE PILLARS.</h2>
          </div>
          <p className="text-white/40 max-w-xs text-sm font-medium uppercase tracking-wider">
            Our framework for raising a generation of executors, not just thinkers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`bento-card group relative overflow-hidden ${i === 0 || i === 3 ? 'lg:col-span-2' : ''}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <span className="font-mono text-horizon-emerald text-sm font-bold">{pillar.id}</span>
                  <pillar.icon className="text-white/20 group-hover:text-horizon-emerald transition-colors" size={32} />
                </div>
                <h3 className="text-3xl font-display font-bold mb-4">{pillar.title}</h3>
                <p className="text-white/60 leading-relaxed max-w-sm">{pillar.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ValuesSection = () => {
  const values = [
    { title: "Execution Is Spiritual", desc: "Delayed obedience weakens destiny." },
    { title: "Structure before Stardom", desc: "Visibility without structure leads to collapse." },
    { title: "Competency + Priesthood", desc: "Skill without spirit is hollow; spirit without skill lacks impact." },
    { title: "Excellence as Culture", desc: "We do not chase trends; we set standards." },
    { title: "Consistency over Hype", desc: "Long-term impact beats short-term noise." },
    { title: "Right Networks Matter", desc: "Destiny accelerates in the right rooms." }
  ];

  return (
    <section id="code" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-6">THE HORIZON CODE.</h2>
          <p className="text-white/40 uppercase tracking-[0.2em] font-bold text-xs">Our Core Values & Operating System</p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-1">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group py-8 border-b border-white/5 flex items-start gap-6 hover:bg-white/[0.02] px-4 transition-colors rounded-xl"
            >
              <span className="font-mono text-horizon-emerald/40 group-hover:text-horizon-emerald transition-colors font-bold">0{i + 1}</span>
              <div>
                <h4 className="text-xl font-display font-bold mb-2 group-hover:text-horizon-emerald transition-colors">{value.title}</h4>
                <p className="text-white/40 text-sm group-hover:text-white/60 transition-colors">{value.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section id="join" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-horizon-emerald/10 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass p-12 md:p-20 rounded-[3rem] border-horizon-emerald/20"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
            If you can see further, <br />
            <span className="text-horizon-emerald underline decoration-horizon-emerald/30 underline-offset-8">you belong here.</span>
          </h2>
          <p className="text-xl text-white/60 mb-12 max-w-xl mx-auto">
            HORIZON Africa is for builders, thinkers, creators, and culture shapers who are tired of "almost" and ready to execute.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-white text-black px-12 py-5 rounded-2xl font-bold text-lg hover:bg-horizon-emerald transition-colors">
              Apply to Join
            </button>
            <button className="w-full sm:w-auto glass px-12 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-colors">
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-horizon-emerald rounded flex items-center justify-center">
            <span className="font-display font-bold text-black text-xs">H</span>
          </div>
          <span className="font-display font-bold text-sm tracking-tighter uppercase">Horizon Africa</span>
        </div>
        
        <p className="text-white/20 text-xs font-mono uppercase tracking-widest">
          © 2026 HORIZON AFRICA • BUILT FOR EXECUTORS
        </p>

        <div className="flex gap-6">
          {['Instagram', 'X', 'LinkedIn', 'TikTok'].map(social => (
            <a key={social} href="#" className="text-white/40 hover:text-horizon-emerald transition-colors text-xs font-bold uppercase tracking-tighter">
              {social}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <ProblemSection />
      <PillarsSection />
      <ValuesSection />
      <CTASection />
      <Footer />
    </div>
  );
}
