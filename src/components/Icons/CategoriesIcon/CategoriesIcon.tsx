import * as React from 'react'
import { IconProps } from '../Icon';

const CategoriesIcon: React.FC<IconProps> = ({ onClick }) => {
  return <svg viewBox="0 0 32 32" width={40} height={40} onClick={onClick} xmlns="http://www.w3.org/2000/svg">
        <defs></defs>
        <title/>
        <g data-name="Layer 5" id="Layer_5">
            <path fill="#a0774d" d="M16,31A15,15,0,1,1,31,16,15,15,0,0,1,16,31ZM16,3A13,13,0,1,0,29,16,13,13,0,0,0,16,3Z"/>
            <path fill="#a0774d" d="M21,17H11a1,1,0,0,1,0-2H21a1,1,0,0,1,0,2Z"/>
            <path fill="#a0774d" d="M21,12H11a1,1,0,0,1,0-2H21a1,1,0,0,1,0,2Z"/>
            <path fill="#a0774d" d="M21,22H11a1,1,0,0,1,0-2H21a1,1,0,0,1,0,2Z"/>
        </g>
    </svg>
}

export default CategoriesIcon; 