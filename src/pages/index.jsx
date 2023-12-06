import { useState, useEffect } from "react";

// halaman untuk convert get api ke dalem page

const Home = () => {
  const [apiGian, setApiGian] = useState(null);
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setErr(false);
    setLoading(true);

    async function fetchData() {
      try {
        const response = await fetch(
          "https://api-ta-di6s2klusq-et.a.run.app/user/profile?nip=1234567890"
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
  }, []);

  return (
    <>
      {err ? (
        <div>api error</div>
      ) : (
        <>
          {loading ? (
            <>Loading...</>
          ) : (
            <>
              <div>NIP: {apiGian?.profile?.nip}</div>
              <div>Kode Dosen: {apiGian?.profile?.kode_dosen}</div>
              <div>Email Dosen: {apiGian?.profile?.email_dosen}</div>
              <div>Password Dosen: {apiGian?.profile?.password_dosen}</div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Home;
