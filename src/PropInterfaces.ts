import React from "react";

export interface Props {
  isMobile: boolean;
  count?: [number, React.Dispatch<React.SetStateAction<number>>];
}
