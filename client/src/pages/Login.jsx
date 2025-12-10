const Login = () => {
  const loginWithGoogle = () => {
    window.location.href = `http://localhost:3000/auth/google`;
  };

  return (
    <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <button onClick={loginWithGoogle} style={{ padding: "12px 20px", fontSize: "16px" }}>
        Login with Google
      </button>
    </div>
  );
};

export default Login;
