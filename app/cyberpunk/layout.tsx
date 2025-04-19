
const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <div className="relative min-h-screen overflow-hidden bg-black text-white">
            {children}
        </div>
    )
}

export default layout
