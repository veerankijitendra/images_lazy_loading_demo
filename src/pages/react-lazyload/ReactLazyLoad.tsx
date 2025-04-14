import LazyLoad, { LazyLoadProps } from "react-lazyload";
import GridLayout from "../../layout/GridLayout";
import { ReactNode } from "react";
import { TImageCard } from "../../utils/types";
import ImageCard from "../../components/image-card/ImageCard";

type TExtraProps = LazyLoadProps;

interface IProps extends TExtraProps {
  // Define your props here
  className?: string;
  data: TImageCard[];
}

export default function ReactLazyLoad({
  className,
  debounce = 200,
  height = 300,
  offset = 150,
  data: iData,
}: IProps) {
  const renderLazyLoadCom = (children: ReactNode) => {
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
  };

  return (
    <GridLayout className="">
      {iData.map((each: TImageCard) =>
        renderLazyLoadCom(<ImageCard data={each} />)
      )}
    </GridLayout>
  );
}
