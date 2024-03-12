import { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  header?: ReactNode;
  children: ReactNode;
}

const Card = ({ header, children, className, ...rest }: CardProps) => {
  return (
    <div
      className={`container mx-auto h-full rounded-3xl bg-white p-8 py-5 shadow-lg ${className}`}
      {...rest}
    >
      {header && <div className="text-l text-center font-medium">{header}</div>}
      {children}
    </div>
  );
};

export default Card;
