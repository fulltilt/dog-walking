"use client";

import { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navLinks = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Services",
    href: "#services",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto border bg-white border-[#b3aeae] border-t-0 top-0 left-0 right-0 z-10 bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="text-2xl md:text-5xl font-semibold">
          Brenda’s Fun Doggie Daycare
        </Link>
        <div className="mobile-menu block md:hidden">
          {navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-late-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-late-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink title={link.title} href={link.href} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import { AiOutlineMenu } from "react-icons/ai";

// const Navbar = () => {
//   return (
//     <div className="container pt-6">
//       <div className="flex justify-between md:justify-start items-center">
//         <Image
//           src="/logo.png"
//           width={50}
//           height={50}
//           alt="logo"
//           className="mr-5"
//         />
//         <ul className="hidden gap-8 items-center font-semibold text-[14px] md:flex">
//           <li>Home</li>
//           <li>About</li>
//           <li>Food</li>
//           <li>Dish</li>
//           <li>Contact</li>
//           <Button className="bg-thirdary text-white px-6 py-2 rounded-3xl">
//             SignUp
//           </Button>
//         </ul>
//         <AiOutlineMenu size={30} className="md:hidden text-thirdary" />
//       </div>
//     </div>
//   );
// };

// export default Navbar;
