import { LoginBackground } from "./styles";
import loginBgImage from "../../assets/map_bg.png";
import LoginBox from "../../components/LoginBox";

export default function Login() {
  return (
    <div className="full-page relative">
      <img
        src={loginBgImage}
        alt="Map image"
        className="absolute login-image"
      />
      <LoginBackground>
        <div className="grid place-items-center">
          <LoginBox />
        </div>
      </LoginBackground>
    </div>
  );
}
