import { Link } from "react-router-dom";
import { CheckIcon, ZapIcon } from "lucide-react";

export default function Pricing() {
    const freeFeatures = ["5 analyses per day", "Full SEO report", "Keyword analysis", "Issue detection", "Export results"];
    const proFeatures = ["Unlimited analyses", "Priority processing", "Competitor analysis", "Historical tracking", "API access", "Email reports"];

    return (
        <section className="relative py-24 md:py-30 overflow-hidden">
            <div className="absolute inset-0 bg-dot-pattern opacity-[0.04] pointer-events-none" />

            <div className="max-w-5xl w-full mx-auto px-4">
                <div className="text-center mb-14">
                    <span className="tag-pill mb-4 inline-flex">Pricing</span>
                    <h2 className="syne text-3xl sm:text-4xl md:text-5xl font-700 mb-4 text-foreground">
                        Simple, <span className="gradient-text">Honest Pricing</span>
                    </h2>
                    <p className="text-muted-foreground text-sm">Start free. Scale when you're ready.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
               
                    <div className="glass card-hover p-8 flex flex-col">
                        <div className="mb-6">
                            <span className="mono text-xs text-muted-foreground uppercase tracking-widest">Starter</span>
                            <div className="flex items-end gap-1 mt-2">
                                <span className="syne text-4xl font-700 text-foreground">$0</span>
                                <span className="text-muted-foreground text-sm mb-1">/month</span>
                            </div>
                        </div>

                        <ul className="space-y-2.5 mb-8 flex-1">
                            {freeFeatures.map((item) => (
                                <li key={item} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                                    <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                                        style={{ background: "rgba(52,211,153,0.12)", border: "1px solid rgba(52,211,153,0.2)" }}>
                                        <CheckIcon size={10} className="text-emerald-400" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <Link
                            to="/register"
                            className="block w-full py-3 rounded-xl text-center text-sm font-500 text-foreground transition-all hover:bg-muted border border-border"
                        >
                            Get Started Free
                        </Link>
                    </div>

                   
                    <div className="relative rounded-2xl p-8 flex flex-col overflow-hidden"
                        style={{ background: "var(--card)", border: "1px solid rgba(192,132,252,0.25)" }}
                    >
                     
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px gradient-bg opacity-60" />
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-8 pointer-events-none"
                            style={{ background: "radial-gradient(ellipse, rgba(168,85,247,0.2) 0%, transparent 70%)" }}
                        />

                        <div className="absolute top-4 right-4">
                            <span className="flex items-center gap-1 px-2.5 py-1 rounded-lg gradient-bg text-white text-[10px] font-700 uppercase mono tracking-wide">
                                <ZapIcon size={9} />
                                Popular
                            </span>
                        </div>

                        <div className="mb-6">
                            <span className="mono text-xs text-primary uppercase tracking-widest">Pro</span>
                            <div className="flex items-end gap-1 mt-2">
                                <span className="syne text-4xl font-700 gradient-text">$19</span>
                                <span className="text-muted-foreground text-sm mb-1">/month</span>
                            </div>
                        </div>

                        <ul className="space-y-2.5 mb-8 flex-1">
                            {proFeatures.map((item) => (
                                <li key={item} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                                    <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                                        style={{ background: "rgba(192,132,252,0.12)", border: "1px solid rgba(192,132,252,0.2)" }}>
                                        <CheckIcon size={10} className="text-primary" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <button className="btn-forge w-full py-3 text-sm text-white">
                            Upgrade to Pro
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
