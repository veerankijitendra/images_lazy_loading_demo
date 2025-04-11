import useFetch from "../../custom-hooks/useFetch/useFetch";

interface IProps {
  // Define your props here
}

export default function ReactLazyLoad({}: IProps) {
  const { data, loading, error } = useFetch({ url: "/images/burger.json" });
  if (loading) return <div>Loading</div>;

  if (error) return <div>Something went wrong</div>
  return (
    <div>
      <h1>ReactLazyLoad</h1>
    </div>
  );
}
