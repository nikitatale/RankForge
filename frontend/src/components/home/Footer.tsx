/* eslint-disable @typescript-eslint/no-explicit-any */
import { ArrowUp } from "lucide-react";
import { homefooterLinks } from "../../assets/assets";
import { SiX, SiInstagram, SiFacebook, SiGithub } from "@icons-pack/react-simple-icons";

function RankForgeLogo({ size = 20 }: { size?: number }) {

    return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 26 L12 10 L18 19 L22 13" stroke="url(#lgf1)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="22" cy="13" r="3" fill="url(#lgf1)"/>
            <defs>
                <linearGradient id="lgf1" x1="6" y1="26" x2="22" y2="10" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#a855f7"/>
                    <stop offset="1" stopColor="#e879f9"/>
                </linearGradient>
            </defs>
        </svg>
    );
}

export default function Footer() {

 const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

    return (
        <footer className="relative border-t border-border py-14 bg-card">
            <div className="neon-line absolute top-0 left-0 right-0" />

            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-12">
                    <div className="col-span-2">
                        <div className="flex items-center gap-2.5 mb-4">
                            <RankForgeLogo size={20} />
                            <span className="syne text-lg font-700 gradient-text">RankForge</span>
                        </div>
                        <p className="text-xs text-muted-foreground mb-1 leading-relaxed w-5/6">Forge your path to #1 rankings with AI-powered SEO analysis and real-time tracking.</p>
                        <div className="flex items-center gap-3">
                            {[
                                { icon: <SiX size={15} />, href: "#" },
                                { icon: <SiInstagram size={15} />, href: "#" },
                                { icon: <SiFacebook size={15} />, href: "#" },
                                { icon: <SiGithub size={15} />, href: "#" },
                            ].map((s, i) => (
                                <a key={i} href={s.href} className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/8 transition-all border border-border hover:border-primary/20">
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {homefooterLinks.map((section: any) => (
                        <div key={section.title}>
                            <h3 className="syne text-xs font-600 uppercase tracking-widest text-foreground mb-4">{section.title}</h3>
                            <ul className="space-y-2">
                                {section.links.map((link: any) => (
                                    <li key={link}>
                                        <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="mono text-xs text-muted-foreground/60">&copy; {new Date().getFullYear()} RankForge. All rights reserved.</p>
                      <div className="flex items-center gap-3">
                      <button onClick={scrollToTop} aria-label="Scroll to top" className="p-2 rounded-full border border-border hover:bg-muted transition-colors" >
                       <ArrowUp size={16} />
                      </button>
                </div>
                </div>
            </div>
        </footer>
    );
}
