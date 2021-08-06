import React from "react";

export default function Button(props) {
  const { click, customStyle } = props;

  return (
    <button
      onClick={() => click()}
      className={
        "py-2 px-4  text-white rounded-md transition duration-300 flex align-baseline" +
        customStyle
      }>
      {props.children}
    </button>
  );
}
