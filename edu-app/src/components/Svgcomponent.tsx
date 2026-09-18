import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

interface SVGComponentProps extends SvgProps {
  fill?: string;
}

// #new Wrapped with React.memo for performance optimization
const SVGComponent = React.memo(({ fill = "#ffffffff", ...props }: SVGComponentProps) => (
<Svg
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 418 300"
    width={418}
    height={300}
    >  
	<Path
     d="M 0 0 V 300 H 168 Q 230 300 259 279 L 280 259 Q 310 230 341 230 H 420 V 0" 
     fill={fill} 
     />
</Svg>
));

// #new Add display name for debugging
SVGComponent.displayName = 'SVGComponent';

export default SVGComponent;