'use client'

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useRouter } from 'next/navigation'

export default function BrutalistCard() {
  const router = useRouter();

  return (
    <Card className="w-full max-w-md border-2 border-white bg-[#161618] text-white shadow-none">
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
              <p className="font-mono text-xs uppercase text-[#161618]">CONTRAST</p>
            </div>
          </div>
        </div>
      </CardContent>
      <Separator className="h-0.5 bg-white" />
      <CardFooter className="flex items-center justify-between p-6">
        <Button
          variant="outline"
          className="border-2 border-white bg-transparent font-mono text-xs uppercase tracking-widest text-white hover:bg-white hover:text-[#161618] cursor-pointer"
          onClick={() => router.push('/brutalism')}
        >
          EXPLORE
        </Button>
        <p className="font-mono text-xs uppercase">01/01</p>
      </CardFooter>
    </Card>
  )
}
