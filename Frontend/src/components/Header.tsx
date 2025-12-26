"use client";
import React, { useCallback, useEffect, useState } from "react";
import { SvgLocationIcon, SvgTranslateIcon } from "./SvgIcons";
import { IosArrowDown, RegCircleUser } from "./Icons";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store";
import { setLocalStorage } from "./react/storage";
import { getCategories } from "@/userend/with_transparent_navbar/features/HomeAction";
import dynamic from "next/dynamic";
import { useWordsShorting } from "./react/react-shorting";
const NavLink = dynamic(() => import("./NavLink"), { ssr: false });
const NavBarInputSearch = dynamic(() => import("./NavBarInputSearch"), {
   ssr: false,
});
const CategoryManus = dynamic(() => import("./CategoryManus"), { ssr: false });
const Img = dynamic(() => import("./Image"), { ssr: false });
const WithTransparentNavbarDownSearchBar = dynamic(
   () => import("./WithTransparentNavbarDownSearchBar"),
   { ssr: false }
);
const HeaderDropdownManuBtn = dynamic(() => import("./HeaderDropdownManuBtn"), {
   ssr: false,
});

export default function Header() {
   const pathname = usePathname();
   const [scrollY, setScrollY] = useState(0);
   const dispatch = useDispatch<AppDispatch>();
   const [isAuth, setIsAuth] = useState<boolean>(false);

   const { auth, user = {} } = useSelector(
      (state: RootState) => state.userend.common
   );

   useEffect(() => {
      if (auth === true) {
         setIsAuth(true);
      } else {
         setIsAuth(false);
      }
   }, [auth]);

   useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);

   const handleScroll = useCallback(() => {
      setScrollY(window.scrollY);
   }, []);

   useEffect(() => {
      setLocalStorage("search-key", "");
      setLocalStorage("category-slug-key", "");
      dispatch(getCategories());
   }, [dispatch]);

   return (
      <header
         className={`${scrollY < 100 ? "" : "bg-white drop-shadow-sm"} fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ease-in-out`}
      >
         <div className="container">
            <nav className=" flex justify-between items-center py-5 ">
               <div className="nav-left flex items-center lg:gap-x-11">
                  <NavLink href="/">
                     <div>
                        <Img
                           src="/assets/images/logo.png"
                           alt=""
                           width={150}
                           height={45}
                           className="w-[157.08px] h-auto"
                        />
                     </div>
                  </NavLink>
                  {pathname === "/" && (
                     <button
                        type="button"
                        className="lg:flex hidden items-center rounded-2xl border-2 border-solid border-[#4285f4] h-10 relative"
                     >
                        <span className="btn-location-icons rounded-tl-2xl rounded-bl-2xl w-[35px] h-10 relative text-white text-lg flex justify-center items-center">
                           <div className="w-[21px] h-[22px]">
                              <SvgLocationIcon />
                           </div>
                        </span>
                        <span className="h-10 flex items-center px-3 capitalize text-[#4285f4] font-medium">
                           location <IosArrowDown className="ms-1" />
                        </span>
                     </button>
                  )}
               </div>
               {pathname !== "/" && (
                  <div className=" w-[555px] 4xl:px-10 px-5 xl:block hidden">
                     <NavBarInputSearch />
                  </div>
               )}
               <div className="nav-right flex items-center gap-x-7">
                  <button
                     type="button"
                     className="md:flex hidden items-center rounded-2xl border-2 border-solid border-[#4285f4] h-10 relative"
                  >
                     <span className="btn-location-icons rounded-tl-2xl rounded-bl-2xl w-[35px] h-10 relative text-white text-lg flex justify-center items-center">
                        <SvgTranslateIcon
                           width={18}
                           height={20}
                           color="white"
                        />
                     </span>
                     <span className="h-10 flex items-center px-3 capitalize text-[#4285f4] font-medium">
                        english <IosArrowDown className="ms-1" />
                     </span>
                  </button>
                  {!isAuth ? (
                     <>
                        <NavLink
                           href="/sign-in"
                           className="6xs:flex hidden items-center gap-3 text-[#4285f4] w-24"
                        >
                           <span className=" text-2xl">
                              <RegCircleUser />
                           </span>
                           <span className=" capitalize text-lg font-medium">
                              Sign In
                           </span>
                        </NavLink>
                        <NavLink
                           href="/sign-up"
                           className="6xs:flex justify-center items-center hidden capitalize rounded-2xl w-[125px] h-10 bg-gradient-to-b from-blue-500/[0.8] via-blue-700/[0.8] to-blue-900/[0.8] shadow-[2px_2px_10px_0px_rgba(0,0,0,0.25),-2px_-2px_10px_0px_rgba(101,101,101,0.25)] text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-base font-bold"
                        >
                           Sign Up
                        </NavLink>
                     </>
                  ) : (
                     <div className="flex flex-row items-center gap-3">
                        <Img
                           src="/assets/images/admin-user-avatar.png"
                           alt=""
                           width={150}
                           height={45}
                           className="rounded-[50%] border-solid border-[#4285f4] border w-11 h-11"
                        />
                        <div className="3xs:block hidden text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-base font-bold relative">
                           {isAuth &&
                              user &&
                              useWordsShorting({
                                 text: user?.name || "",
                                 maxWords: 2,
                              })}
                        </div>
                     </div>
                  )}

                  <HeaderDropdownManuBtn isAuth={isAuth} user={user} />
               </div>
            </nav>

            {pathname === "/" && <CategoryManus scrollY={scrollY} />}

            {pathname !== "/" && (
               <WithTransparentNavbarDownSearchBar scrollY={scrollY} />
            )}
         </div>
      </header>
   );
}
