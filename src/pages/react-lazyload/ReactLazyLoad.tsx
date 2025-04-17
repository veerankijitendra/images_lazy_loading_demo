import LazyLoad, { LazyLoadProps } from "react-lazyload";
import GridLayout from "../../layout/GridLayout";
import { ReactNode } from "react";
import { TImageCard } from "../../utils/types";
import ImageCard from "../../components/image-card/ImageCard";
import useFetch from "../../custom-hooks/useFetch/useFetch";
import Loader from "../../components/loader/Loader";
import ErrorPage from "../../components/errorPage/ErrorPage";

type TExtraProps = LazyLoadProps;

interface IProps extends TExtraProps {
  // Define your props here
  className?: string;
}

export default function ReactLazyLoad({
  className,
  debounce = 200,
  height = 300,
  offset = 150,
}: IProps) {
  const { data, loading, error } = useFetch({ url: "/images/burger.json" });

   if (loading)
      return (
        <div>
          <Loader />
        </div>
      );
  
    if (error) return <ErrorPage error={error} resetErrorBoundary={() => {}} />;

  const renderLazyLoadCom = (children: ReactNode, key:string) => {

    return (
      <LazyLoad
        key={key}
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
      {data?.results?.map((each: TImageCard) =>
        renderLazyLoadCom(<ImageCard key={each.id} data={each} />, each.id)
      )}
    </GridLayout>
  );
}
