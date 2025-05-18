// import styled from "styled-components";

import { useUser } from './useUser';

// const StyledUserAvatar = styled.div`
//   display: flex;
//   gap: 1.2rem;
//   align-items: center;
//   font-weight: 500;
//   font-size: 1.4rem;
//   color: var(--color-grey-600);
// `;

// const Avatar = styled.img`
//   display: block;
//   width: 4rem;
//   width: 3.6rem;
//   aspect-ratio: 1;
//   object-fit: cover;
//   object-position: center;
//   border-radius: 50%;
//   outline: 2px solid var(--color-grey-100);
// `;

const UserAvatar = () => {
  const { user } = useUser();
  const { fullName, avatar } = user.user_metadata;
  console.log(user);

  return (
    <div className="flex items-center gap-4 text-sm font-semibold text-gray-600">
      <img
        className="block aspect-square w-[2.2rem] rounded-full object-cover object-center outline-2 outline-gray-100"
        src={avatar || 'default-user.jpg'}
        alt={`Avatar of ${fullName}`}
      />
      <span>{fullName}</span>
    </div>
  );
};

export default UserAvatar;
