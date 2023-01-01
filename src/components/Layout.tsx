import * as React from "react"
import Header from "./Header";
import Footer from "./Footer";
import classNames from "classnames";
import {
  layoutRoot,
} from "./Layout.module.scss"

interface LayoutProps {
  addHeaderPadding?: boolean | undefined,
  className?: string,
};

export default function (props: React.PropsWithChildren<LayoutProps>): React.ReactElement<any> {
  const className = classNames(layoutRoot, props.className);
  return (
    <div className={className}>
      <Header addHeaderPadding={props.addHeaderPadding}/>
      {props.children}
      <Footer />
    </div>
  );
};
