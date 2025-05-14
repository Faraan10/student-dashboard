import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Spinner from "../components/Spinner";

const Home = () => {
  const { user, loading } = useAuth();
  console.log(user);

  if (loading) {
    return <Spinner />;
  }

  return (
    <section className="min-h-screen bg-base-100 flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Welcome to Student Dashboard
      </h1>
      <p className="text-base-content text-lg md:w-2/3 mb-6">
        A modern Firebase-authenticated app built with React, TailwindCSS,
        DaisyUI, and Lucide Icons. Explore the app features and manage your
        account with ease.
      </p>

      {user ? (
        <Link to="/dashboard" className="btn btn-primary">
          Go to Dashboard
        </Link>
      ) : (
        <Link to="/login" className="btn btn-accent">
          Get Started
        </Link>
      )}
    </section>
  );
};

export default Home;
