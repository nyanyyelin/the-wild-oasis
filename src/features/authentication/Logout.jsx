import ButtonIcon from '../../ui/ButtonIcon';
import { HiOutlineLogout } from 'react-icons/hi';
import useLogout from './useLogout';
import SpinnerMini from '../../ui/SpinnerMini';
const Logout = () => {
  const { logout, isLoggingOut } = useLogout();
  return (
    <ButtonIcon disabled={isLoggingOut} onClick={logout}>
      {!isLoggingOut ? (
        <HiOutlineLogout className="h-[1.3rem] w-[1.3rem] text-violet-600" />
      ) : (
        <SpinnerMini />
      )}
    </ButtonIcon>
  );
};

export default Logout;
