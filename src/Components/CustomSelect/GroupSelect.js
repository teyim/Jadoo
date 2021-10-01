import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

export default function GroupSelect({height}) {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const inputStyle = () => ({
    alignItems: 'center',
    display: 'flex',
    height: height,
  });
  const colourStyles = {
    input: (styles) => ({ ...styles, ...inputStyle() }),
  };
  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      options={options}
      styles={colourStyles}
    />
  );
}
