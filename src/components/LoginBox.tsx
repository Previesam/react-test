import {
  Button,
  Heading,
  StyledLoginBox,
  TypographyRegular,
} from "../pages/login/styles";
import { Input } from "./Input";
import Email from "../assets/email.svg";
import Lock from "../assets/lock.svg";
import { useState } from "react";
import validator from "validator";
import { login } from "../utils/api";
import Cookie from "universal-cookie";
import { useNavigate } from "react-router-dom";
const cookies = new Cookie();

interface LoginForm {
  email: string;
  password: string;
}

const LOGIN_FORM: LoginForm = {
  email: "",
  password: "",
};

export default function LoginBox() {
  const [formData, setFormData] = useState<LoginForm>(LOGIN_FORM);
  const [formErrors, setFormErrors] = useState(LOGIN_FORM);
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();

  const handleInput = (e: any, field: string) => {
    setFormData((prev: LoginForm) => ({ ...prev, [field]: e.target.value }));
  };

  const validateData = (data: any) => {
    let valid = false;
    for (let field in data) {
      if (validator.isEmpty(data[field], { ignore_whitespace: true })) {
        setFormErrors((prev) => ({
          ...prev,
          [field]: "Field cannot be empty, kindly update",
        }));
        valid = false;
      } else if (field === "email" && !validator.isEmail(data[field])) {
        setFormErrors((prev) => ({
          ...prev,
          [field]: "Email address must be valid",
        }));
        valid = false;
      } else if (
        field === "password" &&
        !validator.isStrongPassword(data[field], {
          minSymbols: 0,
          minUppercase: 0,
        })
      ) {
        setFormErrors((prev) => ({
          ...prev,
          [field]: "Password is invalid",
        }));
        valid = false;
      } else {
        setFormErrors((prev) => LOGIN_FORM);
        valid = true;
      }
    }
    return valid;
  };

  const submit = async () => {
    setloading(true);
    try {
      validateData(formData);
      if (Object.values(formErrors).join("").length > 0) return;
      let form = new FormData();
      form.append("email", formData.email);
      form.append("password", formData.password);
      const { data: result }: any = await login("/api/login", form, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      let data = JSON.parse(result);
      cookies.set("access-token", data?.data?.token, { path: "/" });
      localStorage.setItem("userInfo", JSON.stringify(data?.data?.info));
      navigate("/");
    } catch (err) {
      console.log(err);
    }
    setloading(false);
  };

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
          value={formData.email}
          onChange={(e: any) => handleInput(e, "email")}
          error={formErrors.email}
        ></Input>
        <Input
          appendInnerIcon={Lock}
          placeholder="Password"
          type="password"
          value={formData.password}
          onChange={(e: any) => handleInput(e, "password")}
          error={formErrors.password}
        ></Input>
      </div>
      <div className="grid place-items-center">
        <div className="form-submit-btn">
          {loading ? (
            <div className="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          ) : (
            <Button onClick={submit}>Continue</Button>
          )}
        </div>
        {/* <div className="form-submit-btn" style={{ wordWrap: "break-word" }}>
          Login successful; here is your token: {token}
        </div> */}
      </div>
    </StyledLoginBox>
  );
}
