import { Avatar, AvatarProps } from '@chakra-ui/react';

import { useAuth } from '../../helpers/auth';

const UserAvatar: React.FC<AvatarProps> = (props) => {
  const { currentUser } = useAuth();

  const src = currentUser?.photoURL || '';
  const name = currentUser?.displayName || '';

  return <Avatar size="sm" src={src} name={name} bg="brand.300" {...props} />;
};

export default UserAvatar;
