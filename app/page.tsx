'use client'

import React from 'react'
import BrutalistCard from './(ui)/BrutalistCard'
import CyberpunkCard from './(ui)/CyberpunkCard'
import { SignedOut, SignUpButton } from '@clerk/nextjs'

const Home = () => {
  return (
    <>
      <SignedOut>
        <header className="border-b-2 border-white p-4">
          <div className="flex items-center justify-between">
            <div className="h-6 w-6 bg-white"></div>
            <SignUpButton>
              <button className=" hover:text-white hover:bg-black px-3 py-1 rounded border-2 text-sm font-mono text-black bg-white cursor-pointer uppercase">
                Sign Up
              </button>
            </SignUpButton>
          </div>
        </header>
      </SignedOut>
      <div className="flex items-center justify-center min-h-[calc(100vh-6rem)] px-4 py-8 sm:py-12">
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
          <BrutalistCard />
          <CyberpunkCard />
        </div>
      </div>

    </>
  )
}

export default Home