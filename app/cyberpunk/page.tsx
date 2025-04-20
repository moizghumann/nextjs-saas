"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CyberpunkPage() {
    const [scrollPosition, setScrollPosition] = useState(0)
    const [glitchActive, setGlitchActive] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
        // Random glitch effect
        const glitchInterval = setInterval(
            () => {
                setGlitchActive(true)
                setTimeout(() => setGlitchActive(false), 200)
            },
            Math.random() * 5000 + 2000,
        )

        return () => clearInterval(glitchInterval)
    }, [])

    return (
        <div>
            {/* Scanlines overlay */}
            <div
                className="pointer-events-none fixed inset-0 z-50 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPgogIDxkZWZzPgogICAgPHBhdHRlcm4KICAgICAgaWQ9InNjYW5saW5lcyIKICAgICAgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIKICAgICAgd2lkdGg9IjEwMCUiCiAgICAgIGhlaWdodD0iNCIKICAgICAgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDkwKSIKICAgID4KICAgICAgPGxpbmUKICAgICAgICB4MT0iMCIKICAgICAgICB5MT0iMCIKICAgICAgICB4Mj0iMCIKICAgICAgICB5Mj0iNCIKICAgICAgICBzdHlsZT0ic3Ryb2tlOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpOyBzdHJva2Utd2lkdGg6IDI7IgogICAgICAvPgogICAgPC9wYXR0ZXJuPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3NjYW5saW5lcykiIC8+Cjwvc3ZnPg==')]"
                style={{ opacity: 0.15 }}
            ></div>

            {/* CRT flicker effect */}
            <div
                className={`pointer-events-none fixed inset-0 z-40 bg-cyan-500 mix-blend-overlay transition-opacity duration-100 ${glitchActive ? "opacity-5" : "opacity-0"
                    }`}
            ></div>

            {/* Background grid */}
            <div
                className="fixed inset-0 z-0"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(0, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.05) 1px, transparent 1px)",
                    backgroundSize: "50px 50px",
                    backgroundPosition: `${scrollPosition * 0.1}px ${scrollPosition * 0.1}px`,
                }}
            ></div>

            {/* Navigation */}
            <nav className="sticky top-0 z-30 border-b border-cyan-500/30 bg-black/80 px-6 py-4 backdrop-blur-md">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    {/* <div className="flex items-center gap-2">
                        <div className="h-6 w-6 animate-pulse bg-cyan-500"></div>
                        <h1
                            className={`font-mono text-lg font-bold tracking-wider text-white ${glitchActive ? "translate-x-[1px] skew-x-3 text-red-500" : ""
                                }`}
                        >
                            CYBER//PUNK
                        </h1>
                    </div> */}
                    <div className="hidden md:flex">
                        <div className="relative">
                            <div className="absolute -inset-0.5 animate-pulse bg-gradient-to-r from-cyan-500 to-fuchsia-500 opacity-75 blur"></div>
                            <div className="relative flex bg-black px-2">
                                <span className="font-mono text-xs text-cyan-500">SYS.STATUS: </span>
                                <span className="ml-1 font-mono text-xs text-green-500">ONLINE</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        {["MANIFESTO", "AESTHETICS", "TECH", "FUTURE"].map((item, index) => (
                            <Link
                                key={index}
                                href={`#${item.toLowerCase()}`}
                                className="group relative overflow-hidden border border-cyan-500/30 px-3 py-1 font-mono text-sm transition-colors hover:border-cyan-400 hover:text-cyan-400"
                            >
                                <span
                                    className="absolute inset-0 z-0 bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 opacity-0 transition-opacity group-hover:opacity-100"
                                    style={{ mixBlendMode: "overlay" }}
                                ></span>
                                {item}
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative overflow-hidden px-6 py-20 md:py-32">
                <div className="relative z-10">
                    <div className="mx-auto max-w-5xl">
                        <div className="mb-4 flex items-center gap-2">
                            <div className="h-px flex-1 bg-gradient-to-r from-cyan-500 to-transparent"></div>
                            <span className="font-mono text-xs text-cyan-500">SYSTEM.INIT</span>
                            <div className="h-px flex-1 bg-gradient-to-l from-fuchsia-500 to-transparent"></div>
                        </div>
                        <h1
                            className={`mb-2 font-mono text-6xl font-black uppercase tracking-tighter text-white md:text-8xl lg:text-9xl ${glitchActive ? "translate-x-[2px] skew-x-2 text-red-500" : ""
                                }`}
                            style={{
                                textShadow: "0 0 10px rgba(0, 255, 255, 0.5), 0 0 20px rgba(0, 255, 255, 0.3)",
                            }}
                        >
                            CYBER
                            <span className="block text-transparent" style={{ WebkitTextStroke: "2px #0ff" }}>
                                PUNK
                            </span>
                        </h1>
                        <div className="relative mb-8">
                            <div className="absolute -left-2 top-0 h-full w-1 bg-gradient-to-b from-cyan-500 to-fuchsia-500"></div>
                            <p className="font-mono text-lg text-cyan-300 md:text-xl">HIGH TECH // LOW LIFE // DIGITAL REBELLION</p>
                        </div>
                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="border border-cyan-500/30 bg-black/50 p-6 backdrop-blur-sm">
                                <p className="font-mono text-sm leading-relaxed text-gray-300">
                                    Cyberpunk design embodies the collision of advanced technology and societal decay. It visualizes a
                                    future where digital innovation coexists with urban deterioration, corporate dominance, and human
                                    augmentation.
                                </p>
                            </div>
                            <div className="relative">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-fuchsia-500 opacity-30 blur"></div>
                                <div className="relative border border-cyan-500/30 bg-black/50 p-6 backdrop-blur-sm">
                                    <div className="mb-2 flex items-center gap-2">
                                        <div className="h-2 w-2 animate-pulse bg-cyan-500"></div>
                                        <span className="font-mono text-xs text-cyan-500">SYSTEM.WARNING</span>
                                    </div>
                                    <p className="font-mono text-sm leading-relaxed text-gray-300">
                                        The aesthetic emerged from 1980s science fiction, blending noir elements with dystopian futurism to
                                        create a visual language of resistance against technological control.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -right-20 top-20 h-40 w-40 rounded-full border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-fuchsia-500/5 backdrop-blur-3xl"></div>
                <div className="absolute -left-10 bottom-10 h-20 w-20 rounded-full border border-fuchsia-500/20 bg-gradient-to-br from-fuchsia-500/5 to-cyan-500/5 backdrop-blur-3xl"></div>
            </section>

            {/* Manifesto Section */}
            <section id="manifesto" className="relative border-t border-cyan-500/30 bg-black/80 px-6 py-16 backdrop-blur-sm">
                <div className="relative z-10 mx-auto max-w-5xl">
                    <div className="mb-8 inline-block">
                        <div className="relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-fuchsia-500 opacity-30 blur"></div>
                            <h2 className="relative bg-black px-4 py-2 font-mono text-3xl font-bold uppercase tracking-wider text-white md:text-4xl">
                                <span className="text-cyan-500">&gt;</span> MANIFESTO
                            </h2>
                        </div>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        <div className="col-span-2 border border-cyan-500/30 bg-black/50 p-6 backdrop-blur-sm">
                            <div className="mb-4 flex items-center gap-2">
                                <div className="h-px flex-1 bg-gradient-to-r from-cyan-500 to-transparent"></div>
                                <span className="font-mono text-xs text-cyan-500">CORE.PRINCIPLES</span>
                                <div className="h-px flex-1 bg-gradient-to-l from-cyan-500 to-transparent"></div>
                            </div>
                            <p className="mb-4 font-mono text-sm leading-relaxed text-gray-300">
                                Cyberpunk design is a visual rebellion against sanitized corporate aesthetics. It embraces the glitch,
                                the broken, and the hacked as symbols of resistance against technological control.
                            </p>
                            <p className="font-mono text-sm leading-relaxed text-gray-300">
                                The style emerged as a response to the optimistic futurism of the 1950s and 60s, replacing it with a
                                gritty realism that acknowledges technology&#39;s potential for both liberation and oppression.
                            </p>

                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10"></div>
                            <div className="relative h-full border border-cyan-500/30 bg-black/70 p-6">
                                <div className="mb-2 flex items-center gap-2">
                                    <div className="h-2 w-2 animate-pulse bg-fuchsia-500"></div>
                                    <span className="font-mono text-xs text-fuchsia-500">QUOTE.SYS</span>
                                </div>
                                <p className="font-mono text-sm italic leading-relaxed text-gray-300">
                                    &quot;The future is already here — it&#39;s just not evenly distributed.&quot;
                                </p>
                                <p className="mt-2 text-right font-mono text-xs text-fuchsia-500">— William Gibson</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-1 md:grid-cols-4">
                        {["RESISTANCE", "DECAY", "TECHNOLOGY", "REBELLION"].map((item, index) => (
                            <div
                                key={index}
                                className="border border-cyan-500/30 bg-black/50 p-4 backdrop-blur-sm transition-colors hover:bg-cyan-500/10"
                            >
                                <h3 className="mb-2 font-mono text-lg font-bold text-cyan-500">{item}</h3>
                                <div className="h-px w-12 bg-gradient-to-r from-cyan-500 to-transparent"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -right-10 bottom-10 h-40 w-40 rounded-full border border-fuchsia-500/10 bg-gradient-to-br from-fuchsia-500/5 to-cyan-500/5 backdrop-blur-3xl"></div>
            </section>

            {/* Aesthetics Section */}
            <section id="aesthetics" className="relative border-t border-cyan-500/30 px-6 py-16">
                <div className="relative z-10 mx-auto max-w-5xl">
                    <div className="mb-12 text-center">
                        <h2
                            className="font-mono text-4xl font-black uppercase tracking-tighter text-white md:text-5xl"
                            style={{
                                textShadow: "0 0 10px rgba(0, 255, 255, 0.5), 0 0 20px rgba(0, 255, 255, 0.3)",
                            }}
                        >
                            AESTHETIC ELEMENTS
                        </h2>
                        <div className="mx-auto mt-2 h-px w-40 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {/* Element 1 */}
                        <div className="group relative overflow-hidden border border-cyan-500/30 bg-black/50 backdrop-blur-sm transition-colors hover:bg-cyan-900/20">
                            <div className="absolute -right-4 -top-4 h-12 w-12 bg-cyan-500/20"></div>
                            <div className="p-6">
                                <h3 className="mb-4 font-mono text-xl font-bold text-cyan-400">NEON PALETTE</h3>
                                <p className="font-mono text-sm leading-relaxed text-gray-300">
                                    Electric blues, acid greens, hot pinks, and deep purples that evoke the glow of neon signs in
                                    rain-slick streets.
                                </p>
                                <div className="mt-4 flex gap-2">
                                    <div className="h-4 w-8 bg-cyan-500"></div>
                                    <div className="h-4 w-8 bg-fuchsia-500"></div>
                                    <div className="h-4 w-8 bg-green-500"></div>
                                    <div className="h-4 w-8 bg-purple-500"></div>
                                </div>
                            </div>
                        </div>

                        {/* Element 2 */}
                        <div className="group relative overflow-hidden border border-cyan-500/30 bg-black/50 backdrop-blur-sm transition-colors hover:bg-cyan-900/20">
                            <div className="absolute -left-4 -top-4 h-12 w-12 bg-fuchsia-500/20"></div>
                            <div className="p-6">
                                <h3 className="mb-4 font-mono text-xl font-bold text-cyan-400">DIGITAL GLITCH</h3>
                                <p className="font-mono text-sm leading-relaxed text-gray-300">
                                    Visual corruption, static, and distortion that represent the breakdown of digital systems and reality
                                    itself.
                                </p>
                                <div
                                    className="mt-4 h-2 w-full"
                                    style={{
                                        background:
                                            "linear-gradient(90deg, rgba(0,255,255,1) 0%, rgba(255,0,255,1) 25%, rgba(0,0,0,1) 50%, rgba(0,255,255,1) 75%, rgba(255,0,255,1) 100%)",
                                    }}
                                ></div>
                            </div>
                        </div>

                        {/* Element 3 */}
                        <div className="group relative overflow-hidden border border-cyan-500/30 bg-black/50 backdrop-blur-sm transition-colors hover:bg-cyan-900/20">
                            <div className="absolute -right-4 -top-4 h-12 w-12 bg-green-500/20"></div>
                            <div className="p-6">
                                <h3 className="mb-4 font-mono text-xl font-bold text-cyan-400">TECH INTERFACES</h3>
                                <p className="font-mono text-sm leading-relaxed text-gray-300">
                                    Command lines, wireframes, and holographic displays that suggest advanced but accessible technology.
                                </p>
                                <div className="mt-4 font-mono text-xs text-green-500">
                                    &gt; SYSTEM.ACCESS_GRANTED
                                    <span className="animate-pulse">_</span>
                                </div>
                            </div>
                        </div>

                        {/* Element 4 */}
                        <div className="group relative overflow-hidden border border-cyan-500/30 bg-black/50 backdrop-blur-sm transition-colors hover:bg-cyan-900/20">
                            <div className="absolute -left-4 -top-4 h-12 w-12 bg-purple-500/20"></div>
                            <div className="p-6">
                                <h3 className="mb-4 font-mono text-xl font-bold text-cyan-400">URBAN DECAY</h3>
                                <p className="font-mono text-sm leading-relaxed text-gray-300">
                                    Gritty textures, industrial elements, and architectural density that reflect societal breakdown.
                                </p>
                                <div className="mt-4 grid grid-cols-4 gap-1">
                                    <div className="h-4 bg-gray-700"></div>
                                    <div className="h-6 bg-gray-600"></div>
                                    <div className="h-8 bg-gray-800"></div>
                                    <div className="h-5 bg-gray-500"></div>
                                </div>
                            </div>
                        </div>

                        {/* Element 5 */}
                        <div className="group relative overflow-hidden border border-cyan-500/30 bg-black/50 backdrop-blur-sm transition-colors hover:bg-cyan-900/20">
                            <div className="absolute -right-4 -top-4 h-12 w-12 bg-blue-500/20"></div>
                            <div className="p-6">
                                <h3 className="mb-4 font-mono text-xl font-bold text-cyan-400">TYPOGRAPHY</h3>
                                <p className="font-mono text-sm leading-relaxed text-gray-300">
                                    Monospaced fonts, broken letterforms, and multilingual text that suggest global digital culture.
                                </p>
                                <div className="mt-4">
                                    <span className="font-mono text-xs text-cyan-500">サイバーパンク</span>
                                </div>
                            </div>
                        </div>

                        {/* Element 6 */}
                        <div className="group relative overflow-hidden border border-cyan-500/30 bg-black/50 backdrop-blur-sm transition-colors hover:bg-cyan-900/20">
                            <div className="absolute -left-4 -top-4 h-12 w-12 bg-red-500/20"></div>
                            <div className="p-6">
                                <h3 className="mb-4 font-mono text-xl font-bold text-cyan-400">HUMAN/MACHINE</h3>
                                <p className="font-mono text-sm leading-relaxed text-gray-300">
                                    Visual elements that blur the line between organic and synthetic, reflecting transhumanism.
                                </p>
                                <div className="mt-4 flex items-center gap-2">
                                    <div className="h-4 w-4 rounded-full bg-red-500"></div>
                                    <div className="h-px flex-1 bg-gradient-to-r from-red-500 to-cyan-500"></div>
                                    <div className="h-4 w-4 bg-cyan-500"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -left-20 top-40 h-40 w-40 rounded-full border border-cyan-500/10 bg-gradient-to-br from-cyan-500/5 to-fuchsia-500/5 backdrop-blur-3xl"></div>
            </section>

            {/* Tech Section */}
            <section id="tech" className="relative border-t border-cyan-500/30 bg-black/80 px-6 py-16 backdrop-blur-sm">
                <div className="relative z-10 mx-auto max-w-5xl">
                    <div className="mb-8 flex items-center gap-4">
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-cyan-500"></div>
                        <h2 className="font-mono text-3xl font-bold uppercase text-white md:text-4xl">
                            <span className="text-cyan-500">&lt;</span> TECH INFLUENCE <span className="text-cyan-500">/&gt;</span>
                        </h2>
                        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-cyan-500"></div>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2">
                        <div className="relative">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-fuchsia-500 opacity-30 blur"></div>
                            <div className="relative border border-cyan-500/30 bg-black/70 p-6">
                                <div className="mb-4 flex items-center gap-2">
                                    <div className="h-2 w-2 animate-pulse bg-cyan-500"></div>
                                    <span className="font-mono text-xs text-cyan-500">TECH.EVOLUTION</span>
                                </div>
                                <p className="mb-4 font-mono text-sm leading-relaxed text-gray-300">
                                    Cyberpunk design draws from real technological developments, extrapolating them into dystopian futures
                                    where innovation has outpaced ethical considerations.
                                </p>
                                <p className="font-mono text-sm leading-relaxed text-gray-300">
                                    The aesthetic incorporates elements of early computing, hacker culture, analog technology, and
                                    cutting-edge digital interfaces to create a visual language that feels both retro and futuristic.
                                </p>
                            </div>
                        </div>

                        <div className="grid gap-4">
                            <div className="border border-cyan-500/30 bg-black/50 p-6 backdrop-blur-sm">
                                <h3 className="mb-2 font-mono text-lg font-bold text-cyan-400">DIGITAL REBELLION</h3>
                                <p className="font-mono text-sm leading-relaxed text-gray-300">
                                    Cyberpunk design celebrates the hacker ethos of repurposing technology against its intended use,
                                    visualizing resistance through digital means.
                                </p>
                            </div>
                            <div className="border border-cyan-500/30 bg-black/50 p-6 backdrop-blur-sm">
                                <h3 className="mb-2 font-mono text-lg font-bold text-cyan-400">ANALOG MEETS DIGITAL</h3>
                                <p className="font-mono text-sm leading-relaxed text-gray-300">
                                    The juxtaposition of cutting-edge digital elements with analog technology creates the distinctive
                                    retro-futuristic feel of cyberpunk design.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-1 md:grid-cols-3">
                        <div className="col-span-1 border border-cyan-500/30 bg-black/50 p-6 backdrop-blur-sm md:col-span-2">
                            <div className="mb-4 font-mono text-xs text-cyan-500">TECH.VISUALIZATION</div>
                            <div className="grid grid-cols-3 gap-2">
                                <div className="h-20 border border-cyan-500/30 bg-cyan-500/10"></div>
                                <div className="h-20 border border-fuchsia-500/30 bg-fuchsia-500/10"></div>
                                <div className="h-20 border border-green-500/30 bg-green-500/10"></div>
                            </div>
                        </div>
                        <div className="border border-cyan-500/30 bg-black/50 p-6 backdrop-blur-sm">
                            <div className="mb-4 font-mono text-xs text-cyan-500">SYSTEM.STATUS</div>
                            <div className="font-mono text-sm text-green-500">
                                <div>MEMORY: 87% USED</div>
                                <div>CPU: OVERCLOCKED</div>
                                <div>SECURITY: BREACHED</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -right-10 bottom-10 h-40 w-40 rounded-full border border-fuchsia-500/10 bg-gradient-to-br from-fuchsia-500/5 to-cyan-500/5 backdrop-blur-3xl"></div>
            </section>

            {/* Future Section */}
            <section id="future" className="relative border-t border-cyan-500/30 px-6 py-16">
                <div className="relative z-10 mx-auto max-w-5xl">
                    <div className="mb-12">
                        <h2
                            className="font-mono text-4xl font-black uppercase tracking-tighter text-white md:text-5xl"
                            style={{
                                textShadow: "0 0 10px rgba(0, 255, 255, 0.5), 0 0 20px rgba(0, 255, 255, 0.3)",
                            }}
                        >
                            FUTURE VISIONS
                        </h2>
                        <div className="mt-2 h-1 w-32 bg-gradient-to-r from-cyan-500 to-fuchsia-500"></div>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        <div className="col-span-2">
                            <div className="border border-cyan-500/30 bg-black/50 p-6 backdrop-blur-sm">
                                <div className="mb-4 flex items-center gap-2">
                                    <div className="h-px flex-1 bg-gradient-to-r from-cyan-500 to-transparent"></div>
                                    <span className="font-mono text-xs text-cyan-500">EVOLUTION.TRAJECTORY</span>
                                    <div className="h-px flex-1 bg-gradient-to-l from-cyan-500 to-transparent"></div>
                                </div>
                                <p className="mb-4 font-mono text-sm leading-relaxed text-gray-300">
                                    Cyberpunk design continues to evolve, incorporating new technological developments like artificial
                                    intelligence, augmented reality, and biotechnology into its visual language.
                                </p>
                                <p className="font-mono text-sm leading-relaxed text-gray-300">
                                    As our real world increasingly resembles cyberpunk fiction, the aesthetic shifts from pure speculation
                                    to critical commentary on present conditions, blurring the line between dystopian warning and
                                    documentary style.
                                </p>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10"></div>
                            <div className="relative h-full border border-cyan-500/30 bg-black/70 p-6">
                                <div className="mb-2 flex items-center gap-2">
                                    <div className="h-2 w-2 animate-pulse bg-fuchsia-500"></div>
                                    <span className="font-mono text-xs text-fuchsia-500">PREDICTION.SYS</span>
                                </div>
                                <p className="font-mono text-sm italic leading-relaxed text-gray-300">
                                    &quot;The future of cyberpunk design lies not in its aesthetic trappings but in its ability to critique the
                                    present through the lens of a speculative future.&quot;
                                </p>
                                <div className="mt-4 font-mono text-xs text-fuchsia-500">SYSTEM.ANALYSIS_COMPLETE</div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="border border-cyan-500/30 bg-black/50 p-6 backdrop-blur-sm">
                            <h3 className="mb-4 font-mono text-xl font-bold text-cyan-400">EMERGING TRENDS</h3>
                            <ul className="space-y-2 font-mono text-sm text-gray-300">
                                <li className="flex items-center gap-2">
                                    <div className="h-1 w-1 bg-cyan-500"></div>
                                    <span>Biohacking aesthetics and wetware interfaces</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="h-1 w-1 bg-cyan-500"></div>
                                    <span>AR/VR integration with physical environments</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="h-1 w-1 bg-cyan-500"></div>
                                    <span>Climate crisis and eco-cyberpunk visuals</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="h-1 w-1 bg-cyan-500"></div>
                                    <span>Post-human and AI-generated aesthetics</span>
                                </li>
                            </ul>
                        </div>
                        <div className="border border-cyan-500/30 bg-black/50 p-6 backdrop-blur-sm">
                            <h3 className="mb-4 font-mono text-xl font-bold text-cyan-400">DESIGN APPLICATIONS</h3>
                            <ul className="space-y-2 font-mono text-sm text-gray-300">
                                <li className="flex items-center gap-2">
                                    <div className="h-1 w-1 bg-fuchsia-500"></div>
                                    <span>User interfaces for emerging technologies</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="h-1 w-1 bg-fuchsia-500"></div>
                                    <span>Environmental design for physical spaces</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="h-1 w-1 bg-fuchsia-500"></div>
                                    <span>Fashion and wearable technology</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="h-1 w-1 bg-fuchsia-500"></div>
                                    <span>Critical design and speculative futures</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -left-20 bottom-20 h-40 w-40 rounded-full border border-cyan-500/10 bg-gradient-to-br from-cyan-500/5 to-fuchsia-500/5 backdrop-blur-3xl"></div>
            </section>

            {/* Call to Action */}
            <section className="relative border-t border-cyan-500/30 bg-black/80 px-6 py-16 backdrop-blur-sm">
                <div className="relative z-10 mx-auto max-w-5xl text-center">
                    <h2 className="mb-6 font-mono text-4xl font-black uppercase text-white">
                        <span className="text-cyan-500">&gt;</span> JOIN THE RESISTANCE
                    </h2>
                    <p className="mb-8 font-mono text-xl text-gray-300">Explore the digital underground</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button className="relative overflow-hidden border border-cyan-500 bg-transparent font-mono hover:bg-cyan-500/20">
                            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10"></span>
                            <span className="relative">ENTER THE MATRIX</span>
                        </Button>
                        <Button className="relative overflow-hidden border border-fuchsia-500 bg-transparent font-mono hover:bg-fuchsia-500/20">
                            <span className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/10 to-cyan-500/10"></span>
                            <span className="relative">HACK THE SYSTEM</span>
                        </Button>
                    </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -right-10 top-10 h-20 w-20 rounded-full border border-fuchsia-500/20 bg-gradient-to-br from-fuchsia-500/5 to-cyan-500/5 backdrop-blur-3xl"></div>
            </section>

            {/* Footer */}
            <footer className="border-t border-cyan-500/30 bg-black px-6 py-8">
                <div className="mx-auto max-w-5xl">
                    <div className="mb-6 grid grid-cols-3 gap-1">
                        <div className="h-px bg-cyan-500"></div>
                        <div className="h-px bg-fuchsia-500"></div>
                        <div className="h-px bg-green-500"></div>
                    </div>
                    <div className="grid gap-8 md:grid-cols-2">
                        <div>
                            <h3 className="mb-4 font-mono text-xl font-bold text-cyan-500">CYBER//PUNK</h3>
                            <p className="font-mono text-sm text-gray-400">
                                A visual exploration of dystopian cyberpunk design principles and aesthetics.
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-start gap-4 md:justify-end">
                            <Link href="#" className="font-mono text-sm text-gray-400 hover:text-cyan-500">
                                MANIFESTO
                            </Link>
                            <Link href="#" className="font-mono text-sm text-gray-400 hover:text-cyan-500">
                                AESTHETICS
                            </Link>
                            <Link href="#" className="font-mono text-sm text-gray-400 hover:text-cyan-500">
                                TECH
                            </Link>
                            <Link href="#" className="font-mono text-sm text-gray-400 hover:text-cyan-500">
                                FUTURE
                            </Link>
                        </div>
                    </div>
                    <div className="mt-8 text-center font-mono text-xs text-gray-500">
                        <p>© 2025 CYBER//PUNK COLLECTIVE. ALL RIGHTS RESERVED.</p>
                        <p className="mt-1 text-cyan-500/50">
                            <span className="animate-pulse">█</span> SYSTEM.SHUTDOWN_IMMINENT
                            <span className="animate-pulse">_</span>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
