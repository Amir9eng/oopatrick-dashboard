import React, { SVGProps } from 'react';

interface IProps extends SVGProps<SVGSVGElement> {
  color?: string;
}

const PositionIcon = (props: IProps) => {
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
        d="M20.25 21V12H14.25V21H11.25V9H5.25V21H3V1.5H1.5V21C1.5 21.3978 1.65804 21.7794 1.93934 22.0607C2.22064 22.342 2.60218 22.5 3 22.5H22.5V21H20.25ZM9.75 10.5V15H6.75V10.5H9.75ZM18.75 13.5V18H15.75V13.5H18.75Z"
        fill={props.color ?? 'white'}
        fill-opacity={props.color ? '1' : '0.4'}
      />
      <path
        d="M17.0893 10.5C16.7709 10.5002 16.4607 10.3985 16.2043 10.2098L8.40354 4.49026L6.18129 7.50001L4.97754 6.60451L7.21404 3.60451C7.44659 3.29141 7.79205 3.08132 8.17703 3.01886C8.56201 2.9564 8.95618 3.0465 9.27579 3.27001L17.0915 9.00001L19.7945 5.35501L20.9998 6.24751L18.2968 9.89401C18.1569 10.0824 17.9748 10.2353 17.7651 10.3406C17.5554 10.4458 17.3239 10.5004 17.0893 10.5Z"
        fill={props.color ?? 'white'}
        fill-opacity={props.color ? '1' : '0.4'}
      />
    </svg>
  );
};

export default PositionIcon;
