import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Trophy, 
  Users, 
  Globe, 
  BarChart3, 
  Calendar, 
  Palette, 
  ChevronRight, 
  Mail, 
  Phone, 
  Facebook, 
  Youtube, 
  Instagram, 
  Twitter, 
  MessageSquare,
  ArrowUpRight,
  Target,
  Rocket,
  ShieldCheck,
  Disc as Discord
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Data ---
const LEADERSHIP = [
  { name: 'Akhilur Rahman Tutul', role: 'Founder & Owner', email: 'levelynesports@gmail.com', phone: '+880 1820-302059' },
  { name: 'Rafiul Islam Talukder', role: 'Chief Executive Officer', email: 'rafiulit6@gmail.com', phone: '+880 1303-356185' },
  { name: 'Ahmed Anin', role: 'Director', email: 'zerithofficial7@gmail.com', phone: '+880 1953-275450' },
  { name: 'Reyon Khan', role: 'Head of Operations', email: 'khanreyon@gmail.com', phone: '+880 1784-466652' },
  { name: 'Shoab Sami Prince', role: 'Head of Esports', email: 'princearkid007@gmail.com', phone: '01577012835' },
];

const METRICS = [
  { label: 'Total Public Reach', value: '150,000+', icon: Globe },
  { label: 'Peak Concurrent Viewers', value: '1,400+', icon: BarChart3 },
  { label: 'Active Teams', value: '5+', icon: Target },
  { label: 'Success Rate', value: '98%', icon: ShieldCheck },
];

const TOURNAMENTS = [
  {
    title: 'MYTHFRACT CLASH (MLBB)',
    scale: '64 Teams',
    impact: '80,000+ Reach | 1,400+ Peak Viewers',
    prize: '5,000 BDT',
    status: 'Successfully Concluded',
    vod: 'https://youtube.com/playlist?list=PLAjFnzNOE4TDuI409GKAXDjcAUFUlnEL4'
  },
  {
    title: 'RISE OF LIEGE (MLBB)',
    scale: '32 Teams',
    impact: '52,000+ Reach | 1,078 Peak Viewers',
    prize: '34,000 MLBB Diamonds',
    status: 'Sponsored by MLBB Official Bangladesh',
    vod: 'https://youtube.com/playlist?list=PLAjFnzNOE4TBZZCOH3n8drBBVXK4wpqMt'
  },
  {
    title: 'SOULS CUP (eFOOTBALL)',
    scale: '24 Elite Players',
    impact: '20,000+ Total Reach',
    prize: '1,000 BDT',
    status: 'Completed'
  },
  {
    title: 'ARISE CHAMPIONS (MLBB)',
    scale: '5v5 Competitive Circuit',
    impact: 'Expert Curation',
    status: 'Organized by Operators VI',
    prize: 'Elite Class'
  }
];

const PARTNERS = [
  { name: 'Esports Bangla Bulletin', role: 'News Media Partner', src: '/partners/ebb.png', link: 'https://www.facebook.com/share/18nZ2SG3Ye/' },
  { name: 'MLBB Bangladesh', role: 'Official Sponsor', src: '/partners/mlbb.png', link: 'https://www.facebook.com/share/1CxFEVYNwy/' },
  { name: 'AIVEN', role: 'Content Creator Partner', src: '/partners/aiven.png', link: 'https://www.facebook.com/share/18GjexEk9w/' },
];

const MLBB_LINEUP = [
  { name: 'Adnan Sami Ushno', ign: 'Kafka', uid: '1435190707 (15950)', device: 'Redmi Turbo 4', discord: 'nigerosauruss', fb: 'https://www.facebook.com/idk.kafka', img: '/players/kafka.png' },
  { name: 'Shahriar Zidan', ign: 'αυяιєℓ', uid: '745090508 (8991)', device: 'Xiaomi M2102J20SG', discord: 'zenxmlbb_', fb: 'https://www.facebook.com/share/19aHTHJEhz/', img: '/players/auriel.png' },
  { name: 'Afif Mannan Anam', ign: 'VPN PUSH', uid: '1133081125 (13557)', device: 'OPPO F21 PRO 5G', discord: 'afif_29', fb: 'https://www.facebook.com/share/18U6oPPZbT/', img: '/players/afif.png' },
  { name: 'Rahat Sarkar', ign: 'Xcalius神', uid: '1143871290 (13615)', device: 'Samsung galaxy s25 ultra / iPhone 14 pro max', discord: 'kurai_tenshi_', fb: 'https://www.facebook.com/share/1FnHTRdeJq/', img: '/players/rahat.png' },
  { name: 'Shaqib An-Noor', ign: 'darĸraι', uid: '777328990(12099)', device: 'Redmi Note 13 Pro', discord: 'dark.rai', fb: 'https://www.facebook.com/noorshaqib', img: '/players/shaqib.png' },
];

const SOCIALS = [
  { icon: Facebook, link: 'https://www.facebook.com/levelynesports', name: 'Facebook' },
  { icon: Youtube, link: 'https://youtube.com/@levelynesports', name: 'YouTube' },
  { icon: Instagram, link: 'https://www.instagram.com/levelynesports', name: 'Instagram' },
  { icon: Twitter, link: 'https://x.com/levelynesports', name: 'X' },
  { icon: Discord, link: 'https://discord.gg/levelyn-esports-community-1188110128801665157', name: 'Discord' },
];

// --- Components ---

const PARTNER_LOGOS = [
  { name: 'Esports Bangla Bulletin', src: '/partners/ebb.png', link: 'https://www.facebook.com/share/18nZ2SG3Ye/' },
  { name: 'MLBB Official', src: '/partners/mlbb.png', link: '#' },
  { name: 'Levelyn News', src: '/partners/news.png', link: '#' },
  // Add more partners here
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 px-6 md:px-12 flex justify-between items-center",
      scrolled ? "bg-black/90 backdrop-blur-lg border-b border-white/5 py-3" : "bg-transparent"
    )}>
      <div className="flex items-center gap-3 group cursor-pointer">
        {/* OFFICIAL LOGO REPLACEMENT */}
        <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
          <img 
            src="/logo_main.png" 
            alt="Levelyn Esports" 
            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
            onError={(e) => {
              // Fallback if image isn't uploaded yet
              e.currentTarget.src = "https://placehold.co/400x400/000000/00F0FF?text=LVE";
            }}
          />
        </div>
        <div className="flex flex-col -gap-1">
          <span className="font-display text-xl font-bold tracking-tighter text-white leading-none">LEVELYN</span>
          <span className="text-[10px] font-black text-brand tracking-[0.2em]">ESPORTS</span>
        </div>
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-xs font-bold tracking-widest text-slate-400 uppercase">
        {['About', 'Tournaments', 'Legacy', 'Players', 'Contact'].map((item) => (
          <motion.a 
            key={item} 
            href={`#${item.toLowerCase()}`} 
            className="hover:text-brand transition-colors relative group"
            whileHover={{ y: -2 }}
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand group-hover:w-full transition-all duration-300" />
          </motion.a>
        ))}
      </div>

      <button className="bg-white text-black px-5 py-2 text-xs font-bold uppercase tracking-tighter hover:bg-brand transition-colors rounded-sm hidden sm:block">
        Join Community
      </button>
    </nav>
  );
};

const SectionHeader = ({ title, subtitle, number }: { title: string; subtitle?: string; number: string }) => (
  <div className="mb-12 md:mb-20">
    <div className="flex items-center gap-4 mb-4">
      <span className="font-display text-4xl md:text-6xl font-black text-white/5">{number}</span>
      <div className="h-[1px] flex-1 bg-white/10" />
    </div>
    <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase leading-none">
      {title}
    </h2>
    {subtitle && <p className="text-slate-400 max-w-xl text-sm md:text-base leading-relaxed">{subtitle}</p>}
  </div>
);

export default function App() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 px-6 md:px-12 overflow-hidden">
        {/* Background visual element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] opacity-20 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--color-brand-dim)_0%,transparent_70%)] animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-white/5 rotate-12" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-white/5 -rotate-12" />
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-[10px] font-bold uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-brand animate-ping" />
              Visionary Esports Org
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.85] mb-8 uppercase italic-display">
              LEVEL <span className="text-brand">UP</span> WITH LEVELYN
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-lg mb-10 leading-relaxed font-light">
              Founded in Bangladesh, Shaping the future of competitive gaming through 
              professionalism, innovation, and inclusivity.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-hover bg-brand text-black px-8 py-4 font-black uppercase text-sm flex items-center gap-2 hover:translate-x-1 hover:-translate-y-1 transition-transform shadow-[4px_4px_0px_#fff]"
              >
                Discover Legacy <ArrowUpRight className="w-4 h-4" />
              </motion.button>
              <motion.button 
                whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                className="bg-white/5 border border-white/10 text-white px-8 py-4 font-black uppercase text-sm transition-colors"
              >
                Contact Ops
              </motion.button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="aspect-square glass rounded-2xl p-8 flex flex-col justify-between overflow-hidden relative group">
              <div className="absolute top-0 right-0 p-8">
                <Trophy className="w-24 h-24 text-white/5 group-hover:text-brand/10 transition-colors duration-700" />
              </div>
              <div>
                <div className="text-8xl font-black text-white/20 mb-2">01</div>
                <h3 className="text-3xl font-black uppercase">Professional<br/>Platform</h3>
              </div>
              <p className="text-slate-500 font-medium">Equipping players with tools to grow, compete, and thrive in the industry.</p>
              
              <div className="absolute bottom-[-50px] right-[-50px] w-64 h-64 bg-brand/5 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white/5 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {METRICS.map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center md:items-start text-center md:text-left"
              >
                <stat.icon className="w-6 h-6 text-brand mb-4" />
                <div className="text-3xl md:text-5xl font-black text-white mb-1 uppercase tracking-tighter">{stat.value}</div>
                <div className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-40 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionHeader 
          number="02"
          title="Executive Summary"
          subtitle="Our commitment to fostering talent and building a global gaming community."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="glass p-8 rounded-xl">
              <h4 className="text-brand font-black uppercase mb-4 text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> The Evolution
              </h4>
              <p className="text-slate-300 leading-relaxed italic">
                Founded on December 23, 2023, as Moba Addicted Community, our organization rapidly rebranded to LEVELYN ESPORTS to better serve our growing competitive vision and global community.
              </p>
            </div>
            <p className="text-slate-400 leading-relaxed md:text-lg">
              We prioritize professionalism, innovation, and inclusivity, ensuring every member has the tools to grow, compete, and thrive. Levelyn Esports provides players with the platform they need to succeed in the rapidly evolving esports industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Leadership Team</div>
            {LEADERSHIP.map((leader, i) => (
              <motion.div 
                key={leader.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="group flex flex-col p-4 border-l-2 border-white/5 hover:border-brand transition-all hover:bg-white/5"
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-white uppercase tracking-tight">{leader.name}</span>
                  <span className="text-[10px] text-brand/60 uppercase font-black tracking-widest">{leader.role}</span>
                </div>
                <div className="flex gap-4 text-[10px] text-slate-500">
                  <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> {leader.email}</span>
                  <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> {leader.phone}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tournaments Section */}
      <section id="tournaments" className="py-24 md:py-40 bg-zinc-950 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeader 
            number="03"
            title="Tournament Legacy"
            subtitle="Key highlights and impact metrics from our most successful events."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {TOURNAMENTS.map((t, i) => (
              <motion.div 
                key={t.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 glass glass-hover rounded-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand">
                      <Trophy className="w-6 h-6" />
                    </div>
                    <div className="text-[10px] font-black uppercase bg-brand/10 text-brand px-2 py-1 rounded-sm">
                      {t.status}
                    </div>
                  </div>
                  <h3 className="text-2xl font-black mb-4 uppercase group-hover:text-brand transition-colors">{t.title}</h3>
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div>
                      <div className="text-[10px] font-bold text-slate-500 uppercase mb-1">Scale</div>
                      <div className="text-white font-bold">{t.scale}</div>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-500 uppercase mb-1">Impact</div>
                      <div className="text-white font-bold">{t.impact}</div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-white/5 pt-6">
                  <div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase mb-1">Prize Pool</div>
                    <div className="text-brand font-black text-xl">{t.prize}</div>
                  </div>
                  {t.vod && (
                    <a 
                      href={t.vod} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs font-black uppercase text-white hover:text-brand flex items-center gap-2 group/link"
                    >
                      Watch VOD <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Slideshow Section / Partners */}
      <section id="legacy" className="py-24 border-y border-white/5 overflow-hidden bg-white/[0.02]">
        <div className="text-center mb-12">
          <h2 className="text-xs font-bold text-slate-500 uppercase tracking-[0.5em] mb-4">Official Partners & Media</h2>
        </div>
        <div className="flex gap-12 animate-slide items-center whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="inline-flex items-center gap-16 px-8">
              {PARTNERS.map((partner) => (
                <a 
                  key={partner.name} 
                  href={partner.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500 group/p"
                >
                  <img 
                    src={partner.src} 
                    alt={partner.name} 
                    className="h-12 md:h-16 w-auto object-contain transition-transform group-hover/p:scale-110"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="text-center">
                    <span className="block text-white font-black uppercase text-xl md:text-2xl leading-none">{partner.name}</span>
                    <span className="text-brand text-[8px] font-bold uppercase tracking-wider">{partner.role}</span>
                  </div>
                </a>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Players Section */}
      <section id="players" className="py-24 md:py-40 max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader 
          number="04"
          title="Official MLBB Lineup"
          subtitle="The elite squad representing Levelyn Esports on the competition stage."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MLBB_LINEUP.map((p, i) => (
            <motion.div 
              key={p.ign}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass glass-hover p-6 rounded-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 -rotate-45 translate-x-16 -translate-y-16 group-hover:bg-brand/10 transition-colors" />
              
              <div className="flex items-end gap-4 mb-6">
                <div className="w-16 h-16 bg-white/5 rounded-lg flex items-center justify-center font-black text-2xl text-brand border border-white/5 overflow-hidden">
                  {p.img ? (
                    <img 
                      src={p.img} 
                      alt={p.ign} 
                      className="w-full h-full object-cover" 
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  ) : p.ign.charAt(0)}
                </div>
                <div>
                  <h3 className="text-2xl font-black uppercase text-white">{p.ign}</h3>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{p.name}</p>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                <PlayerInfo label="UID" value={p.uid} />
                <PlayerInfo label="Device" value={p.device} />
                <PlayerInfo label="Discord" value={p.discord} />
              </div>

              <div className="flex gap-4">
                <a href={p.fb} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-md hover:bg-brand/20 hover:text-brand transition-all">
                  <Facebook className="w-4 h-4" />
                </a>
                <div className="p-2 bg-white/5 rounded-md hover:bg-brand/20 hover:text-brand transition-all cursor-pointer">
                  <MessageSquare className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
          
          <div className="glass p-6 rounded-2xl border-dashed border-white/10 flex flex-col items-center justify-center text-center group cursor-help">
            <Users className="w-12 h-12 text-slate-700 group-hover:text-brand/50 transition-colors mb-4" />
            <h3 className="font-black uppercase text-slate-700 group-hover:text-slate-500 mb-2">COD & Free Fire</h3>
            <p className="text-[10px] font-bold text-slate-800 uppercase tracking-widest">Coming Soon</p>
          </div>
        </div>
      </section>

      {/* Community Events */}
      <section className="py-24 bg-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <SectionHeader 
              number="05"
              title="Creative Events"
              subtitle="Beyond competition: building a vibrant community culture."
            />
            <div className="grid grid-cols-1 gap-4">
              <CommunityEvent title="Discord Art Contest" detail="1,800 BDT Prize Pool | Voting-based Event" icon={Palette} />
              <CommunityEvent title="MLBB Highlight Event" detail="Content Creation for FB/YouTube" icon={Youtube} />
              <CommunityEvent title="Magic Chess Tournament" detail="16-Player Bracket Streamed on Discord" icon={Trophy} />
            </div>
          </div>
          <div className="flex-1 w-full flex justify-center">
            <div className="relative w-full max-w-sm aspect-square">
              <div className="absolute inset-0 bg-brand/20 blur-[100px] rounded-full animate-pulse" />
              <motion.div 
                whileHover={{ rotate: 5, scale: 1.05 }}
                className="relative z-10 glass w-full h-full rounded-full border-brand/20 flex flex-col items-center justify-center p-12 text-center group"
              >
                <Discord className="w-20 h-20 text-brand mb-6 group-hover:scale-110 transition-transform duration-500" />
                <h4 className="text-2xl font-black uppercase mb-2">Join Our Discord</h4>
                <p className="text-sm text-slate-400 mb-6">Connect with 150k+ reach community hub</p>
                <motion.a 
                  whileHover={{ scale: 1.1, backgroundColor: "#00F0FF", color: "#000" }}
                  href="https://discord.gg/levelyn-esports-community-1188110128801665157" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-black px-8 py-3 rounded-full font-black uppercase text-xs transition-colors flex items-center gap-2"
                >
                  Enter Server <ArrowUpRight className="w-4 h-4" />
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="bg-black pt-24 md:pt-40 pb-12 px-6 md:px-12 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-end mb-24">
          <div>
            <h2 className="text-5xl md:text-8xl font-black mb-12 uppercase leading-[0.85] tracking-tighter">
              READY TO <br/><span className="text-brand">LEVEL UP?</span>
            </h2>
            <div className="space-y-6">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-brand group-hover:border-brand group-hover:text-black transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">General Inquiries</div>
                  <div className="text-xl font-bold text-white group-hover:text-brand transition-colors">levelynesports@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-brand group-hover:border-brand group-hover:text-black transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Official Hotline</div>
                  <div className="text-xl font-bold text-white group-hover:text-brand transition-colors">+880 1820-302059</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-12">
            <div className="flex flex-wrap gap-4 md:gap-6">
              {SOCIALS.map((s) => (
                <a 
                  key={s.name}
                  href={s.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-14 h-14 glass rounded-full flex items-center justify-center hover:bg-brand hover:text-black hover:border-brand transition-all group"
                  aria-label={s.name}
                >
                  <s.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
            <div className="text-left lg:text-right">
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Headquarters</div>
              <div className="text-lg font-bold text-white">Bangladesh, Worldwide Operations</div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-4">
             <div className="h-0.5 w-12 bg-brand" />
             <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">&copy; 2026 LEVELYN ESPORTS</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

// --- Sub-components ---

const PlayerInfo = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col">
    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">{label}</span>
    <span className="text-xs font-bold text-slate-300">{value}</span>
  </div>
);

const CommunityEvent = ({ title, detail, icon: Icon }: { title: string; detail: string; icon: any }) => (
  <div className="flex gap-4 p-4 items-center group cursor-pointer hover:bg-white/5 transition-colors rounded-lg border-l-2 border-transparent hover:border-brand">
    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-slate-500 group-hover:text-brand group-hover:bg-brand/10 transition-all">
      <Icon className="w-5 h-5" />
    </div>
    <div>
      <h5 className="font-bold text-white uppercase text-sm">{title}</h5>
      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{detail}</p>
    </div>
  </div>
);

const CircleIcon = () => (
  <div className="w-2 h-2 rounded-full bg-brand/30" />
);
