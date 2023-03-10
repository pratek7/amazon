import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

const Header = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const item = useSelector(selectItems);
  return (
    <header className="sticky top-0 z-50">
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            alt="ok"
            height={40}
            width={150}
            style={{
              objectFit: "contain",
            }}
            className="cursor-pointer"
            onClick={() => router.push("/")}
          />
        </div>

        <div className=" hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500 ">
          <input
            type="text"
            className="py-2 h-full w-6 flex-grow rounded-l-md flex-shrink focus:outline-none px-5"
            placeholder="Search"
          />
          <SearchIcon className="h-12 p-4 " />
        </div>
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div onClick={session ? signOut : signIn} className="link">
            <p>{session ? `Hello ${session.user.name}` : "Sign In"}</p>
            <p className="font-extrabold md:text-sm">Account & List</p>
          </div>
          <div
            onClick={() => session && router.push("/order")}
            className="link"
          >
            <p>Return</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div
            onClick={() => router.push("/checkout")}
            className="link relative flex items-center"
          >
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
              {item.length}
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className=" hidden font-extrabold md:text-sm md:inline mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center bg-amazon_blue-light text-white space-x-3 p-2 pl-6">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Supper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  );
};

export default Header;
