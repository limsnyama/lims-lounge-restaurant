import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

export default () => {
  const query = useStaticQuery(graphql`
    query {
      site {
        buildTime
      }
    }
  `)

  const buildTime = new Date(query.site.buildTime);

  return (<p>
    This site was last built {`${buildTime}`}.
  </p>);
}
