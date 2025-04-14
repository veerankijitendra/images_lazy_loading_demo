import { FC, useState } from "react";

import { TImageCard } from "../../utils/types";

interface IProps {
  className?: string;
  data: TImageCard;
}

const ImageCard: FC<IProps> = ({ className, data }) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  return (
    <div
      className={`${
        className ?? ""
      } max-w-sm mx-auto bg-white dark:bg-gray-800 h-full rounded-xl shadow-md overflow-hidden transform hover:scale-[1.02] transition duration-300 ease-in-out`}
    >
      <img
        onLoad={() => {
          setLoaded(true);
        }}
        className={`h-60 w-full object-cover transition-all duration-700 ease-in-out ${
          loaded ? "blur-0 scale-100" : "blur-md scale-105"
        }`}
        src={data.urls.regular}
        alt={data.alt_description || "Burger image"}
      />
      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white capitalize mb-2 truncate">
          {data.alt_description}
        </h2>
        <div className="flex items-center space-x-3 mb-4">
          <img
            className="w-8 h-8 rounded-full"
            src={data.user.profile_image.small}
            alt={data.user.username}
          />
          <div className="text-sm">
            <p className="text-gray-900 dark:text-white font-medium">
              {data.user.name}
            </p>
            <p className="text-gray-500 dark:text-gray-300">
              @{data.user.username}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-600 dark:text-gray-300 text-sm">
            ❤️ {data.likes} Likes
          </span>
          <a
            href={data.links.download}
            target="_blank"
            rel="noreferrer"
            className="text-indigo-600 hover:text-indigo-800 text-sm font-medium transition"
          >
            Download ⬇️
          </a>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
