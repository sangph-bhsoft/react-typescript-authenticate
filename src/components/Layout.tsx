import React from "react";
import { useDispatch } from "react-redux";
import { logout as logoutAction } from "../features/auth/actions";

const Layout: React.FC = ({ children }) => {
  const dispatch = useDispatch();
  const logout = () => dispatch(logoutAction());
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-purple-200 p-6">
        <div className="flex items-center flex-no-shrink text-white mr-6">
          <svg
            className="h-8 w-8 mr-2"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <span className="font-semibold text-xl tracking-tight">
            Tailwind CSS
          </span>
        </div>

        <button
          className="text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-200 hover:bg-secondary mt-4 lg:mt-0"
          onClick={logout}
        >
          Logout
        </button>
      </nav>
      {children}
    </>
  );
};

export default Layout;
