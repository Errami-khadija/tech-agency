import HomeIcon from '@mui/icons-material/Home';
import SourceIcon from '@mui/icons-material/Source';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ScheduleSendIcon from '@mui/icons-material/ScheduleSend';

import HomeClient from "./Components/client/HomeClient";
import Responses from "./Components/client/Responses";
import ProfileUser from "./Components/client/ProfileUser";
import UserService from "./Components/client/UserService";




const icon = {
  className: "w-5 h-5 text-inherit",
};


export const sidRoutes = [
 
  {
    layout: "sidebar",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "Home",
        path: "/home_user",
        element: <HomeClient />,
      },
      {
        icon: <SourceIcon {...icon} />,
        name: "Services",
        path: "/userService",
        element: <UserService />,
      },
      {
        icon: <ScheduleSendIcon {...icon} />,
        name: "Responses",
        path: "/responses",
        element: <Responses />,

      },
      {
        icon: <AccountCircleIcon {...icon} />,
        name: "Profile",
        path: "/profileUser",
        element: <ProfileUser />,
      },
    ]
  },

];

export default sidRoutes;

