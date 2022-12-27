import styled from "styled-components";

export const Heading = styled.h5`
  font-family: Axiforma;
  font-size: 20px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: center;
`;

export const TypographyRegular = styled.p`
  font-family: Manrope;
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: center;
`;

export const LoginBackground = styled.div`
  background: rgb(255, 255, 255);
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(45, 199, 253, 1) 100%
  );
  height: 100%;
  width: 100%;
`;

export const StyledLoginBox = styled.div`
  background-color: #ffffff;
  max-width: 500px;
  padding: 1rem 2rem;
  z-index: 1000;
  margin: 0 16px;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)
`;

export const StyledInput = styled.input`
  outline: none;
  padding: 10px 10px 10px 40px;
  color: #374151;
  background: transparent;
  border: 1px solid #e5e7eb;
  border-radius: 5px;
  width: 222px;
`;

export const Button = styled.button`
  background-color: #0099cc;
  padding: 0.75rem;
  width: 100%;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
`;
