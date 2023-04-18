import { Home, Profile, SignIn, SignUp } from "@/pages";
import {
  HomeIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import FAQ from "./pages/faq";

export const routes = [
  {
    icon: HomeIcon,
    name: "Accueil",
    path: "/home",
    element: <Home />,
  },
  {
    icon: UserCircleIcon,
    name: "faq",
    path: "/faq",
    element: <FAQ />,
  },
  // {
  //   icon: ArrowRightOnRectangleIcon,
  //   name: "Sign In",
  //   path: "/sign-in",
  //   element: <SignIn />,
  // },
  // {
  //   icon: UserPlusIcon,
  //   name: "Sign Up",
  //   path: "/sign-up",
  //   element: <SignUp />,
  // },
  // {
  //   icon: DocumentTextIcon,
  //   name: "Docs",
  //   href: "https://www.material-tailwind.com/docs/react/installation",
  //   target: "_blank",
  //   element: "",
  // },
];

export default routes;
