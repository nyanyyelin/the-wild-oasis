import UserAvatar from '../features/authentication/UserAvatar';
import HeaderMenu from './HeaderMenu';
import ToggleDarkMode from './ToggleDarkMode';

const Header = () => {
  return (
    <div className="flex items-center justify-end gap-4 border-b-1 border-gray-100 bg-gray-50 px-4 py-3">
      <ToggleDarkMode />
      <UserAvatar />
      <HeaderMenu />
    </div>
  );
};

export default Header;
