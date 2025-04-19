import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

export default function BrutalistPage() {
  return (
    <>
      {/* Navigation */}
      <nav className="border-b-2 border-white p-4">
        <div className="flex items-center justify-between">
          <div className="h-6 w-6 bg-white"></div>
          <p className="font-mono text-xs uppercase tracking-widest">BRUTALISM</p>
          <Button
            variant="outline"
            className="border-2 border-white bg-transparent font-mono text-xs uppercase tracking-widest text-white hover:bg-white hover:text-black"
          >
            MENU
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="border-b-2 border-white p-4 md:p-8">
        <h1 className="font-mono text-6xl font-bold uppercase tracking-tighter md:text-8xl lg:text-9xl">
          BRUT
          <br />
          ALISM
        </h1>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="border-2 border-white p-4">
            <p className="font-mono text-sm uppercase md:text-base">RAW. HONEST. FUNCTIONAL.</p>
          </div>
          <div className="border-2 border-white bg-white p-4">
            <p className="font-mono text-sm uppercase text-black md:text-base">DESIGN WITHOUT DECORATION</p>
          </div>
        </div>
      </section>

      {/* Definition Section */}
      <section className="grid grid-cols-1 border-b-2 border-white md:grid-cols-3">
        <div className="border-r-0 border-white p-4 md:border-r-2 md:p-8">
          <h2 className="font-mono text-xl uppercase md:text-2xl">WHAT IS BRUTALISM?</h2>
        </div>
        <div className="col-span-2 p-4 md:p-8">
          <p className="font-mono text-sm md:text-base">
            Brutalism is a design philosophy that emerged in the 1950s, characterized by raw, unpolished aesthetics and
            exposed structural elements. In digital design, it translates to bold typography, high contrast, monospaced
            fonts, and functional layouts that reject conventional beauty standards in favor of honest expression.
          </p>
        </div>
      </section>

      {/* Principles Section */}
      <section className="border-b-2 border-white">
        <div className="border-b-2 border-white p-4 md:p-8">
          <h2 className="font-mono text-4xl uppercase md:text-5xl lg:text-6xl">PRINCIPLES</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="border-b-2 border-r-0 border-white p-4 md:border-b-0 md:border-r-2 md:p-8">
            <h3 className="font-mono text-xl uppercase">01. RAWNESS</h3>
            <p className="mt-4 font-mono text-sm">
              Embracing unpolished aesthetics and exposing the structural elements of design.
            </p>
          </div>
          <div className="border-b-2 border-white p-4 md:border-b-0 md:p-8">
            <h3 className="font-mono text-xl uppercase">02. CONTRAST</h3>
            <p className="mt-4 font-mono text-sm">Using stark visual differences to create impact and hierarchy.</p>
          </div>
          <div className="border-b-2 border-r-0 border-white p-4 md:border-b-0 md:border-r-2 md:p-8">
            <h3 className="font-mono text-xl uppercase">03. FUNCTIONALITY</h3>
            <p className="mt-4 font-mono text-sm">Prioritizing purpose and function over decorative elements.</p>
          </div>
          <div className="border-b-2 border-white p-4 md:border-b-0 md:p-8">
            <h3 className="font-mono text-xl uppercase">04. TYPOGRAPHY</h3>
            <p className="mt-4 font-mono text-sm">Bold, oversized text treatments that command attention.</p>
          </div>
        </div>
      </section>

      {/* Example Card Section */}
      <section className="grid grid-cols-1 border-b-2 border-white md:grid-cols-3">
        <div className="col-span-1 border-b-2 border-r-0 border-white p-4 md:border-b-0 md:border-r-2 md:p-8">
          <h2 className="font-mono text-xl uppercase md:text-2xl">EXAMPLE</h2>
          <p className="mt-4 font-mono text-sm">
            This card demonstrates brutalist design principles with raw edges, high contrast, and functional elements.
          </p>
        </div>
        <div className="col-span-2 flex items-center justify-center p-8">
          <Card className="w-full max-w-md border-2 border-white bg-black text-white shadow-none">
            <CardHeader className="border-b-2 border-white p-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="h-4 w-4 bg-white"></div>
                  <p className="font-mono text-xs uppercase tracking-widest">BRUTALIST</p>
                </div>
                <h2 className="font-mono text-2xl uppercase tracking-tight">RAW DESIGN</h2>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <p className="font-mono text-sm">
                  Brutalist design embraces raw materials and structural elements over decorative design. This aesthetic
                  celebrates the unpolished and functional.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="border border-white p-2">
                    <p className="font-mono text-xs uppercase">MINIMAL</p>
                  </div>
                  <div className="border border-white bg-white p-2">
                    <p className="font-mono text-xs uppercase text-black">CONTRAST</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <Separator className="h-0.5 bg-white" />
            <CardFooter className="flex items-center justify-between p-6">
              <Button
                variant="outline"
                className="border-2 border-white bg-transparent font-mono text-xs uppercase tracking-widest text-white hover:bg-white hover:text-black"
              >
                EXPLORE
              </Button>
              <p className="font-mono text-xs uppercase">01/01</p>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Asymmetrical Layout Section */}
      <section className="grid grid-cols-1 border-b-2 border-white md:grid-cols-12">
        <div className="col-span-8 border-b-2 border-white p-4 md:border-b-0 md:border-r-2 md:p-8">
          <h2 className="font-mono text-3xl uppercase md:text-4xl">DIGITAL BRUTALISM</h2>
          <p className="mt-4 font-mono text-sm md:text-base">
            In web design, brutalism rejects the polished, user-friendly interfaces in favor of raw, honest
            presentations. It embraces asymmetry, unconventional navigation, and exposed structural elements.
          </p>
        </div>
        <div className="col-span-4 grid grid-cols-1">
          <div className="border-b-2 border-white bg-white p-4 md:p-8">
            <p className="font-mono text-sm uppercase text-black md:text-base">ANTI-DESIGN</p>
          </div>
          <div className="p-4 md:p-8">
            <p className="font-mono text-sm uppercase md:text-base">HONEST EXPRESSION</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="p-4 md:p-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <h2 className="font-mono text-4xl uppercase md:text-5xl">EMBRACE THE RAW</h2>
          </div>
          <div className="flex items-end justify-end">
            <Button className="border-2 border-white bg-white font-mono text-lg uppercase text-black hover:bg-transparent hover:text-white">
              EXPLORE MORE
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-8 border-t-2 border-white p-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div>
            <p className="font-mono text-xs uppercase">© 2025 BRUTALISM</p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase">RAW. HONEST. FUNCTIONAL.</p>
          </div>
          <div className="flex justify-start md:justify-end">
            <Link href="#" className="font-mono text-xs uppercase hover:underline">
              BACK TO TOP
            </Link>
          </div>
        </div>
      </footer>
    </>
  )
}
