import React from "react";
import { Heading } from "./heading";
import { Image } from "./image";

export interface IProperty {
  property: {
    location: string;
    country: string;
    property_type: string;
    bedroom_count: number;
    bathroom_count: number;
    price: string;
    image_urls: string[];
    title: string;
    description: string;
  };
}

export const Card: React.FC<IProperty> = ({
  property: {
    title,
    location,
    country,
    property_type,
    image_urls,
    description,
    bedroom_count,
    bathroom_count,
    price,
  },
}) => {
  return (
    <article className="card max-w-sm mx-auto bg-lightyellow rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4 border border-black-300 hover:rotate-45">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:w-48"
            src={image_urls.length > 0 ? image_urls[0] : "fallback_image.jpg"}
            alt={title}
          />
        </div>
        <div className="p-8">
          <h4 className="card-title block mt-1 text-lg leading-tight font-bold text-red-500 hover:text-purple-500">
            {title}
          </h4>
          <p className="mt-2 text-blue-500">{description}</p>
          <p className="mt-2 text-blue-500">
            <strong>Location:</strong> {location}, {country}
          </p>
          <p className="mt-2 text-blue-500">
            <strong>Type:</strong> {property_type}
          </p>
          <p className="mt-2 text-blue-500">
            <strong>Bedrooms:</strong> {bedroom_count}
          </p>
          <p className="mt-2 text-blue-500">
            <strong>Bathrooms:</strong> {bathroom_count}
          </p>
          <p className="mt-2 text-blue-500">
            <strong>Price:</strong> {price}
          </p>
        </div>
      </div>
    </article>
  );
};
