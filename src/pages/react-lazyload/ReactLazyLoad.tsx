import { PropsWithChildren } from "react";
import LazyLoad, { LazyLoadProps } from "react-lazyload";

type TExtraProps = PropsWithChildren & LazyLoadProps;

interface IProps extends TExtraProps {
  // Define your props here
  className?: string;
}

export default function ReactLazyLoad({
  children,
  className,
  debounce = 200,
  height = 300,
  offset = 150,
}: IProps) {
  return (
    <LazyLoad
      once={true}
      debounce={debounce}
      className={`${className}`}
      height={height}
      offset={offset}
    >
      {children}
    </LazyLoad>
  );
}
