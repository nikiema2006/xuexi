import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

interface SVGComponentProps extends SvgProps {
  fill?: string;
}

// #new Wrapped with React.memo for performance optimization
const SVGComponent = React.memo(({ fill = "#000", ...props }: SVGComponentProps) => (
  <Svg
  //  xmlns="http://www.w3.org/2000/svg"
    viewBox="-0.1 -0.1 230.2 100.2"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <Path
      d="M 0 0 T 0 100 L 25 100 C 186 100 54 13 230 0"
      stroke="#111"
      strokeWidth={0.1}
      fill={fill}
    />
  </Svg>
));

// #new Add display name for debugging
SVGComponent.displayName = 'SVGComponent';

export default SVGComponent;