import { AuthNavContainer } from './AuthNav.styled';
import { StyledNavLink } from 'components/Header/Header.styled';

export const AuthNav = () => {
  return (
    <AuthNavContainer>
      <StyledNavLink to="/register">Register</StyledNavLink>
      <StyledNavLink to="/login">Log In</StyledNavLink>
    </AuthNavContainer>
  );
};
