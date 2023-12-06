import { useState } from "react";

import "../styles/login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [apiGian, setApiGian] = useState();
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    async function fetchData() {
      setLoading(true);
      try {
        const response = await fetch(
          "https://api-ta-di6s2klusq-et.a.run.app/user/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              nip: username,
              password: password,
            }),
          }
        );
        const data = await response.json();
        setApiGian(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setErr(true);
      }
    }

    fetchData();
  };

  return (
    <>
      {err ? (
        <>Error</>
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder='Username'
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type='password'
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type='submit' disabled={loading}>
              {loading ? "loading..." : "Login"}
            </button>
          </form>
          <div>{apiGian?.token}</div>
          <div>{apiGian?.msg}</div>
        </>
      )}
    </>
  );
};

export default Login;
