import React from "react";
import Select from "react-select";

export default function SingleSelect() {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return <Select options={options}></Select>;
}
