import * as React from "react";
import { IconProps } from "../Icon";

const MailIcon: React.FC<IconProps> = ({
  className,
  color,
  width,
  height,
  onClick,
}) => {
  let classes = `icon_wrapper arrow_down_icon ${className}`;
  return (
    <svg
      viewBox="0 0 58 46"
      onClick={onClick}
      color={color}
      width={width ? width : 58}
      height={height ? height : 46}
      className={classes}
    >
      <path
        d="M49.446 3.0564H8.70791C5.49376 3.0564 2.88818 5.60757 2.88818 8.75459V37.2456C2.88818 40.3926 5.49376 42.9438 8.70791 42.9438H49.446C52.6602 42.9438 55.2657 40.3926 55.2657 37.2456V8.75459C55.2657 5.60757 52.6602 3.0564 49.446 3.0564Z"
        // stroke="#CC9966"
        stroke="#fff"
        strokeWidth="4.16667"
        strokeLinecap="round"
      />
      <path
        d="M5.7981 8.75454L23.8393 22.0027C26.9432 24.282 31.2108 24.282 34.3148 22.0027L52.3559 8.75439"
        // stroke="#CC9966"
        stroke="#fff"
        strokeWidth="4.16667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default MailIcon;
