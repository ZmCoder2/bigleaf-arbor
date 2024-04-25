import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="App">
            {/* <Navbar /> */}
            <div className="page">
            
            <Outlet />
                {/* <Footer /> */}
            </div>
        </div>
    )
}

export default Layout;