import { useAuth } from "../context/authContext";

function Home() {
  // instanciar valores de useAuth
  const { user, logout, loading } = useAuth();

  console.log(user);

  const handleLogOut = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error.message);
    }
  };

  if (loading) return <h1>Loading</h1>;

  return (
    <div>
      <h1>Welcome: {user.email}</h1>

      <button onClick={handleLogOut}>Logout</button>
    </div>
  );
}

export default Home;
