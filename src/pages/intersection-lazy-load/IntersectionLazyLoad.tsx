import LazyPicture from "../../components/custom-lazy-component/CustomLazyComponent";
import GridLayout from "../../layout/GridLayout";
import { TImageCard } from "../../utils/types";

interface IProps {
  // Define your props here
  data: TImageCard[]
}

export default function IntersectionLazyLoad({data}: IProps) {
  return (
    <GridLayout className="">
        {data.map(each => <LazyPicture card={each} key={each.id} alt={each.id} />)}
    </GridLayout>
  );
}