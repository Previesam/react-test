import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cookie from "universal-cookie";
import { logout, refresh } from "../utils/api";
import { Button } from "./login/styles";
const cookies = new Cookie();

export default function Home() {
  const [user, setUser] = useState({} as any);
  const [token, setToken] = useState("");

  function getUserAndToken() {
    setUser(JSON.parse(localStorage.getItem("userInfo") || "{}"));
    setToken(cookies.get("access-token"));
  }

  const [loading, setloading] = useState(false);

  async function refreshToken() {
    setloading(true);
    try {
      const { data: result }: any = await refresh("/api/refresh_token", token);
      let data = JSON.parse(result);
      cookies.set("access-token", data?.data?.token, { path: "/" });
      setToken(data?.data?.token);
    } catch (err) {
      console.log(err);
    }
    setloading(false);
  }

  async function logUserOut() {
    setloading(true);
    try {
      const { data: result }: any = await logout("/api/logout", token);
      cookies.remove("access-token");
      localStorage.removeItem("userInfo");
      setUser({});
      setToken("");
    } catch (err) {
      console.log(err);
    }
    setloading(false);
  }

  useEffect(() => {
    getUserAndToken();
  }, []);

  return (
    <div>
      {token ? (
        <>
          <h2>Welcome back {user?.user?.fname}</h2>
          <h3>{token}</h3>
          {loading ? (
            <div className="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          ) : (
            <>
              <Button
                style={{ maxWidth: "300px", marginRight: "5px" }}
                onClick={refreshToken}
              >
                Refresh Token
              </Button>
              <Button style={{ maxWidth: "300px" }} onClick={logUserOut}>
                Logout
              </Button>
            </>
          )}
        </>
      ) : (
        <>
          <h2>Welcome new user, click login below to continue.</h2>
          <Link to="login">Login</Link>
        </>
      )}
    </div>
  );
}
