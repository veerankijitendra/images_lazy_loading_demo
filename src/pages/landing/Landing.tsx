import {  useState } from "react";
import { useNavigate } from "react-router-dom";

import ErrorPage from "../../components/errorPage/ErrorPage";
import ImageCard from "../../components/image-card/ImageCard";
import Loader from "../../components/loader/Loader";
import useFetch from "../../custom-hooks/useFetch/useFetch";
import { TImageCard } from "../../utils/types";
import ReactLazyLoadImage from "../react-lazy-load-image-component/ReactLazyLoadImage";
import ReactLazyLoad from "../react-lazyload/ReactLazyLoad";
import { trackWindowScroll } from "react-lazy-load-image-component";
import IntersectionLazyLoad from "../intersection-lazy-load/IntersectionLazyLoad";
import Button , {ButtonProps} from "../../components/button/Button";
import { ERoutes } from "../../utils/constants/route-constants";

interface IProps {
  // className?: string;
}

interface IButtonNames extends Pick<ButtonProps, "variant" | "dataPath"> {
  name: string;
}


 function Landing({ }: IProps) {
  const navigate = useNavigate()


 

  const buttonData:IButtonNames[]  = [
    {
      name: "Lazy load component",
      dataPath: ERoutes.lazyLoadComponent,
      variant: "primary"

    },
    {
      name: "Lazy load image component",
      dataPath: ERoutes.lazyLoadImageComponent,
      variant: "secondary",

    },
    {
      name: "Native intersection observer",
      dataPath: ERoutes.nativeIntersectionObserver,
      variant: "danger"
    }
  ]

  const handleOnClick = (event?: React.MouseEvent<HTMLButtonElement>) => {
    if(!event) return;
    const dataPath = event.currentTarget.getAttribute("data-path");
    if(dataPath) navigate(dataPath)
  }

  return (
    <div className="p-2">
      <section className="grid grid-cols-1 gap-2 sm:grid-cols-3">
        {buttonData.map(({ name, ...rest }) => (
          <Button key={name} size="sm" type="button" {...rest} onClick={handleOnClick}>
            {name}
          </Button>
        ))}
      </section>
    </div>
  );
}

export default trackWindowScroll(Landing)