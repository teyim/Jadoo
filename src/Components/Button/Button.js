import React from "react";

export default function Button(props) {
  const { click, customStyle, disabled } = props;

  return (
    <button
      onClick={() => click()}
      disabled={disabled}
      className={
        "py-2 px-4  text-white rounded-md transition duration-300 flex align-baseline" +
        customStyle
      }>
      {props.children}
    </button>
  );
}
