/* eslint-disable @typescript-eslint/no-explicit-any */
import { homeHowItWorksData } from "../../assets/assets";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

function StepCard({ step, i }: { step: any; i: number }) {
    const [ref, visible] = useScrollAnimation({ threshold: 0.2, rootMargin: "0px 0px -120px 0px" });

   
    const directionClass = i === 0 ? "anim-fade-left" : i === 2 ? "anim-fade-right" : "anim-fade-up";

    return (
        <div
            ref={ref}
            className={`relative z-10 group ${directionClass} ${visible ? "anim-visible" : ""}`}
            style={{ transitionDelay: `${i * 100}ms` }}
        >
            <div className="text-center mb-4">
                <span className="mono text-xs font-500 text-muted-foreground/40 tracking-widest uppercase">
                    Step {step.num}
                </span>
            </div>

            <div className="glass card-hover p-7 text-center relative overflow-hidden">
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: "radial-gradient(ellipse at top, rgba(168,85,247,0.06) 0%, transparent 70%)" }}
                />

                <div className="relative z-10">
                    <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 text-primary transition-all duration-300 group-hover:scale-110"
                        style={{ background: "rgba(168,85,247,0.08)", border: "1px solid rgba(168,85,247,0.2)" }}
                    >
                        {step.icon}
                    </div>
                    <h3 className="syne font-600 mb-2 text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
            </div>
        </div>
    );
}

export default function HowItWorks() {
    const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.4 });

    return (
        <section className="relative py-24 md:py-11 overflow-hidden">
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] pointer-events-none"
                style={{ background: "radial-gradient(ellipse, rgba(168,85,247,0.06) 0%, transparent 70%)", filter: "blur(40px)" }}
            />

            <div className="max-w-5xl mx-auto px-4">
               
                <div
                    ref={headerRef}
                    className={`text-center mb-16 anim-fade-up ${headerVisible ? "anim-visible" : ""}`}
                >
                    <span className="tag-pill mb-4 inline-flex">How It Works</span>
                    <h2 className="syne text-3xl sm:text-4xl md:text-5xl font-700 mb-5 text-foreground leading-tight">
                        Three steps to <span className="gradient-text">dominate search</span>
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto text-sm">
                        RankForge combines real browser automation and AI to simulate authentic user interactions and deliver comprehensive, actionable SEO insights.
                    </p>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
                    
                    <div className="hidden md:block absolute top-[80px] left-[calc(16.67%+16px)] right-[calc(16.67%+16px)] pointer-events-none">
                        <div className="neon-line" />
                    </div>

                    {homeHowItWorksData.map((step: any, i: number) => (
                        <StepCard key={step.num} step={step} i={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}