import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      localStorage.setItem("token", token);
      window.history.replaceState({}, "", "/dashboard");
    } else {
      const savedToken = localStorage.getItem("token");
      if (!savedToken) navigate("/");
    }
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h1> Logged in Successfully</h1>
      <button onClick={() => {
        localStorage.removeItem("token");
        navigate("/");
      }}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
