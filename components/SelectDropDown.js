import React from "react";
import styles from "./Select.module.css";
import { formLabel } from "./Input.module.css";
const SelectDropDown = ({ label, id, options = [] }) => {
  return (
    <>
      <label for="theme" class={formLabel}>
        {label}
      </label>
      <select class={styles.formSelect} aria-label={label} id={id}>
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectDropDown;
