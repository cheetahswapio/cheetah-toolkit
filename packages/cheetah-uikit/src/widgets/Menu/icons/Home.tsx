import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5" d="M21.64,11,20,9.44V4.34a.58.58,0,0,0-.58-.58H15.31a.59.59,0,0,0-.59.58v.33l-2-1.86a1,1,0,0,0-1.38,0L2.36,11a1,1,0,0,0,.69,1.78H4.48v8.17a.58.58,0,0,0,.59.59H10a.58.58,0,0,0,.59-.59V16h2.88v5a.58.58,0,0,0,.59.59h4.9a.58.58,0,0,0,.59-.59V12.75H21A1,1,0,0,0,21.64,11Zm-2.71.61a.58.58,0,0,0-.58.58v8.18H14.62v-5a.59.59,0,0,0-.59-.58H10a.59.59,0,0,0-.59.58v5H5.65V12.16a.58.58,0,0,0-.58-.58H3.44L12,3.77l2.92,2.66a.56.56,0,0,0,.63.1A.58.58,0,0,0,15.9,6V4.93h2.88V9.69a.6.6,0,0,0,.19.44l1.59,1.45Z" />
    </Svg>
  );
};

export default Icon;
