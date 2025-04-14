import { FC } from "react";
import { FallbackProps } from "react-error-boundary";

interface IProps extends FallbackProps {
  data?: string;
}

const ErrorPage: FC<IProps> = ({ error, resetErrorBoundary }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-white px-4">
      <h1 className="text-9xl font-extrabold tracking-widest">500</h1>
      <div className="bg-red-600 px-2 text-sm rounded rotate-12 absolute mt-20">
        Unexpected Error
      </div>
      <p className="mt-10 text-lg text-center max-w-md">
        {error.message || "Something went wrong."}
      </p>
      <button
        onClick={resetErrorBoundary}
        className="mt-6 inline-block px-6 py-3 bg-indigo-600 text-white text-sm font-medium rounded shadow hover:bg-indigo-700 transition"
      >
        Try Again
      </button>
    </div>
  );
};

export default ErrorPage;
