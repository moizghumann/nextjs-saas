"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useRouter } from "next/navigation"

export default function CyberpunkCard() {
    const [glitchActive, setGlitchActive] = useState(false)
    const [scanlineOpacity, setScanlineOpacity] = useState(0.15)
    const router = useRouter();

    useEffect(() => {
        // Random glitch effect
        const glitchInterval = setInterval(
            () => {
                setGlitchActive(true)
                setTimeout(() => setGlitchActive(false), 150)
            },
            Math.random() * 4000 + 2000,
        )

        // Random scanline opacity changes
        const scanlineInterval = setInterval(
            () => {
                setScanlineOpacity(Math.random() * 0.1 + 0.1)
            },
            Math.random() * 3000 + 1000,
        )

        return () => {
            clearInterval(glitchInterval)
            clearInterval(scanlineInterval)
        }
    }, [])

    return (
        // <div className="flex min-h-screen items-center justify-center bg-black p-4">
        <div className="relative w-full max-w-md">
            {/* Glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-fuchsia-500 opacity-30 blur"></div>

            <Card
                className={`relative w-full overflow-hidden border-4 border-cyan-500/50 bg-black text-white shadow-none ${glitchActive ? "translate-x-[1px] skew-x-1" : ""
                    }`}
            >
                {/* Scanlines overlay */}
                <div
                    className="pointer-events-none absolute inset-0 z-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPgogIDxkZWZzPgogICAgPHBhdHRlcm4KICAgICAgaWQ9InNjYW5saW5lcyIKICAgICAgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIKICAgICAgd2lkdGg9IjEwMCUiCiAgICAgIGhlaWdodD0iNCIKICAgICAgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDkwKSIKICAgID4KICAgICAgPGxpbmUKICAgICAgICB4MT0iMCIKICAgICAgICB5MT0iMCIKICAgICAgICB4Mj0iMCIKICAgICAgICB5Mj0iNCIKICAgICAgICBzdHlsZT0ic3Ryb2tlOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpOyBzdHJva2Utd2lkdGg6IDI7IgogICAgICAvPgogICAgPC9wYXR0ZXJuPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3NjYW5saW5lcykiIC8+Cjwvc3ZnPg==')]"
                    style={{ opacity: scanlineOpacity }}
                ></div>

                {/* CRT flicker effect */}
                <div
                    className={`pointer-events-none absolute inset-0 z-20 bg-cyan-500 mix-blend-overlay transition-opacity duration-100 ${glitchActive ? "opacity-10" : "opacity-0"
                        }`}
                ></div>

                <CardHeader className="relative border-b border-cyan-500/30 px-6">
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="h-4 w-4 animate-pulse bg-cyan-500"></div>
                                <div
                                    className={`h-2 w-2 rounded-full bg-green-500 ${glitchActive ? "bg-red-500" : "bg-green-500"}`}
                                ></div>
                            </div>
                            <p className="font-mono text-xs uppercase tracking-widest text-cyan-400">
                                CYBER<span className="text-fuchsia-400">//</span>ID
                            </p>
                        </div>
                        <div className="flex items-center justify-between">
                            <h2
                                className={`font-mono text-2xl uppercase tracking-tight ${glitchActive ? "text-fuchsia-400" : "text-white"
                                    }`}
                                style={{
                                    textShadow: "0 0 5px rgba(0, 255, 255, 0.5)",
                                }}
                            >
                                NEURAL_LINK
                            </h2>
                            <div className="font-mono text-xs text-gray-400">
                                <span className="text-cyan-400">SYS.</span>
                                {glitchActive ? "OFFLINE" : "ONLINE"}
                            </div>
                        </div>
                    </div>
                </CardHeader>

                <CardContent className="relative p-6">
                    <div className="space-y-4">
                        <div className="relative">
                            <div className="absolute -left-2 top-0 h-full w-1 bg-gradient-to-b from-cyan-500 to-fuchsia-500"></div>
                            <p className="font-mono text-sm text-gray-300">
                                Neural interface technology enables direct brain-computer connections, allowing users to access the
                                digital realm through thought alone. This cybernetic augmentation represents the ultimate fusion of
                                human and machine.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                            <div className="border border-cyan-500/30 bg-black/50 p-2 backdrop-blur-sm">
                                <div className="mb-1 font-mono text-xs text-cyan-400">ACCESS_LEVEL</div>
                                <p className="font-mono text-xs uppercase text-white">LEVEL_4</p>
                            </div>
                            <div className="border border-fuchsia-500/30 bg-black/50 p-2 backdrop-blur-sm">
                                <div className="mb-1 font-mono text-xs text-fuchsia-400">ENCRYPTION</div>
                                <p className="font-mono text-xs uppercase text-white">QUANTUM</p>
                            </div>
                        </div>

                        <div className="h-2 w-full bg-gradient-to-r from-cyan-500/20 via-fuchsia-500/20 to-cyan-500/20">
                            <div className="h-full bg-gradient-to-r from-cyan-500 to-fuchsia-500" style={{ width: "67%" }}></div>
                        </div>
                    </div>
                </CardContent>

                <Separator className="h-0.5 bg-gradient-to-r from-cyan-500/50 via-fuchsia-500/50 to-cyan-500/50" />

                <CardFooter className="flex items-center justify-between px-6 py-1">
                    <Button
                        variant="outline"
                        className="relative border border-cyan-500 bg-transparent font-mono text-xs uppercase tracking-widest text-cyan-400 transition-colors hover:bg-cyan-950 hover:text-cyan-300 cursor-pointer"
                        onClick={() => router.push('/cyberpunk')}
                    >
                        <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 opacity-0 transition-opacity hover:opacity-100"></span>
                        <span className="relative">ACTIVATE</span>
                    </Button>
                    <div className="flex flex-col items-end">
                        <p className="font-mono text-xs uppercase text-gray-400">
                            ID<span className="text-cyan-400">:</span>
                            <span className={glitchActive ? "text-fuchsia-400" : "text-white"}>0xF7A93D</span>
                        </p>
                        <p className="font-mono text-xs text-gray-500">
                            <span className="animate-pulse">█</span>
                        </p>
                    </div>
                </CardFooter>
            </Card>
        </div>
        // </div>
    )
}
