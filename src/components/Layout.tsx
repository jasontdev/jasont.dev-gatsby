import React, {ReactElement} from "react";
import "../styles/global.css";

export function Layout({children}: { children: ReactElement }) {
  return <div>{children}</div>
}