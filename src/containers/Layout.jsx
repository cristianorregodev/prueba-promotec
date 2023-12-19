import { Navbar } from '../components/Navbar'

export const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className="max-w-5xl mx-auto">{children}</div>
        </>
    )
}
