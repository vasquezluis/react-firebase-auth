import { useAuth } from "../context/authContext";

function Home() {
  const { user } = useAuth();

  return <div>{user.name}</div>;
}

export default Home;
