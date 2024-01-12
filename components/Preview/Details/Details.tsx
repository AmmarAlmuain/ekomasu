import React from "react";
import Suggestions from "./Suggestions";
import DBlock from "./DBlock";

function Details() {
  return (
    <div className=" flex w-full my-6 justify-between gap-x-6">
      <DBlock />
      <Suggestions />
    </div>
  );
}

export default Details;
