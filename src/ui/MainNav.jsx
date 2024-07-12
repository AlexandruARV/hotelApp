import {
  HiOutlineCalendar,
  HiOutlineHome,
  HiOutlineOfficeBuilding,
  HiOutlineUser,
} from "react-icons/hi";
import { NavLink } from "react-router-dom";

function MainNav() {
  return (
    <nav>
      <ul className="flex flex-col gap-4">
        <li>
          <NavLink
            className="text-base font-semibold flex items-center gap-2 text-stone-400 px-2 py-2"
            to="/"
          >
            <span>
              <HiOutlineHome className="h-6 w-6" />
            </span>
            <span className="text-stone-600">Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className="text-base  font-semibold flex items-center gap-2  text-stone-400 px-2 py-2"
            to="cabins"
          >
            <span>
              <HiOutlineOfficeBuilding className=" h-6 w-6" />
            </span>
            <span className="text-stone-600">Cabins</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className="text-base  font-semibold flex items-center gap-2  text-stone-400 px-2 py-2"
            to="bookings"
          >
            <span>
              <HiOutlineCalendar className=" h-6 w-6" />
            </span>
            <span className="text-stone-600">Bookings</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className="text-base  font-semibold flex items-center gap-2  text-stone-400 px-2 py-2"
            to="users"
          >
            <span>
              <HiOutlineUser className="h-6 w-6" />
            </span>
            <span className="text-stone-600">Users</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
