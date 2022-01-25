import React from "react";

// eslint-disable-next-line react/prop-types
export default function MovieData({ data }) {
  const dataToDisplay = JSON.stringify(data);

  return <div>{dataToDisplay}</div>;
}
