import { Home, Profile, SignIn, SignUp } from "@/pages";
import {
  HomeIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  DocumentTextIcon,
  TagIcon
} from "@heroicons/react/24/solid";
import FAQ from "./pages/faq";
import CodePenal from "./pages/codepenal";


export const routes = [
  {
    icon: HomeIcon,
    name: "Accueil",
    path: "/home",
    element: <Home />,
  },
  {
    icon: TagIcon,
    name: "faq",
    path: "/faq",
    element: <FAQ />,
  },
  {
    // icon: ArrowRightOnRectangleIcon,
    // name: "Sign In",
    path: "/sign-in",
    element: <SignIn />,
  },
  {
 //   icon: UserPlusIcon,
   // name: "Sign Up",
   path: "/sign-up",
   element: <SignUp />,
  },
  {
    //   icon: UserPlusIcon,
      // name: "Sign Up",
      path: "/profile",
      element: <Profile />,
  },
  {
    //   icon: ,
      // name: "code Penal",
      path: "/codepenal",
      element: <CodePenal />,
  },
  
];

export default routes;
