import React, { FC } from "react";

interface LoaderProps {
  author: string;
}

export const Loader: FC<LoaderProps> = ({ author }): JSX.Element => {
  return (
    <div id="loading-screen">
      <div className="middle-content">
        <div className="text-middle">{author}</div>
        <div className="fill-loader"></div>
      </div>
    </div>
  );
};
