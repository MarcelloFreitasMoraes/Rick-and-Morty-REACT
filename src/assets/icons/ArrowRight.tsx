import React from "react"

interface ArrowRightProps {
    width?: number
    height?: number
}

export const ArrowRight = ({ width, height }: ArrowRightProps) => {
    return (
        <svg width={width ? width : 7} height={height ? height : 12} viewBox="0 0 7 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Rounded" transform="translate(-687.000000, -2464.000000)">
            <g id="Hardware" transform="translate(100.000000, 2404.000000)">
                <g id="-Round-/-Hardware-/-keyboard_arrow_right" transform="translate(578.000000, 54.000000)">
                    <g>
                        <rect id="Rectangle-Copy-105" x="0" y="0" width="30" height="30"></rect>
                        <path d="M9.29,15.88 L13.17,12 L9.29,8.12 C8.9,7.73 8.9,7.1 9.29,6.71 C9.68,6.32 10.31,6.32 10.7,6.71 L15.29,11.3 C15.68,11.69 15.68,12.32 15.29,12.71 L10.7,17.3 C10.31,17.69 9.68,17.69 9.29,17.3 C8.91,16.91 8.9,16.27 9.29,15.88 Z" id="🔹-Icon-Color" fill="#1D1D1D"></path>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>
    )
}

