import React from "react";
import { InfinitySpin } from "react-loader-spinner";

interface LoaderProps {
  color?: string;
  width?: number;
}

const Loader: React.FC<LoaderProps> = ({ color = "#4fa94d", width = 200 }) => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <InfinitySpin width={width.toString()} color={color} />
    </div>
  );
};

export default Loader;
