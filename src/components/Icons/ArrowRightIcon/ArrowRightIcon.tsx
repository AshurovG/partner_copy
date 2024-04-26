import * as React from "react"
import { IconProps } from "../Icon"

const ArrowRightIcon: React.FC<IconProps> = ({
  className,
  color,
  width,
  height,
  onClick,
  fill,
}) => {
  return (
    <svg
      viewBox="0 0 1024 1024"
      onClick={onClick}
      color={color}
      width={width ? width : 60}
      height={height ? height : 60}
      className={className}
    >
      <path
        d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"
        fill={fill || "#fff"}
      />
    </svg>
  )
}
export default ArrowRightIcon
