import { FC } from "react";

interface IProps {
  className?: string;
}

const Loader: FC<IProps> = ({ className }) => {
  return (
    <div className={`${className}`}>
      <h1>Loader</h1>
    </div>
  );
};

export default Loader;
