import { Outlet } from "react-router-dom"
import  Header  from "../components/Header/Header"
import { Nav } from "../components/Nav/Nav"

export const MainLayout = () => {
    return (
    <>
       <Header />
       <Nav />
        <div className="main-layout">
            <Outlet />
        </div>
    </>
    );
}
