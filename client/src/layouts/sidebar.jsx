import { Routes, Route } from "react-router-dom";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { IconButton } from "@material-tailwind/react";
import {
  Sidenav,
  DashboardNavbar,
  Configurator,
  Footer,
} from "../widgets/layout";
import sidRoutes from "../sidRoutes";
import { useMaterialTailwindController, setOpenConfigurator } from "../context";

import { useCookies } from 'react-cookie'
import Login from "../Components/auth/Login";


export function SideBar() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavType } = controller;
  
  const [cookies, setCookies] = useCookies("access_token")

  return (
    <>
     {
      cookies.access_token
        
   ? 
    <>
    <div className="min-h-screen " id="bg-home">
      <Sidenav
        routes={sidRoutes}
        brandImg={
          sidenavType === "dark" ? "/img/user.avif" : "/img/logo-ct-dark.png"
        }
      />
      <div className="p-4 xl:ml-80">
        <DashboardNavbar />
        <Configurator />
        <IconButton
          size="lg"
          color="white"
          className="fixed bottom-8 right-8 z-40 rounded-full shadow-blue-gray-900/10"
          ripple={false}
          onClick={() => setOpenConfigurator(dispatch, true)}
        >
          <Cog6ToothIcon className="h-5 w-5" />
        </IconButton>
        <Routes>
          {sidRoutes.map(
            ({ layout, pages }) =>
              layout === "sidebar" &&
              pages.map(({ path, element }) => (
                <Route exact path={path} element={element} />
              ))
          )}
        </Routes>
        <div className="text-blue-gray-600">
          <Footer />
        </div>
      </div>
    </div>
    </>
     : <Login />
    }
    </>
  );
}

SideBar.displayName = "/src/layouts/sidebar.jsx";

export default SideBar;
