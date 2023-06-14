/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export const Links = ({ title, className }) => {
  return (
    <a
      href="#"
      className={`hover:text-blue-700 hover:font-medium rounded-md px-3 py-2 text-lg font-normal ${className}`}
      aria-current="page"
    >
      {title}
    </a>
  );
};
