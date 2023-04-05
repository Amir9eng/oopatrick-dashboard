import React, { SVGProps } from 'react';

interface IProps extends SVGProps<SVGSVGElement> {
  color?: string;
}

const DarkIcon = (props: IProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.1 12.08C8.76998 7.57001 10.6 3.60001 11.63 2.01001C6.26998 2.20001 1.97998 6.59001 1.97998 12C1.97998 12.14 1.99998 12.28 1.99998 12.42C2.61998 12.15 3.28998 12 3.99998 12C5.65998 12 7.17998 12.83 8.09998 14.15C8.93537 14.3907 9.66993 14.8963 10.193 15.5907C10.716 16.2851 10.9993 17.1307 11 18C11 19.52 10.13 20.83 8.87998 21.51C9.85998 21.83 10.91 22.01 11.99 22.01C15.49 22.01 18.57 20.21 20.36 17.49C18 17.72 13.38 16.52 11.1 12.08Z"
        fill="white"
        fill-opacity={props.color ? '1' : '0.4'}
      />
      <path
        d="M7 16H6.82C6.4 14.84 5.3 14 4 14C2.34 14 1 15.34 1 17C1 18.66 2.34 20 4 20H7C8.1 20 9 19.1 9 18C9 16.9 8.1 16 7 16Z"
        fill={props.color ?? 'white'}
        fill-opacity="0.4"
      />
    </svg>
  );
};

export default DarkIcon;
