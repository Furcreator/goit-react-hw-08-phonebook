export const UserMenu = () => {
  //   const dispatch = useDispatch();
  //   const { user } = useAuth();
  const user = {
    name: 'Alex',
  }; // временно

  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={() => {}}>
        Logout
      </button>
    </div>
  );
};
