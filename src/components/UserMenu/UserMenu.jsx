import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { Greeting, StyledButton, UserMenuContainer } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuContainer>
      <Greeting>Welcome, {user.name}</Greeting>
      <StyledButton type="button" onClick={() => dispatch(logOut())}>
        Logout
      </StyledButton>
    </UserMenuContainer>
  );
};
