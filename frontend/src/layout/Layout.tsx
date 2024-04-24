
import Hero from "@/components/Hero"
import Header from "../components/Header"
import Footer from "@/components/Footer"

type Props = {
  children:React.ReactNode
}
const Layout = ({ children }:Props) => {
  return (
    <div className='flex flex-col min-h-screen'>
        <Header/>
        <Hero/>
        <div className='container mx-auto p-10 flex-1'>{children}</div>
        <Footer/>
    </div>
      )
}

export default Layout

