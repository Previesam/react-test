import { StyledInput } from "../pages/login/styles";

export function Input({
  appendInnerIcon,
  placeholder,
  type,
}: {
  appendInnerIcon: string;
  placeholder: string;
  type: string;
}) {
  return (
    <div className="relative">
      <StyledInput placeholder={placeholder} type={type} />
      <img
        src={appendInnerIcon}
        alt="Input Icon"
        className="absolute input-append-inner-icon"
      />
    </div>
  );
}
