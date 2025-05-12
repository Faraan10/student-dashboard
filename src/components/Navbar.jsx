import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import AvatarDropdown from "./AvatarDropdown";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleButton = () => setIsOpen(!isOpen);

  // const { loading, user } = useAuth();
  const fakeUser = { uid: "123", email: "test@example.com" }; // ✅ Mock user
  const user = fakeUser;
  const loading = false;

  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && setIsOpen(false);
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <nav className="bg-base-300 text-base-content px-4 py-2 shadow-md h-[80px] flex items-center">
      <div className="max-w-7xl mx-auto flex justify-between items-center w-full">
        {/* Logo on the left */}
        <Link to="/" className="text-xl font-bold flex items-center">
          <img src="/" alt="Student Dash" />
        </Link>

        {/* Right-aligned content */}
        <div className="hidden md:flex gap-6 items-center ml-auto">
          <Link to="/" className="hover:text-blue-400 transition">
            Home
          </Link>

          {user ? (
            <AvatarDropdown user={user} />
          ) : (
            <>
              <Link to="/login" className="hover:text-blue-400 transition">
                Login
              </Link>
            </>
          )}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex gap-5">
          <button onClick={toggleButton} className="cursor-pointer">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 z-40 flex">
          <div
            className="fixed inset-0 bg-base-300 opacity-50"
            onClick={() => setIsOpen(false)}
          />
          <div className="relative w-64 bg-base-100 text-base-content p-6 flex flex-col gap-4 z-50 animate-slide-in">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xl font-bold">Menu</span>
              <button onClick={toggleButton} className="cursor-pointer">
                <X size={24} className="hover:text-blue-400" />
              </button>
            </div>

            <div className="flex flex-col gap-3">
              <div className="rounded transition px-3 py-1">
                <Link
                  to="/"
                  className="text-base-content hover:text-blue-400"
                  onClick={toggleButton}
                >
                  Home
                </Link>
              </div>

              {!user ? (
                <>
                  <div className="rounded transition px-3 py-1">
                    <Link
                      to="/login"
                      className="text-base-content hover:text-blue-400"
                      onClick={toggleButton}
                    >
                      Login
                    </Link>
                  </div>
                </>
              ) : (
                <div className="rounded transition px-3 py-1">
                  <AvatarDropdown user={user} />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
