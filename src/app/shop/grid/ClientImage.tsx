"use client";

import React from "react";

interface ClientImageProps {
  src: string;
  alt: string;
}

const ClientImage = ({ src, alt }: ClientImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-48 object-cover rounded-md"
    />
  );
};

export default ClientImage;
