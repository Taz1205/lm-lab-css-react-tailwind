import React from "react";

interface IHeadingProps {
  text: string;
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const Heading: React.FC<IHeadingProps> = ({ text, type }) => {
  const CustomTag = `${type}` as keyof JSX.IntrinsicElements;

  return (
    <CustomTag className="font-bold text-red-500  hover:text-purple-500">
      {text}
    </CustomTag>
  );
};
