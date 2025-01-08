import { useEffect } from "react";

import { ReactNode } from "react";

const ScrollTop = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return children || null;
};

export default ScrollTop;
