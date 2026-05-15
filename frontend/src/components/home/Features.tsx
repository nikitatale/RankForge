/* eslint-disable @typescript-eslint/no-explicit-any */
import { homeFeaturesData } from "../../assets/assets";

export default function Features() {
    return (
        <section className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0 bg-dot-pattern opacity-[0.04] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="tag-pill mb-4 inline-flex">Features</span>
                    <h2 className="syne text-3xl sm:text-4xl md:text-5xl font-700 mb-5 text-foreground leading-tight">
                        Everything to <span className="gradient-text">Rank Higher</span>
                    </h2>
                    <p className="text-muted-foreground max-w-lg mx-auto text-sm leading-relaxed">
                        Enterprise-grade SEO analysis powered by real browser rendering and AI, built for teams that care about performance and search visibility.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {homeFeaturesData.map((f: any, i: number) => (
                        <div
                            key={f.title}
                            className="glass card-hover group p-6 relative overflow-hidden"
                            style={{ animationDelay: `${i * 60}ms` }}
                        >
                           
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                style={{ background: "radial-gradient(ellipse at top left, rgba(168,85,247,0.06) 0%, transparent 70%)" }}
                            />

                            <div className="relative z-10">
                                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 text-primary"
                                    style={{ background: "rgba(168,85,247,0.08)", border: "1px solid rgba(168,85,247,0.15)" }}
                                >
                                    {f.icon}
                                </div>
                                <h3 className="syne text-base font-600 mb-2 text-foreground">{f.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                            </div>

                          
                            <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                style={{ background: "radial-gradient(ellipse at top right, rgba(240,171,252,0.12) 0%, transparent 70%)" }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
