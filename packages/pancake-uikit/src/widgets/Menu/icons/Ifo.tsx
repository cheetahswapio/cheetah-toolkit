import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M19.66,2H16.53a2.34,2.34,0,0,0-2.34,2.34v.79h-.78a.78.78,0,1,0,0,1.56h.78v.78a2.34,2.34,0,0,0,2.34,2.34h.78v.86a.79.79,0,0,0,1.57,0V9.81h.78A2.34,2.34,0,0,0,22,7.47V4.34A2.34,2.34,0,0,0,19.66,2Zm.78,5.47a.78.78,0,0,1-.78.78H16.53a.78.78,0,0,1-.78-.78V6.69h1.56a.78.78,0,1,0,0-1.56H15.75V4.34a.78.78,0,0,1,.78-.78h3.13a.78.78,0,0,1,.78.78Zm-.78,6.72h-.78v-.78a.79.79,0,0,0-1.57,0v.78h-.78a2.34,2.34,0,0,0-2.34,2.34v.78h-.86a.79.79,0,0,0,0,1.57h.86v.78A2.34,2.34,0,0,0,16.53,22h3.13A2.34,2.34,0,0,0,22,19.66V16.53A2.34,2.34,0,0,0,19.66,14.19Zm.78,5.47a.78.78,0,0,1-.78.78H16.53a.78.78,0,0,1-.78-.78V16.53a.78.78,0,0,1,.78-.78h.78v1.56a.79.79,0,0,0,1.57,0V15.75h.78a.78.78,0,0,1,.78.78ZM10.67,5.13H9.81V4.34A2.34,2.34,0,0,0,7.47,2H4.34A2.34,2.34,0,0,0,2,4.34V7.47A2.34,2.34,0,0,0,4.34,9.81h.82v.74a.79.79,0,1,0,1.57,0V9.81h.74A2.34,2.34,0,0,0,9.81,7.47V6.69h.86a.78.78,0,0,0,0-1.56ZM8.25,7.47a.78.78,0,0,1-.78.78H6.73V6.65a.79.79,0,0,0-1.57,0v1.6H4.34a.78.78,0,0,1-.78-.78V4.34a.78.78,0,0,1,.78-.78H7.47a.78.78,0,0,1,.78.78Zm2.34,9.84H9.81v-.78a2.34,2.34,0,0,0-2.34-2.34H6.73v-.9a.79.79,0,0,0-1.57,0v.9H4.34A2.34,2.34,0,0,0,2,16.53v3.13A2.34,2.34,0,0,0,4.34,22H7.47a2.34,2.34,0,0,0,2.34-2.34v-.78h.78a.79.79,0,1,0,0-1.57ZM8.25,19.66a.78.78,0,0,1-.78.78H4.34a.78.78,0,0,1-.78-.78V16.53a.78.78,0,0,1,.78-.78H7.47a.78.78,0,0,1,.78.78v.78H6.69a.79.79,0,0,0,0,1.57H8.25Z" />
    </Svg>
  );
};

export default Icon;