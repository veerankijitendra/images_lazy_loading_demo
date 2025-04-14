import { useEffect, useRef, useState } from "react";
import ErrorPage from "../../components/errorPage/ErrorPage";
import ImageCard from "../../components/image-card/ImageCard";
import Loader from "../../components/loader/Loader";
import useFetch from "../../custom-hooks/useFetch/useFetch";
import { TImageCard } from "../../utils/types";
import ReactLazyLoadImage from "../react-lazy-load-image-component/ReactLazyLoadImage";
import ReactLazyLoad from "../react-lazyload/ReactLazyLoad";
import { trackWindowScroll } from "react-lazy-load-image-component";

interface IProps {
  // className?: string;
}

const ACCESS_KEY = "Chjd-kP9Wl3Ga5hURcw2e3PjYjl0ItAfV2lYkdHMdHI" + "kldsf"

 function Landing({ }: IProps) {
  const [reData,setReData] = useState<any>([])
  const perPage = 25;
  const { data, loading, error } = useFetch({ url: "/images/burger.json" });
  const count = useRef(0)

  console.log("here")
//   const fetchTheData = async (page:number = 1) => {
//     try {
//       const response = await fetch(`https://api.unsplash.com/search/photos?page=${page}&per_page=${perPage}&query=burger&client_id=${ACCESS_KEY}`
// );
//       const result = await response.json();
//       setReData((prev:any) => ([...prev,...result.results]))


//       // setData(result);
//     } catch (err) {
//       // setData(null);
//       // setError(err);
//     } finally {
//       // setLoading(false);
//     }
//   };

//   useEffect(() =>{
//     for(let i = 0 ; i < 10 ; i++) {
//       // fetchTheData(i+1)
//     }
//   },[])


  if (loading)
    return (
      <div>
        <Loader />
      </div>
    );

  if (error) return <ErrorPage error={error} resetErrorBoundary={() => {}} />;

  console.log(reData,'jitendra')

  // const updatedData = Array(5)
  // .fill("")
  // .flatMap(() => data.results);

  return (
    <ReactLazyLoadImage  data={data.results.slice(1,100)} />

    // <div
    //   className={`${className} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-10`}
    // >
      /* {Array(5)
        .fill("")
        .flatMap(() => data.results)
        .map((each: TImageCard) => (
          <ReactLazyLoad key={each.id}>
            <ImageCard data={each} />
          </ReactLazyLoad>
        ))} */
        /* {<ReactLazyLoad  data={updatedData}/>} */
    // </div>
  );
}

export default trackWindowScroll(Landing)