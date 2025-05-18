import { NavLink } from 'react-router-dom';
import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
} from 'react-icons/hi2';
import { HiOutlineUsers } from 'react-icons/hi';

const MainNav = () => {
  return (
    <nav className="mt-5">
      <ul className="flex flex-col gap-3">
        <NavLink
          className={({ isActive }) =>
            `nav-link ${isActive ? `nav-link-active` : ''}`
          }
          to="/dashboard"
        >
          <HiOutlineHome />
          <span className="text-lg">Home</span>
        </NavLink>
        <li>
          <NavLink
            className={({ isActive }) =>
              `nav-link ${isActive ? `nav-link-active` : ''}`
            }
            to="/bookings"
          >
            <HiOutlineCalendarDays />
            <span className="text-lg">Bookings</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `nav-link ${isActive ? `nav-link-active` : ''}`
            }
            to="/cabins"
          >
            <HiOutlineHomeModern />
            <span className="text-lg">Cabins</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `nav-link ${isActive ? `nav-link-active` : ''}`
            }
            to="/users"
          >
            <HiOutlineUsers />
            <span className="text-lg">Users</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `nav-link ${isActive ? `nav-link-active` : ''}`
            }
            to="/settings"
          >
            <HiOutlineCog6Tooth />
            <span className="text-lg">Settings</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
