import React, { useEffect, useRef, useState, FC } from "react";
import "./LazyPicture.css";
import { TImageCard } from "../../utils/types";

interface IProps {
  width?: string;
  height?: string;
  className?: string;
  card: TImageCard;
  alt: string;
}

const LazyPicture: FC<IProps> = ({
  card,
  alt,
  className = "",
  width = "100%",
  height = "200px",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "100px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="lazy-picture-wrapper"
      style={{ width, height, position: "relative", overflow: "hidden" }}
    >
      {/* Skeleton */}
      {!isLoaded && <div className="skeleton-loader" />}

      {/* Image */}
      {isVisible && (
        <picture>
          <source
            srcSet={`
            ${card.urls.thumb} 200w,
            ${card.urls.small} 400w,
            ${card.urls.regular} 1080w,
            ${card.urls.full} 1920w
          `}
            sizes="(max-width: 400px) 200px,
                 (max-width: 768px) 400px,
                 (max-width: 1200px) 1080px,
                 1920px"
            type="image/jpeg"
          />
          <img
            src={card.urls.small} // fallback
            alt="Burger"
            loading="lazy"
            style={{ width: "100%", height: "auto" }}
            onLoad={() => {
              setIsLoaded(true);
            }}
          />
        </picture>
      )}
    </div>
  );
};

export default LazyPicture;
