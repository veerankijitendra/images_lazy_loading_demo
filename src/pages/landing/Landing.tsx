import ErrorPage from "../../components/errorPage/ErrorPage";
import ImageCard from "../../components/image-card/ImageCard";
import Loader from "../../components/loader/Loader";
import useFetch from "../../custom-hooks/useFetch/useFetch";
import { TImageCard } from "../../utils/types";
import ReactLazyLoad from "../react-lazyload/ReactLazyLoad";

interface IProps {
  className?: string;
}

export default function Landing({ className }: IProps) {
  const { data, loading, error } = useFetch({ url: "/images/burger.json" });

  if (loading)
    return (
      <div>
        <Loader />
      </div>
    );

  if (error) return <ErrorPage error={error} resetErrorBoundary={() => {}} />;

  return (
    <div
      className={`${className} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-10`}
    >
      {Array(5)
        .fill("")
        .flatMap(() => data.results)
        .map((each: TImageCard) => (
          <ReactLazyLoad key={each.id}>
            <ImageCard data={each} />
          </ReactLazyLoad>
        ))}
    </div>
  );
}
