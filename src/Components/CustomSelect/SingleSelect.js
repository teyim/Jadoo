import React from "react";
import Select from 'react-select';


export default function SingleSelect({height,data}) {
  const inputStyle = () => ({
    alignItems: 'center',
    display: 'flex',
      height: height,
  });
  const colourStyles={
    input: (styles) => ({ ...styles, ...inputStyle() }),
  };


  return <Select options={data} styles={colourStyles}></Select>;
}
