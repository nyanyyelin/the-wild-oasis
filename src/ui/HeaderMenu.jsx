import { useNavigate } from 'react-router-dom';
import Logout from '../features/authentication/Logout';
import ButtonIcon from './ButtonIcon';
import { HiOutlineUser } from 'react-icons/hi';

const HeaderMenu = () => {
  const navigate = useNavigate();
  return (
    <ul className="flex gap-3">
      <li>
        <ButtonIcon onClick={() => navigate('/account')}>
          <HiOutlineUser className="h-[1.3rem] w-[1.3rem] text-violet-600" />
        </ButtonIcon>
      </li>
      <li>
        <Logout />
      </li>
    </ul>
  );
};

export default HeaderMenu;
