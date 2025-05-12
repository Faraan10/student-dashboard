import { useState, useRef, useEffect } from "react";
import { ChevronDown, LogOut } from "lucide-react";
import toast from "react-hot-toast";
import { signOut } from "firebase/auth";
import { auth } from "../firebase"; // firebase
import { Link, useNavigate } from "react-router-dom";

const AvatarDropdown = () => {
  const [avatarOpen, setAvatarOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleAvatarDropdown = () => setAvatarOpen((prev) => !prev);

  const logout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully!");
      navigate("/login");
    } catch (error) {
      toast.error("Error logging out!");
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setAvatarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={toggleAvatarDropdown}
      >
        <img
          src={`https://api.dicebear.com/7.x/initials/svg?seed=Faraan`}
          alt="avatar"
          className="w-8 h-8 rounded-full"
        />
        <ChevronDown
          size={18}
          className={`transition-transform duration-200 ${
            avatarOpen ? "rotate-180" : ""
          }`}
        />
      </div>
      {avatarOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-md z-50">
          <ul className="py-1">
            <li>
              <Link
                to="/profile"
                onClick={() => setAvatarOpen(false)}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Profile
              </Link>
            </li>
            <li>
              <button
                onClick={logout}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Logout
                <LogOut className="inline ml-2 w-4 h-4" />
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AvatarDropdown;
