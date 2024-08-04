import { Spin } from "antd";
import clsx from "clsx";

interface AppButtonProps extends React.ButtonHTMLAttributes<HTMLElement> {
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export const AppButton = ({
  className,
  loading,
  children,
  disabled,
  type = "button",
  onClick,
}: AppButtonProps) => {
  return (
    <button
      className={clsx(
        disabled ? "bg-slate-500 text-slate-700" : "",
        `${className} bg-blue-200 border rounded-3xl`
      )}
      disabled={disabled || loading}
      onClick={onClick}
      type={type}
    >
      {loading ? <Spin /> : ""}
      {children}
    </button>
  );
};
