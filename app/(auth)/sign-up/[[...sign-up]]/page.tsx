import { SignUp } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import React from 'react'

const Page = () => {
    return (
        <SignUp
            appearance={{
                baseTheme: dark,
            }} />
    )
}

export default Page