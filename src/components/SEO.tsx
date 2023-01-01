import * as React from "react";

interface SEOProps {}

export default function(props: React.PropsWithChildren<SEOProps>) {
  return (<>{props.children}</>);
};