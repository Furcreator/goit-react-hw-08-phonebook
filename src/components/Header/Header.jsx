import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks';
import { TopMenu } from './Header.styled';

export const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <TopMenu>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </TopMenu>
  );
};
