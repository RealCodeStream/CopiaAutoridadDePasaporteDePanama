import Navbar from "../../components/NavBar/Navbar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";



const Layout = () => {

const location = useLocation();

 
  const hideNavbarRoutes = ["/certificacionform"];
const hideHeaderRoutes = []; 

const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);
const shouldHideHeader = hideHeaderRoutes.includes(location.pathname);

return (
  <div>
    {!shouldHideHeader && <Header />}
    {!shouldHideNavbar && <Navbar />}
      
    <main>
      <Outlet />
      
    </main>
    {!shouldHideNavbar && <Footer />}
  </div>
  
  );
        
    
}

export default Layout;