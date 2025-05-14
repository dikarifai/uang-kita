import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: React.ReactNode;
  success?: React.ReactNode;
  warning?: React.ReactNode;
  label?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({
  type,
  className,
  placeholder,
  disabled,
  error,
  label,
  success,
  warning,
  id,
}) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={id} className="text-textPrimary">
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        className={`${className} px-4 py-2 rounded-lg focus:outline-none border-2 border-textPrimary focus:border-accent focus disabled:border-slate-400`}
        disabled={disabled}
        placeholder={placeholder}
      />
      {error && <p className="text-error">{error}</p>}
      {success && <p className="text-success">{success}</p>}
      {warning && <p className="text-warning">{warning}</p>}
    </div>
  );
};

export default Input;
