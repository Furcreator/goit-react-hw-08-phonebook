import { useAuth } from 'hooks';

import { NavigationContainer } from './Navigation.styled';
import { StyledNavLink } from 'components/Header/Header.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavigationContainer>
      <StyledNavLink to="/">Home</StyledNavLink>
      {isLoggedIn && <StyledNavLink to="/contacts">Contacts</StyledNavLink>}
    </NavigationContainer>
  );
};
