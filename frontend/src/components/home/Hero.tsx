import { SearchIcon, ArrowRightIcon, ZapIcon, ShieldCheckIcon, TrendingUpIcon } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HomeWave } from "../../assets/assets";

export default function Hero() {
    const [url, setUrl] = useState("");
    const navigate = useNavigate();

    const handleQuickAnalyze = (e: React.FormEvent) => {
        e.preventDefault();
        navigate(`/analyze?url=${encodeURIComponent(url)}`);
    };

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-18 overflow-hidden">

           
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute top-[-15%] left-[10%] w-[500px] h-[500px] rounded-full opacity-30 animate-aurora"
                    style={{ background: "radial-gradient(ellipse, rgba(168,85,247,0.4) 0%, transparent 70%)", filter: "blur(80px)" }}
                />
                <div
                    className="absolute bottom-[-10%] right-[5%] w-[400px] h-[400px] rounded-full opacity-20 animate-aurora"
                    style={{ background: "radial-gradient(ellipse, rgba(240,171,252,0.4) 0%, transparent 70%)", filter: "blur(100px)", animationDelay: "3s" }}
                />
                <div
                    className="absolute top-[40%] right-[20%] w-[300px] h-[300px] rounded-full opacity-15 animate-aurora"
                    style={{ background: "radial-gradient(ellipse, rgba(52,211,153,0.3) 0%, transparent 70%)", filter: "blur(60px)", animationDelay: "6s" }}
                />
            </div>

            <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto text-center">

               
                <h1
                    className="syne text-5xl sm:text-6xl md:text-7xl font-800 leading-[1.05] mb-6 tracking-tight animate-slide-up"
                    style={{ animationDelay: "50ms" }}
                >
                    Forge Your Path<br />
                    to <span className="gradient-text">Rank #1</span>
                </h1>

            
                <p
                    className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed animate-slide-up"
                    style={{ animationDelay: "120ms" }}
                >
                    AI-powered SEO audits that reveal what's holding you back. Analyze any website, track keyword rankings, and auto-generate intelligent SEO reports.
                </p>

              
                <form
                    onSubmit={handleQuickAnalyze}
                    className="max-w-2xl mx-auto mb-6 animate-slide-up"
                    style={{ animationDelay: "200ms" }}
                >
                    <div className="relative flex items-center glass rounded-2xl border border-border/80 p-1.5 glow-sm transition-all focus-within:border-primary/40 focus-within:glow-primary">
                        <div className="flex items-center gap-2.5 flex-1 px-4">
                            <SearchIcon size={16} className="text-muted-foreground shrink-0" />
                            <input
                                type="text"
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                                placeholder="Enter website URL (e.g., example.com)"
                                className="w-full bg-transparent text-foreground placeholder-muted-foreground outline-none text-sm py-2.5"
                                id="hero-url-input"
                            />
                        </div>
                        <button
                            type="submit"
                            id="hero-analyze-btn"
                            className="btn-forge px-6 py-2.5 text-sm text-white flex items-center gap-2 shrink-0"
                        >
                            Analyze Now
                            <ArrowRightIcon size={14} />
                        </button>
                    </div>
                </form>

               
                <p
                    className="text-muted-foreground/60 text-xs mb-12 animate-fade-in"
                    style={{ animationDelay: "280ms" }}
                >
                    Free plan with 5 analyses daily • No credit card needed.
                </p>

              
                <div
                    className="flex items-center justify-center gap-6 flex-wrap animate-fade-in"
                    style={{ animationDelay: "360ms" }}
                >
                    {[
                        { icon: <ZapIcon size={13} />, label: "Instant Analysis" },
                        { icon: <ShieldCheckIcon size={13} />, label: "No Sign-up Required" },
                        { icon: <TrendingUpIcon size={13} />, label: "AI-Powered Reports" },
                    ].map((b) => (
                        <div key={b.label} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            <span className="text-primary">{b.icon}</span>
                            {b.label}
                        </div>
                    ))}
                </div>
            </div>

        
            <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none z-0 opacity-30">
                <HomeWave />
            </div>
        </section>
    );
}