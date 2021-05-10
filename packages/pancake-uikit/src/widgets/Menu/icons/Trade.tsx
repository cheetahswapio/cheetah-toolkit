import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5" d="M20.59,5.3a.73.73,0,0,0-.78.66l-.1,1a9.12,9.12,0,0,0-15.86.76.72.72,0,1,0,1.29.65A7.68,7.68,0,0,1,18.5,7.79l-1-.74a.72.72,0,0,0-1,.17.73.73,0,0,0,.17,1l3.13,2.23a.72.72,0,0,0,1.14-.52l.35-3.85A.74.74,0,0,0,20.59,5.3Z"
      />
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5" d="M19.84,15.26a.73.73,0,0,0-1,.32,7.68,7.68,0,0,1-13.36.63l1,.74a.72.72,0,0,0,1-.17.73.73,0,0,0-.17-1L4.24,13.54a.73.73,0,0,0-1.14.52l-.35,3.85a.74.74,0,0,0,.66.79A.72.72,0,0,0,4.19,18L4.29,17a9.12,9.12,0,0,0,15.86-.76A.73.73,0,0,0,19.84,15.26Z"
      />
    </Svg>
  );
};

export default Icon;
