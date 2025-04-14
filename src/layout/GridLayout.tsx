import { PropsWithChildren } from "react";

interface IProps extends PropsWithChildren {
  // Define your props here
  className: string;
}

export default function GridLayout({ className, children }: IProps) {
  return (
    <div
      className={`${className} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-10`}
    >
      {children}
    </div>
  );
}
