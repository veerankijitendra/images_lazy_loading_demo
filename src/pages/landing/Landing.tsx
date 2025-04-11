import useFetch from "../../custom-hooks/useFetch/useFetch";
interface IProps {
  // Define your props here
}

export default function Landing({}: IProps) {
  const {data} = useFetch({url: "/images/burger.json"})
  console.log(data,"jitendra")
  return (
    <div>
      <h1>Landing</h1>
    </div>
  );
}