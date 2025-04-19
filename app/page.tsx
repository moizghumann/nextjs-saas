'use client'

import React from 'react'
import BrutalistCard from './(ui)/BrutalistCard'
import CyberpunkCard from './(ui)/CyberpunkCard'

const Home = () => {
  return (
    <div className="flex items-center min-h-screen justify-center">
      <div className="flex items-center justify-center gap-3.5">
        <BrutalistCard />
        <CyberpunkCard />
      </div>
    </div>
  )
}

export default Home