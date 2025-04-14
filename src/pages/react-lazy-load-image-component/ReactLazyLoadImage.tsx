import { LazyLoadComponent } from "react-lazy-load-image-component";
import { TImageCard } from "../../utils/types";
import GridLayout from "../../layout/GridLayout";
import ImageCard from "../../components/image-card/ImageCard";
import { useRef } from "react";

interface IProps {
  // Define your props here
  data: TImageCard[];
}

export default function ReactLazyLoadImage({ data: iData }: IProps) {
  const count = useRef<number>(0)
  const componentCount = useRef<number>(0)

  const handleCountUpdate = () => {
    count.current = count.current + 1;
  console.log(count.current);
  }

  const handleComponentRederCount = () => {
    componentCount.current = componentCount.current + 1;
    console.log(componentCount.current,"component")
  }


  return (
    <GridLayout className="">
      {/* <div> */}
      {/* Redering the lazy load image  */}
      {/* {iData.map((each,index) => <ImageCard key={each.id+index} data={each} isLazy={true} />)}  */}
      {iData.map((each, index) => (
        <LazyLoadComponent>
          <ImageCard componentLoad={handleComponentRederCount}  onImageLoad = {handleCountUpdate}key={each.id + index} data={each} isLazy={true} />
        </LazyLoadComponent>
      ))}

      {/* </div> */}
    </GridLayout>
  );
}
