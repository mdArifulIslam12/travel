import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{
          color: match ? "rgb(255 102 71)" : "black",
          borderStyle: match ? "solid" : "",
          borderWidth: match ? "0 0 2px" : "",
          borderColor: match ? "rgb(255 102 71)" : "",
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}

export default CustomLink;
