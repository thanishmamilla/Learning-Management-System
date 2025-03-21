// import { Menu, School } from "lucide-react";
// import React, { useEffect } from "react";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "./ui/dropdown-menu";
// import { Button } from "./ui/button";
// import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
// import DarkMode from "@/DarkMode";
// import {
//   Sheet,
//   SheetClose,
//   SheetContent,
//   SheetFooter,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "./ui/sheet";
// import { Separator } from "@radix-ui/react-dropdown-menu";
// import { Link, useNavigate } from "react-router-dom";
// import { useLogoutUserMutation } from "@/features/api/authApi";
// import { toast } from "sonner";
// import { useSelector } from "react-redux";

// const Navbar = () => {
//   const { user } = useSelector((store) => store.auth);
//   const [logoutUser, { data, isSuccess }] = useLogoutUserMutation();
//   const navigate = useNavigate();
//   const logoutHandler = async () => {
//     await logoutUser();
//   };

//   useEffect(() => {
//     if (isSuccess) {
//       toast.success(data?.message || "User log out.");
//       navigate("/login");
//     }
//   }, [isSuccess]);

//   return (
//     <div className="h-16 dark:bg-[#020817] bg-white border-b dark:border-b-gray-800 border-b-gray-200 fixed top-0 left-0 right-0 duration-300 z-10">
//       {/* Desktop */}
//       <div className="max-w-7xl mx-auto hidden md:flex justify-between items-center gap-10 h-full">
//       <div className="flex items-center gap-2">
//         <Link to="/">
//           <img src="/images\logomain.png" alt="Logo" className="h-8 w-8 object-contain" />
//         </Link>
//         <Link to="/">
//           <h1 className="hidden md:block font-extrabold text-2xl">
//             CyberMatrix1337
//           </h1>
//         </Link>

//       </div>
//         {/* User icons and dark mode icon  */}
//         <div className="flex items-center gap-8">
//         <Link to="/">
//           <h4>
//             About
//           </h4>
//         </Link>
//         <Link to="/">
//           <h4 >
//             Courses
//           </h4>
//         </Link>
//         <Link to="/blog">
//           <h4 >
//             Blog
//           </h4>
//         </Link>
       
//         <Link to="https://docs.google.com/forms/d/e/1FAIpQLScF4CrCbr5pQ0oXtdzGPWzOjh4xO17dGbII7kpP8-mIbsNCcA/viewform?usp=header" target="_blank">
//           <h4 >
//             Contact Us
//           </h4>
//         </Link>
//           {user ? (
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Avatar>
//                   <AvatarImage
//                     src={user?.photoUrl || "https://github.com/shadcn.png"}
//                     alt="@shadcn"
//                   />
//                   <AvatarFallback>CN</AvatarFallback>
//                 </Avatar>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent className="w-56">
//                 <DropdownMenuLabel>My Account</DropdownMenuLabel>
//                 <DropdownMenuSeparator />
//                 <DropdownMenuGroup>
//                   <DropdownMenuItem>
//                     <Link to="my-learning">My learning</Link>
//                   </DropdownMenuItem>
//                   <DropdownMenuItem>
//                     {" "}
//                     <Link to="profile">Edit Profile</Link>{" "}
//                   </DropdownMenuItem>
//                   <DropdownMenuItem onClick={logoutHandler}>
//                     Log out
//                   </DropdownMenuItem>
//                 </DropdownMenuGroup>
//                 {user?.role === "instructor" && (
//                   <>
//                     <DropdownMenuSeparator />
//                     <DropdownMenuItem><Link to="/admin/dashboard">Dashboard</Link></DropdownMenuItem>
//                   </>
//                 )}
//               </DropdownMenuContent>
//             </DropdownMenu>
//           ) : (
//             <div className="flex items-center gap-2">
//               <Button variant="outline" onClick={() => navigate("/login")}>
//                 Login
//               </Button>
//               <Button onClick={() => navigate("/login")}>Signup</Button>
//             </div>
//           )}
//           <DarkMode />
//         </div>
//       </div>
//       {/* Mobile device  */}
//       <div className="flex md:hidden items-center justify-between px-4 h-full">
//       <img src="/images\logomain.png" alt="Logo" className="h-8 w-8 object-contain" />
//       <h1 className="font-extrabold text-2xl">CyberMatrix1337</h1>
//         <MobileNavbar user={user}/>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// const MobileNavbar = ({user}) => {
//   const navigate = useNavigate();
  
//   return (
//     <Sheet>
//       <SheetTrigger asChild>
//         <Button
//           size="icon"
//           className="rounded-full hover:bg-gray-200"
//           variant="outline"
//         >
//           <Menu />
//         </Button>
//       </SheetTrigger>
//       <SheetContent className="flex flex-col">
//         <SheetHeader className="flex flex-row items-center justify-between mt-2">
//           <SheetTitle> <Link to="/">CyberMatrix13337</Link></SheetTitle>
//           <DarkMode />
//         </SheetHeader>
//         <Separator className="mr-2" />
//         <nav className="flex flex-col space-y-4">
//           <Link to="/my-learning">My Learning</Link>
//           <Link to="/profile">Edit Profile</Link>
//           <p>Log out</p>
//         </nav>
//         {user?.role === "instructor" && (
//           <SheetFooter>
//             <SheetClose asChild>
//               <Button type="submit" onClick={()=> navigate("/admin/dashboard")}>Dashboard</Button>
//             </SheetClose>
//           </SheetFooter>
//         )}
//       </SheetContent>
//     </Sheet>
//   );
// };




import { Menu, School } from "lucide-react";
import React, { useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import DarkMode from "@/DarkMode";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useLogoutUserMutation } from "@/features/api/authApi";
import { toast } from "sonner";
import { useSelector } from "react-redux";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const [logoutUser, { data, isSuccess }] = useLogoutUserMutation();
  const navigate = useNavigate();
  const logoutHandler = async () => {
    await logoutUser();
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(data?.message || "User log out.");
      navigate("/login");
    }
  }, [isSuccess]);

  return (
    <div className="h-16 dark:bg-[#020817] bg-white border-b dark:border-b-gray-800 border-b-gray-200 fixed top-0 left-0 right-0 duration-300 z-10">
      {/* Desktop */}
      <div className="max-w-7xl mx-auto hidden md:flex justify-between items-center gap-10 h-full">
        <div className="flex items-center gap-2">
          <RouterLink to="/">
            <img src="/images/logomain.png" alt="Logo" className="h-8 w-8 object-contain" />
          </RouterLink>
          <RouterLink to="/">
            <h1 className="hidden md:block font-extrabold text-2xl">
              CyberMatrix1337
            </h1>
          </RouterLink>
        </div>
        {/* User icons and dark mode icon */}
        <div className="flex items-center gap-8">
          <ScrollLink to="whycybermatrix" smooth={true} duration={500}>
            <h4 className="cursor-pointer">About</h4>
          </ScrollLink>
          <ScrollLink to="courses" smooth={true} duration={500}>
            <h4 className="cursor-pointer">Courses</h4>
          </ScrollLink>
          <RouterLink to="/blog">
            <h4>Blog</h4>
          </RouterLink>
          <ScrollLink to="contactus" smooth={true} duration={500}>
            <h4 className="cursor-pointer">Contact Us</h4>
          </ScrollLink>
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar>
                  <AvatarImage
                    src={user?.photoUrl || "https://github.com/shadcn.png"}
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <RouterLink to="my-learning">My learning</RouterLink>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <RouterLink to="profile">Edit Profile</RouterLink>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={logoutHandler}>
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                {user?.role === "instructor" && (
                  <>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <RouterLink to="/admin/dashboard">Dashboard</RouterLink>
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="outline" onClick={() => navigate("/login")}>
                Login
              </Button>
              <Button onClick={() => navigate("/login")}>Signup</Button>
            </div>
          )}
          <DarkMode />
        </div>
      </div>
      {/* Mobile device */}
      <div className="flex md:hidden items-center justify-between px-4 h-full">
        <img src="/images/logomain.png" alt="Logo" className="h-8 w-8 object-contain" />
        <h1 className="font-extrabold text-2xl">CyberMatrix1337</h1>
        <MobileNavbar user={user} logoutHandler={logoutHandler} />
      </div>
    </div>
  );
};

export default Navbar;

const MobileNavbar = ({ user, logoutHandler }) => {
  const navigate = useNavigate();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size="icon"
          className="rounded-full hover:bg-gray-200"
          variant="outline"
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader className="flex flex-row items-center justify-between mt-2">
          <SheetTitle>
            <RouterLink to="/">CyberMatrix13337</RouterLink>
          </SheetTitle>
          <DarkMode />
        </SheetHeader>
        <Separator className="mr-2" />
        <nav className="flex flex-col space-y-4">
          <RouterLink to="/my-learning">My Learning</RouterLink>
          <RouterLink to="/profile">Edit Profile</RouterLink>
          <p onClick={logoutHandler}>Log out</p>
        </nav>
        {user?.role === "instructor" && (
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit" onClick={() => navigate("/admin/dashboard")}>
                Dashboard
              </Button>
            </SheetClose>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
};



