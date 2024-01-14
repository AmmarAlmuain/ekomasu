import React from "react";
import Main from "./Main/Main";
import Details from "./Details/Details";
import Recommend from "./Recommend/Recommend";
import Breadcrumbs from "./Breadcrumbs";

function Preview() {
  return (
    <section className="bg-wall w-full py-8 gap-y-8 max-w-full justify-center flex flex-col">
      <Breadcrumbs />
      <Main />
      <Details />
      <Recommend />
    </section>
  );
}

export default Preview;
