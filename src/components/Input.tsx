import { StyledInput } from "../pages/login/styles";

export function Input({
  appendInnerIcon,
  placeholder,
  type,
  value,
  onChange,
  error,
}: {
  appendInnerIcon: string;
  placeholder: string;
  type: string;
  value?: any;
  onChange?: any;
  error?: string;
}) {
  return (
    <div className="relative">
      <StyledInput
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
      />
      {error && <div className="error-text">{error}</div>}
      <img
        src={appendInnerIcon}
        alt="Input Icon"
        className="absolute input-append-inner-icon"
      />
    </div>
  );
}
