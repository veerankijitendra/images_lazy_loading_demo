import { useEffect, useState } from "react";
interface IProps {
  url: string;
}

export default function useFetch({ url }: IProps) {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);

  const fetchTheData = async () => {
    try {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
    } catch (err) {
      setData(null);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTheData();
  }, [url]);
  return (
    {
        error,
        data,
        loading,
        setLoading
    }
  );
}
