import React from "react";

interface IPageBody {
  children: React.ReactNode;
}

function PageBody({ children }: IPageBody) {
  return <>{children}</>;
}

export default PageBody;
