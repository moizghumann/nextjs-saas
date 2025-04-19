import React from "react"

const SignInLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode
}>) => {
    return (
        <div className="flex min-h-screen items-center justify-center">
            {children}
        </div>
    )
}

export default SignInLayout