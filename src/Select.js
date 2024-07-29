import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

const SelectComponent = ({ selectValue, onChange }) => {

  const handleChange = (templateType) => {

    console.log(templateType)

    console.log(templateType.target.value)
    console.log("La opcion seleccionada es:" + templateType.target.value);
    onChange(templateType.target.value); // Ya envia el texto seleccionado
  };

  return (
    <Form.Select name="selectValue" value={selectValue} onChange={handleChange}>
      <option value=""></option>
      <option value="SI">SI</option>
      <option value="NO">NO</option>
      <option value="A VECES">A VECES</option>
      <option value="NUNCA">NUNCA</option>
      </Form.Select>
  );
};

export default SelectComponent;