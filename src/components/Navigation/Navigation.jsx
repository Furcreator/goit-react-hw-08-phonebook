import { useAuth } from 'hooks';
import { NavLink } from 'react-router-dom';
import { NavigationContainer } from './Navigation.styled';
import { StyledNavLink } from 'components/Header/Header.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavigationContainer>
      <StyledNavLink to="/">Home</StyledNavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </NavigationContainer>
  );
};
