import React from "react";

interface IImageProps {
  src: string;
  alt: string;
}

export const Image: React.FC<IImageProps> = ({ src, alt }) => {
  return (
    <div className="md:flex-shrink-0">
      <img className="h-48 w-full object-cover md:w-48" src={src} alt={alt} />
    </div>
  );
};
