import {
  Button,
  Heading,
  StyledLoginBox,
  TypographyRegular,
} from "../pages/login/styles";
import { Input } from "./Input";
import Email from "../assets/email.svg";
import Lock from "../assets/lock.svg";

export default function LoginBox() {
  return (
    <StyledLoginBox style={{ zIndex: "1000" }} className="login-box">
      <Heading style={{ color: "#0099cc" }}>Login to Restructure</Heading>
      <TypographyRegular
        style={{
          color: "#374151",
          maxWidth: "380px",
          textAlign: "center",
          margin: "0 auto",
          marginBottom: "2rem",
        }}
      >
        Enter your email address and the default password sent to your email
        address
      </TypographyRegular>
      <div
        style={{ marginBottom: "2rem" }}
        className="grid place-items-center gap-1"
      >
        <Input
          appendInnerIcon={Email}
          placeholder="Email Address"
          type="text"
        ></Input>
        <Input
          appendInnerIcon={Lock}
          placeholder="Password"
          type="password"
        ></Input>
      </div>
      <div className="grid place-items-center">
        <div className="form-submit-btn">
          <Button>Continue</Button>
        </div>
      </div>
    </StyledLoginBox>
  );
}
