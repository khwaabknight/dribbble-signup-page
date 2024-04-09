import { useState } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import Overlay from "../components/common/Overlay"

type HomeLayoutProps = {
  children: React.ReactNode
}

function HomeLayout({children} : HomeLayoutProps) {
  const [showSidebar, setShowSidebar] = useState(false);
  const openHandler = () => setShowSidebar(true);
  const closeHandler = () => setShowSidebar(false);
  return (
    <>
        <div className="relative">
            <Navbar openSideBar={openHandler}/>
            {children}
            {/* <Footer /> */}
            
            <Overlay showOverlay={showSidebar} closeHandler={closeHandler} >
              <Sidebar showSidebar={showSidebar} closeHandler={closeHandler}/>
            </Overlay>
           
        </div>
    </>
  )
}

export default HomeLayout