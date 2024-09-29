import DashboardIcon from '@mui/icons-material/Dashboard';
import SendAndArchiveIcon from '@mui/icons-material/SendAndArchive';
import MailIcon from '@mui/icons-material/Mail';
import GroupIcon from '@mui/icons-material/Group';
import SettingsIcon from '@mui/icons-material/Settings';
import SourceIcon from '@mui/icons-material/Source';

import Home from "./Components/admin/home";
import Orders from "./Components/admin/Orders";
import Services from "./Components/admin/Services";
import Messages from "./Components/admin/Messages";
import Users from "./Components/admin/users";
import Setings from "./Components/admin/setings";



const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <DashboardIcon {...icon} />,
        name: "Dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <SendAndArchiveIcon {...icon} />,
        name: "Orders",
        path: "/Orders",
        element: <Orders />,
      },
      {
        icon: <MailIcon {...icon} />,
        name: "Messages",
        path: "/Messages",
        element: <Messages />,
        
      },
      {
        icon: <SourceIcon {...icon} />,
        name: "Services",
        path: "/ServicesAdmin",
        element: <Services />,
      },
      {
        icon: <GroupIcon {...icon} />,
        name: "Users",
        path: "/Users",
        element: <Users />,
      },
      {
        icon : <SettingsIcon   {...icon}/>,
        name :"Settings",
        path: "/Setings",
        element:<Setings/>
      }
       
    
       
    ]
  },
   
];

export default routes;
