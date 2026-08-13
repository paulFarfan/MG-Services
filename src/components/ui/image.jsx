import React from "react";
import { cn } from "@/lib/utils";

const Image = React.forwardRef(
  ({ src, alt = "", className, ...props }, ref) => {
    return (
      <img
        ref={ref}
        src={src}
        alt={alt}
        className={cn(className)}
        loading="lazy"
        {...props}
      />
    );
  },
);

Image.displayName = "Image";

export { Image };
