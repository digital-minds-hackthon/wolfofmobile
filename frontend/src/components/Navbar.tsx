import { FC } from "react";
import { Link } from "react-router-dom";
import { Icons } from "./Icons";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <div className="fixed top-0 left-0 w-full bg-black h-20 border-b-2 border-yellow-400 flex items-center justify-between px-5">
      <div className="flex items-center gap-1">
        <img src="/logo.png" className="w-12" />
        <div className="font-semibold text-yellow-500 text-3xl">WolfMobile</div>
      </div>
      <div className="flex text-yellow-400 gap-4">
        <Link to="/" className="flex items-center gap-1">
          {" "}
          <Icons.home className="w-4 h-4" />
          home
        </Link>
        <Link to="/customize" className="flex items-center gap-1">
          {" "}
          <Icons.pen className="w-4 h-4" />
          customize
        </Link>
        <Link to="/" className="flex items-center gap-1">
          {" "}
          <Icons.shop className="w-4 h-4" />
          shop
        </Link>
        <Link to="/" className="flex items-center gap-1">
          {" "}
          <Icons.dollar className="w-4 h-4" />
          shop
        </Link>
      </div>
      <div className="flex gap-4">
        <Link
          to="/login"
          className="bg-black font-semibold text-yellow-500 border-2 border-yellow-500  px-8 py-2 rounded-md"
        >
          Sign In
        </Link>
        <Link
          to="/register"
          className="bg-yellow-500   font-semibold text-black border-2 border-yellow-500  px-8 py-2 rounded-md"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
